Portfolio.Router.map(function() {
	this.resource('contact');
	this.resource('projects');
	this.resource('project', { path: '/projects/:project_id' });
});

Portfolio.ProjectsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('project');
	}
});

var stopClick = false;

Portfolio.ProjectRoute = Ember.Route.extend({
	actions: {
		nextImage: function(photo) {

			if (stopClick) { // prevent rapid clicks
				return;
			}

			stopClick = true;

			$( "#galleryImage" ).fadeOut(800, function() {

				var proj = photo.get('project'); 
				var sel = proj.get('selected');
				var next = sel + 1;
				var dispNext = next + 1;

				var imgCount = proj.get('imageCount');

				if (next > (imgCount - 1)) // minus one to get max index
				{
					next = 0;
					dispNext = 1;
				}

				proj.set('selected', next);
				proj.set('dispSelected', dispNext);

				photo.set('isSelected', false);

				var photos = proj.get('photos');

				//satisfy promise array
				photos.then(function() {
					photos.objectAt(next).set('isSelected', true);
					$( "#galleryImage" ).removeAttr( "style" ).hide();
				});
			}).delay(200);

			$( "#galleryImage" ).removeAttr( "style" ).fadeIn(800, function() {
				stopClick = false;
			});
		}
	},

	model: function(params) {
		return this.store.find('project', params.project_id);
	}
});

Portfolio.PhotosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('photo');
	}
});

// Portfolio.PhotoController = Ember.ObjectController.extend({
	
// });


// Portfolio.PhotosRoute = Ember.Route.extend({
// 	model: function() {
// 		return this.store.find('photo'); // find the model
// 	}
// });

// Portfolio.ProjectsRoute = Ember.Route.extend({
// 	model: function() {
// 		return Portfolio.PROJECTS;
// 	}
// });


// Portfolio.ProjectRoute = Ember.Route.extend({
//   model: function(params) {
//     return Portfolio.PROJECTS.findBy('id', params.project_id);
//   }
// });