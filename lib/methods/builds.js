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
		_.extend(build, additionalParams);
		build._id = Builds.insert(build);
		return build;
	},
	updateBuild : function(build, modifier, buildId) {
		var build = Builds.findOne({_id : buildId});
		if(build.userId != Meteor.user()._id) {
						Router.go('root');
			sweetAlert({
				title : "You don't own this build!",
				message : "You aren't the owner of this build! You can't make changes to it",
				type: "error"
			});
			throw new Meteor.Error(401, "You do not own this build");
		}
		Builds.update({_id : buildId}, {$set : modifier.$set});


	}
});