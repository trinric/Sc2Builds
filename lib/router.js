Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
	name: 'root',
	controller: 'MainPageController'
});

Router.route('/build/new', {
	name: 'newBuild',
	controller: 'BaseController'
});

Router.route('/build/:_id', {
	name: "singleBuild",
	controller : 'SingleBuildController'
});