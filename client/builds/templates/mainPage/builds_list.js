/**
*  This file handles the table on the main page
*/

Template.buildsList.helpers({
	builds : function() {
		return Builds.find({});
	},
	settings : function(){
		return {
			fields : ['name', 'race', 'against'],
			filters : ['race-filter', 'against-filter', 'author-filter'],
			rowsPerPage : 15
		}
	}
});
Template.buildsList.events({
	'click .reactive-table tr' : function(event){
		var build = this;
		Router.go('singleBuild', {_id : build._id});
	}
});

Template.raceFilter.created = function() {
	this.filter = new ReactiveTable.Filter('race-filter', ['race']);
};

Template.raceFilter.events({
	"change" : function(event, template) {
		var input = $(event.target).val().toLowerCase();
		if(input != 'all races'){
			template.filter.set(input);
		}else {
			template.filter.set("");
		}
	}
});

Template.againstFilter.created = function() {
	this.filter = new ReactiveTable.Filter('against-filter', ['against']);
};

Template.againstFilter.events({
	"change" : function(event, template) {
		var input = $(event.target).val().toLowerCase();
		if(input != 'all races'){
			template.filter.set(input);
		}else {
			template.filter.set("");
		}
	}
});

Template.authorFilter.created = function() {
	this.filter = new ReactiveTable.Filter('author-filter', ['author']);
}

Template.authorFilter.events({
	'keyup .author-input, input .author-input' : function(event, template){
		var input = $(event.target).val();
		template.filter.set(input);
	}
});
