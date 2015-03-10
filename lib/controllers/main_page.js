MainPageController = BaseController.extend({
	template: "home",

	data : function() {
		return { builds : Builds.find({}, { sort: { createdAt: -1 } }) };
	}
});