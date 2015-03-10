Meteor.methods({
	submitBuild: function(build) {
		var additionalParams = {
			createdAt: new Date(),
		}
		_.extend(build, additionalParams);
		build._id = Builds.insert(build);
		return build;
	}
});