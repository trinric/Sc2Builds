SingleBuildController = BaseController.extend({
	template : 'buildPage',
	waitOn : function() {
		return Meteor.subscribe('singleBuild', this.params._id);
	},
	data: function() {
		return Builds.findOne({slug : this.params._id});
	}
})