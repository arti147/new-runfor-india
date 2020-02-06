$(document).ready(function()
{

	// my method for validate username
	
	jQuery.validator.addMethod("username_regex", function(value, element) {
		  return this.optional(element) || /^[a-zA-Z\s]*$/i.test(value);
		}, "Please Enter Only Characters"); 
	
	jQuery.validator.addMethod("contact_regex", function(value, element) {
		  return this.optional(element) || /^[0-9]+$/i.test(value);
		}, "Please Enter Only Numbers");
	
	jQuery.validator.addMethod("address_regex", function(value, element) {
		  return this.optional(element) || /^[a-zA-Z0-9\-\s]+$/i.test(value);
		}, "Please enter only characters and Numbers [a-z,0-9] ");



		
	  
		
	$("#materialForm").validate(
	{
        rules:{
		'firstname':{
			required: true,
			minlength: 4,
			maxlength:25,	
			username_regex: true		
		},
		'lastname':{
			required: true,
			minlength: 4,
			maxlength:25,
			username_regex: true	
			
			},
		'email':{
			required: true,
			email: true
			
			},
			
		'address':{
			required:true,
			maxlength:100,
			address_regex:true
			
		},
		
		'message':{
			
			maxlength:200,
			minlength:10
		},
			
		
		'phone':{
			required: true,
			minlength: 10,
			contact_regex: true
			},
		
		'firstName':{
				required: true,
				minlength: 4,
				maxlength:50,	
				username_regex: true		
			},
		
		},
        messages:{
		'firstname':{
			required: "The name field is mandatory!",
			minlength: "Choose a FirstName of at least 4 letters!",
			maxlength: "Choose a FirstName of maxlength  25",
			
			},
			
		'lastname':{
			required: "The username field is mandatory!",
			minlength: "Choose a LastNam of at least 4 letters!",
			maxlength: "Choose a LastName of maxlength 25",
			
			
			},
		
		'email':{
			required: "The Email is required!",
			email: "Please enter a valid email address!",
			
			
			
			},
			
		'address':{
				required: "Address is required!",
				maxlength: "Choose a Address of maxlength 100",
				
			},
			
		'message':{
				minlength: "Choose a Message of at least 10 Characters!",
				maxlength: "Choose a Message of maxlength 200",
				
				
			},
		'phone':{
			required: "The Contact Field is mandatory",
			minlength: "Enter Contact Number of at least 10 digits!",
			
			},
			
		'firstName':{
				required: "The name field is mandatory!",
				minlength: "Choose a FirstName of at least 4 letters!",
				maxlength: "Choose a FirstName of maxlength  50",
				
				},
		
		
		}
	});
});
