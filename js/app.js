App = Ember.Application.create();

App.Router.map(function() {
	this.resource('contact');
	this.resource('projects');
	this.resource('project', { path: ':project_id' });
});


App.ProjectsRoute = Ember.Route.extend({
	model: function() {
		return projects;
	}
});

App.ProjectRoute = Ember.Route.extend({
  model: function(params) {
    return projects[params.project_id - 1];
  }
});

App.IndexView = Ember.View.extend({
	didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
  },

  processChildElements: function() {
    setThumbnails();
  }
});

// App.Projects = DS.Model.extend({
// 	title: DS.attr('string'),
// 	images: DS.attr('array')
// });


var projects = [
	{
		id: 1,
		title: "Dai Kinchō Preview",
		images: [
			"images/dai-kincho-preview/1.jpg",
			"images/dai-kincho-preview/2.jpg"
		],
		currentImage: 1,
		imageCount: 2
	},
	{
		id: 2,
		title: "nyc",
		images: [
			"images/nyc/1.jpg",
			"images/nyc/2.jpg"
		],
		currentImage: 1,
		imageCount: 2
	}
];

thumbnails = ['images/thumbnails/dai-kincho.jpg',
			  'images/thumbnails/nyc.jpg',
			  'images/thumbnails/xpnyc.jpg',
			  'images/thumbnails/la.jpg',
			  'images/thumbnails/lubagram.jpg',
			  'images/thumbnails/auburn-burns.jpg',
			  'images/thumbnails/tmby-frsh.jpg',
			  'images/thumbnails/kendal-elder.jpg',
			  'images/thumbnails/madison.jpg',
			  'images/thumbnails/ana.jpg',
			  'images/thumbnails/margo.jpg',
			  'images/thumbnails/music.jpg'];

numProjects = 12;

setThumbnails = function() {
	for (var i = 0; i < numProjects; i++)
	{
		var id = "thumb-" + (i+1);
		var imageUrl = thumbnails[i];
		
		var image = $(document.getElementById(id)).css('background-image');

		if (image == 'none')
		{
			$(document.getElementById(id)).css('background-image', 'url(' + imageUrl + ')');
			$(document.getElementById(id)).css('background-size', 'cover');
			
			if (i === 2)
			{
				$(document.getElementById(id)).css('background-position', '50% 50%');
			}
			else if (i === 4)
			{
				$(document.getElementById(id)).css('background-position', '50% 75%');
			}
			else if (i === 5)
			{
				$(document.getElementById(id)).css('background-position', '50% 40%');
			}
		}
	}
};

findNavElem = function(text, sideBar, sub) {
	for (var i = 0; i < sideBar.length; i++)
	{
		var elem = $(sideBar[i].firstChild);

		if (elem.is('a'))
		{
			if (elem.text() === text)
			{
				return elem;
			}
		}
		else
		{
			for (var j = 0; j < sub.length; j++)
			{
				var subElem = $(sub[j].firstChild);

				if (subElem.is('a'))
				{
					if (subElem.text() === text)
					{
						return subElem;
					}
				}
			}
		}
	}
};

$(document).ready(function() {

	$('.thumbnail').hover(
		function() { // hover in
			var text = $( this ).children('p').children('span').text();
			var sideBar = $('#sidebar > ul').children();
			var sub = $('#sidebar > ul > li > ul').children('li');
				
			var navElem = findNavElem(text, sideBar, sub);

			navElem.toggleClass("hovered-nav");

		}, function() { // hover out
			var text = $( this ).children('p').children('span').text();
			var sideBar = $('#sidebar > ul').children();
			var sub = $('#sidebar > ul > li > ul').children('li');
				
			var navElem = findNavElem(text, sideBar, sub);

			navElem.toggleClass("hovered-nav");
		}
	);

});
