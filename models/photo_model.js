Portfolio.Project = DS.Model.extend({
	photos: DS.hasMany('photo', {async:true}),
	projectName: DS.attr('string'),
	selected: DS.attr('int'),
	imageCount: DS.attr('int')
});

Portfolio.Photo = DS.Model.extend({
	project: DS.belongsTo('project'),
	imageUrl: DS.attr('string'),
	isSelected: DS.attr('boolean')
});

Portfolio.Project.FIXTURES = [
	{
		id: '1',
		projectName: "LA",
		photos: [1,2,3,4],
		selected: 1,
		imageCount: 4
	},
	{
		id: '2',
		projectName: "Music",
		photos: [5,6,7,8],
		selected: 1,
		imageCount: 4
	}
];

Portfolio.Photo.FIXTURES = [
	{
		id: '1',
		imageUrl: "images/la/1.jpg",
		isSelected: true,
		project: 1
	},
	{
		id: '2',
		imageUrl: "images/la/2.jpg",
		isSelected: false,
		project: 1
	},
	{
		id: '3',
		imageUrl: "images/la/3.jpg",
		isSelected: false,
		project: 1
	},
	{
		id: '4',
		imageUrl: "images/la/4.jpg",
		isSelected: false,
		project: 1
	},
	{
		id: '5',
		imageUrl: "images/music/1.jpg",
		isSelected: true,
		project: 2
	},
	{
		id: '6',
		imageUrl: "images/music/2.jpg",
		isSelected: false,
		project: 2
	},
	{
		id: '7',
		imageUrl: "images/music/3.jpg",
		isSelected: false,
		project: 2
	},
	{
		id: '8',
		imageUrl: "images/music/4.jpg",
		isSelected: false,
		project: 2
	}
];

