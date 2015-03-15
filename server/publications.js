Meteor.publish('allBuilds', function() {
	return Builds.find();
});

Meteor.publish('singleBuild', function(Id){
	return Builds.find({_id : Id });
});