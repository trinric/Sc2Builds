SingleBuildController = BaseController.extend({
	template : 'buildPage',
	data: function() {
		return Builds.findOne({slug : this.params._id});
	}
})