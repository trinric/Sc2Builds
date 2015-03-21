MainPageController = BaseController.extend({
	template: "buildsList",

	waitOn : function() {
		return Meteor.subscribe('allBuilds');
	},

});