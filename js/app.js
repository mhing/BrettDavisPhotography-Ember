Portfolio = Ember.Application.create();

Portfolio.ApplicationAdapter = DS.FixtureAdapter.extend();

Portfolio.IndexView = Ember.View.extend({
	didInsertElement: function() {
		Ember.run.schedule('afterRender', this, 'processChildElements');
	},

	processChildElements: function() {
		setThumbnails();

		$('#brand').click(function() {
			var sideBar = $('#sidebar > ul').children();
			var sub = $('#sidebar > ul > li > ul').children('li');
			clearNavHighlight(sideBar, sub);
		});

		$('.thumbnail').hover(
			function() { // hover in
				var text = $( this ).children('p').children('span').text();
				var sideBar = $('#sidebar > ul').children();
				var sub = $('#sidebar > ul > li > ul').children('li');
					
				var navElem = findNavElem(text, sideBar, sub);

				navElem.toggleClass("hovered-nav");

			}, 
			function() { // hover out
				var text = $( this ).children('p').children('span').text();
				var sideBar = $('#sidebar > ul').children();
				var sub = $('#sidebar > ul > li > ul').children('li');
					
				var navElem = findNavElem(text, sideBar, sub);

				navElem.toggleClass("hovered-nav");
			}
		);

		$('.nav-link').hover(
			function() { // hover in
				highlightThumbnail($(this).text());
			},
			function() { // hover out
				highlightThumbnail($(this).text());
			}
		);
	}
});

Portfolio.ProjectView = Ember.View.extend({	
	didInsertElement: function() {
		Ember.run.schedule('afterRender', this, 'processChildElements');
	},

	processChildElements: function() {
		var header = $('#photo-container').children(0).children('h3').text().trim();

		// Handle reload of proj page
		updateSideBarHighlight(header);

		$('#brand').click(function() {
			var sideBar = $('#sidebar > ul').children();
			var sub = $('#sidebar > ul > li > ul').children('li');
			clearNavHighlight(sideBar, sub);
		});

		$('.nav-link').click(function() {
			var sideBar = $('#sidebar > ul').children();
			var sub = $('#sidebar > ul > li > ul').children('li');
			clearNavHighlight(sideBar, sub);

			selectedProj = $(this);

			$(this).addClass("hovered-nav");
		});
	}
});

updateSideBarHighlight = function(projHeader) {

	var sideBar = $('#sidebar > ul').children();
	var sub = $('#sidebar > ul > li > ul').children('li');

	for (var i = 0; i < sideBar.length; i++)
	{
		var elem = $(sideBar[i].firstChild);

		if (elem.is('a'))
		{
			if (elem.text() === projHeader)
			{
				elem.addClass("hovered-nav");
			}
		}
		else
		{
			for (var j = 0; j < sub.length; j++)
			{
				var subElem = $(sub[j].firstChild);

				if (subElem.is('a'))
				{
					if (subElem.text() === projHeader)
					{
						subElem.addClass("hovered-nav");
					}
				}
			}
		}
	}

};

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

clearNavHighlight = function(sideBar, sub) {
	for (var i = 0; i < sideBar.length; i++)
	{
		var elem = $(sideBar[i].firstChild);

		if (elem.is('a'))
		{
			elem.removeClass("hovered-nav");
		}
		else
		{
			for (var j = 0; j < sub.length; j++)
			{
				var subElem = $(sub[j].firstChild);

				if (subElem.is('a'))
				{
					subElem.removeClass("hovered-nav");
				}
			}
		}
	}
};

highlightThumbnail = function(navLabel) {
	var thumbs = $("#photo-container").children().children().children().children("p");

	for (var i = 0; i < thumbs.length; i++)
	{
		if ($(thumbs[i]).text() === navLabel)
		{
			$(thumbs[i]).children('span').toggleClass('thumbnailHover');
		}
	}
};


