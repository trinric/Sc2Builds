AutoForm.hooks({
  submitPostForm: {
    onSuccess: function(operation, build) {
      Router.go('singleBuild', build);
    }
  }
});