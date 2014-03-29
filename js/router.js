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

Portfolio.ProjectRoute = Ember.Route.extend({
	actions: {
		nextImage: function(photo) {
			var proj = photo.get('project'); 
			var sel = proj.get('selected');
			var next = sel + 1;
			var dispNext = next + 1;

			var imgCount = proj.get('imageCount');

			console.log(sel + " " + next);

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
			});
			
			// 

			// photo.get('project').set('selected', next);
			// photo.set('isSelected', false); // set current not selected

			// var nextImg = photo.get('project').get('photos');
			// console.log(nextImg.get('imageUrl'));
			
		}
	},
	model: function(params) {
		Ember.Logger.debug("Project route");
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