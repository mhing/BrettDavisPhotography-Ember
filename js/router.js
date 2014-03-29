Portfolio.Router.map(function() {
	this.resource('contact');
	this.resource('projects');
	this.resource('project', { path: '/projects/:project_id' });
});

Portfolio.ProjectsRoute = Ember.Route.extend({
	model: function() {
		Ember.Logger.debug("Projects route");
		return this.store.find('project');
	}
});

Portfolio.ProjectRoute = Ember.Route.extend({
	actions: {
		nextImage: function(photo) {
			var sel = photo.get('project').get('selected');
			var next = sel + 1;
			var imgCount = photo.get('project').get('imageCount');

			if (next > imgCount)
			{
				next = 1;
			}

			photo.get('project').set('selected', next);
			photo.set('isSelected', false); // set current not selected

			var nextImg = this.store.find('photo', next);
			nextImg.set('isSelected', true);
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