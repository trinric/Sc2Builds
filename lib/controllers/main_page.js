MainPageController = BaseController.extend({
	template: "buildsList",

	waitOn : function() {
		return Meteor.subscribe('allBuilds');
	},

	data : function() {
		return { builds : Builds.find({}, { sort: { createdAt: -1 } }) };
	}
});