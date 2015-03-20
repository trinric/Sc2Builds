/**
* This is the basic filtering for the table on the front page
* Going to clean this up later since there is a lot of almost repeated lines
*
*/
var racelist = ['zerg', 'terran', 'protoss'];

Template.buildsList.helpers({
	builds : function() {
		if (typeof(Session.get('race-select')) == 'undefined' || Session.get('race-select') == 'all races'){
			Session.set('race-select', racelist);
		}
		if (typeof(Session.get('against-select')) == 'undefined' || Session.get('against-select') == 'all races'){
			Session.set('against-select', racelist);
		}
		return Builds.find({race : {$in : Session.get("race-select")}, against : {$in : Session.get("against-select")}}, { sort: { createdAt: -1 } });
	}
});

Template.buildsList.events({
	"change #race-select" : function(e){
		Session.set('race-select', [$(e.target).val().toLowerCase()])
	},
	"change #against-select" : function(e) {
		Session.set('against-select', [$(e.target).val().toLowerCase()])
	}
})