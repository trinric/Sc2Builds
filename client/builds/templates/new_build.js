AutoForm.addHooks(['submitBuildForm'], {
    onSuccess : function(formType, result) {
		Router.go('singleBuild', result);
	}
});