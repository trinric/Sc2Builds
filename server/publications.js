Meteor.publish('allBuilds', function() {
	return Builds.find();
});

Meteor.publish('singleBuild', function(name){
	return Builds.find(name);
});