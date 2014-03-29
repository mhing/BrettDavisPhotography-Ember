Portfolio.Project = DS.Model.extend({
	photos: DS.hasMany('photo', {async:true}),
	//thumbnail: DS.belongsTo('thumbnail', {async:true}),
	projectName: DS.attr('string'),
	selected: DS.attr('int'),
	dispSelected: DS.attr('int'),
	imageCount: DS.attr('int')
});

Portfolio.Photo = DS.Model.extend({
	project: DS.belongsTo('project'),
	imageUrl: DS.attr('string'),
	isSelected: DS.attr('boolean')
});

Portfolio.Thumbnail = DS.Model.extend({
	project: DS.belongsTo('project'),
	imageUrl: DS.attr('string')
});

Portfolio.Thumbnail.FIXTURES = [

];

Portfolio.Project.FIXTURES = [
	{
		id: '4',
		projectName: "LA",
		photos: [1,2,3,4],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '12',
		projectName: "Music",
		photos: [5,6,7,8],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '1',
		projectName: "Dai Kinchō Preview",
		photos: [9,10,11,12],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '2',
		projectName: "nyc",
		photos: [13,14,15,16],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '3',
		projectName: "xpnyc",
		photos: [17,18,19,20],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '5',
		projectName: "#Lubagram",
		photos: [21,22,23,24],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '6',
		projectName: "Auburn Burns Hot",
		photos: [25,26,27,28],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '7',
		projectName: "Tmby Fr$h - Fantastics",
		photos: [29,30,31,32],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '8',
		projectName: "Kendal Elder - Quick Fix #8",
		photos: [33,34,35,36],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '9',
		projectName: "Madison Sells",
		photos: [37,38,39,40],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '10',
		projectName: "Ana Castelo",
		photos: [41,42,43,44],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	},
	{
		id: '11',
		projectName: "Margo Szabo",
		photos: [45,46,47,48],
		selected: 0,
		dispSelected: 1,
		imageCount: 4
	}
];

