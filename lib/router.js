Router.configure({
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'root',
	controller: 'MainPageController'
});

Router.route('/build/new', {
	name: 'newBuild',
	controller: 'NewBuildController'
});

Router.route('/build/:_id', {
	name: "singleBuild",
	controller : 'SingleBuildController'
});