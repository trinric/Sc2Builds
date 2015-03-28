UpdateBuildController = BaseController.extend({
	template : "updateBuild",
	waitOn : function() {
		return Meteor.subscribe('singleBuild', this.params._id);
	},
	data: function() {
		return Builds.findOne({_id : this.params._id});
	}

});