Portfolio.Photo.FIXTURES = [
	{
		id: '1',
		imageUrl: "images/la/1.jpg",
		isSelected: true,
		project: 4
	},
	{
		id: '2',
		imageUrl: "images/la/2.jpg",
		isSelected: false,
		project: 4
	},
	{
		id: '3',
		imageUrl: "images/la/3.jpg",
		isSelected: false,
		project: 4
	},
	{
		id: '4',
		imageUrl: "images/la/4.jpg",
		isSelected: false,
		project: 4
	},

	{
		id: '5',
		imageUrl: "images/music/1.jpg",
		isSelected: true,
		project: 12
	},
	{
		id: '6',
		imageUrl: "images/music/2.jpg",
		isSelected: false,
		project: 12
	},
	{
		id: '7',
		imageUrl: "images/music/3.jpg",
		isSelected: false,
		project: 12
	},
	{
		id: '8',
		imageUrl: "images/music/4.jpg",
		isSelected: false,
		project: 12
	},

	{
		id: '9',
		imageUrl: "images/dai-kincho-preview/1.jpg",
		isSelected: true,
		project: 1
	},
	{
		id: '10',
		imageUrl: "images/dai-kincho-preview/2.jpg",
		isSelected: false,
		project: 1
	},
	{
		id: '11',
		imageUrl: "images/dai-kincho-preview/3.jpg",
		isSelected: false,
		project: 1
	},
	{
		id: '12',
		imageUrl: "images/dai-kincho-preview/4.jpg",
		isSelected: false,
		project: 1
	},

	{
		id: '13',
		imageUrl: "images/nyc/1.jpg",
		isSelected: true,
		project: 2
	},
	{
		id: '14',
		imageUrl: "images/nyc/2.jpg",
		isSelected: false,
		project: 2
	},
	{
		id: '15',
		imageUrl: "images/nyc/3.jpg",
		isSelected: false,
		project: 2
	},
	{
		id: '16',
		imageUrl: "images/nyc/4.jpg",
		isSelected: false,
		project: 2
	},

	{
		id: '17',
		imageUrl: "images/xpnyc/1.jpg",
		isSelected: true,
		project: 3
	},
	{
		id: '18',
		imageUrl: "images/xpnyc/2.jpg",
		isSelected: false,
		project: 3
	},
	{
		id: '19',
		imageUrl: "images/xpnyc/3.jpg",
		isSelected: false,
		project: 3
	},
	{
		id: '20',
		imageUrl: "images/xpnyc/4.jpg",
		isSelected: false,
		project: 3
	},

	{
		id: '21',
		imageUrl: "images/lubagram/1.jpg",
		isSelected: true,
		project: 5
	},
	{
		id: '22',
		imageUrl: "images/lubagram/2.jpg",
		isSelected: false,
		project: 5
	},
	{
		id: '23',
		imageUrl: "images/lubagram/3.jpg",
		isSelected: false,
		project: 5
	},
	{
		id: '24',
		imageUrl: "images/lubagram/4.jpg",
		isSelected: false,
		project: 5
	},

	{
		id: '25',
		imageUrl: "images/auburn-burns-hot/1.jpg",
		isSelected: true,
		project: 6
	},
	{
		id: '26',
		imageUrl: "images/auburn-burns-hot/2.jpg",
		isSelected: false,
		project: 6
	},
	{
		id: '27',
		imageUrl: "images/auburn-burns-hot/3.jpg",
		isSelected: false,
		project: 6
	},
	{
		id: '28',
		imageUrl: "images/auburn-burns-hot/4.jpg",
		isSelected: false,
		project: 6
	},

	{
		id: '29',
		imageUrl: "images/tmby-frsh/1.jpg",
		isSelected: true,
		project: 7
	},
	{
		id: '30',
		imageUrl: "images/tmby-frsh/2.jpg",
		isSelected: false,
		project: 7
	},
	{
		id: '31',
		imageUrl: "images/tmby-frsh/3.jpg",
		isSelected: false,
		project: 7
	},
	{
		id: '32',
		imageUrl: "images/tmby-frsh/4.jpg",
		isSelected: false,
		project: 7
	},

	{
		id: '33',
		imageUrl: "images/kendal-elder/1.jpg",
		isSelected: true,
		project: 8
	},
	{
		id: '34',
		imageUrl: "images/kendal-elder/2.jpg",
		isSelected: false,
		project: 8
	},
	{
		id: '35',
		imageUrl: "images/kendal-elder/3.jpg",
		isSelected: false,
		project: 8
	},
	{
		id: '36',
		imageUrl: "images/kendal-elder/4.jpg",
		isSelected: false,
		project: 8
	},

	{
		id: '37',
		imageUrl: "images/madison-sells/1.jpg",
		isSelected: true,
		project: 9
	},
	{
		id: '38',
		imageUrl: "images/madison-sells/2.jpg",
		isSelected: false,
		project: 9
	},
	{
		id: '39',
		imageUrl: "images/madison-sells/3.jpg",
		isSelected: false,
		project: 9
	},
	{
		id: '40',
		imageUrl: "images/madison-sells/4.jpg",
		isSelected: false,
		project: 9
	},

	{
		id: '41',
		imageUrl: "images/ana-castelo/1.jpg",
		isSelected: true,
		project: 10
	},
	{
		id: '42',
		imageUrl: "images/ana-castelo/2.jpg",
		isSelected: false,
		project: 10
	},
	{
		id: '43',
		imageUrl: "images/ana-castelo/3.jpg",
		isSelected: false,
		project: 10
	},
	{
		id: '44',
		imageUrl: "images/ana-castelo/4.jpg",
		isSelected: false,
		project: 10
	},

	{
		id: '45',
		imageUrl: "images/margo-szabo/1.jpg",
		isSelected: true,
		project: 11
	},
	{
		id: '46',
		imageUrl: "images/margo-szabo/2.jpg",
		isSelected: false,
		project: 11
	},
	{
		id: '47',
		imageUrl: "images/margo-szabo/3.jpg",
		isSelected: false,
		project: 11
	},
	{
		id: '48',
		imageUrl: "images/margo-szabo/4.jpg",
		isSelected: false,
		project: 11
	}
];

