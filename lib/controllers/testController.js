testController = BaseController.extend({
	template : 'test',
	waitOn : function(){
		return Meteor.subscribe('allBuilds');
	}
});