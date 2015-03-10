Meteor.methods({
	submitBuild: function(build) {
		var user = Meteor.user();
		if(!user){
			throw new Meteor.Error(401, "You need to log in first");
		}
		var additionalParams = {
			author: user.username,
			userId: user._id,
			createdAt: new Date()
		}
		console.log(additionalParams);
		_.extend(build, additionalParams);
		console.log(build);
		build._id = Builds.insert(build);
		return build;
	}
});