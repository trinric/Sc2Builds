var buildFields = {
	_id : {
		type: String,
		optional: true,
		autoform: {
			omit: true
		}
	},
	name : {
		type: String,
		label: 'Name'
	},
	slug : {
		type : String,
		optional: true,
		autoValue: function() {
              if (this.field('name').isSet) {
                return URLify2(this.field('name').value);
              }
            },
		autoform : {
			omit : true
		}
	},
	build : {
		type: String,
		label: 'Build',
		autoform: {
			type: 'textarea',
			rows: 5
		}
	},
	race : {
		type: String,
		label: "Race",
		autoform : {
			type : "select",
			options : function () {
				return [
					{label : "Zerg", value: "zerg"},
					{label : "Protoss", value: "protoss"},
					{label : "Terran", value: "terran"}
				];
			}
		}
	},
	against : {
		type : String,
		label : "Against",
		autoform : {
			type : "select",
			options : function () {
				return [
					{label : "Zerg", value: "zerg"},
					{label : "Protoss", value: "protoss"},
					{label : "Terran", value: "terran"}
				];
			}
		}
	},
	createdAt : {
		type: Date,
		optional: true,
		autoform: {
			omit : true
		}
	},
	author : {
		type: String,
		optional: true,
		autoform: {
			omit : true
		}
	},
	userId: {
	    type: String,
	    optional: true,
	    autoform: {
	      omit: true
    }
  }
};

BuildSchema = new SimpleSchema(buildFields);