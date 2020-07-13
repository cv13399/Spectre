$(document).ready(function() {

	function send(params) {
		// var AWSregisterUrl = "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/register/"
		var xobj = new XMLHttpRequest();
		xobj.open('POST', "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/register/" + params, true);
		xobj.send(null);
		return true
	}

	console.log("register page is working")

// https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/register/%7Bname%7D/%7Baccount%7D/%7Bpassword%7D/%7Bphone
	$("#registerButton").on('click', function() {
		var userRegisName = $("#userName").val();
		var userRegisEmail = $("#userEmail").val();
		var userRegisPassword = $("#userPassword").val();
		var userRegisPasswordRe = $("#userPasswordRepeat").val();

		var userRegisData = {

			"userRegisName": userRegisName,
			"userEmail": userRegisEmail,
			"userRegisPassword": userRegisPassword,
			// "userRegisPasswordRe": userRegisPasswordRe
		}
		var registerData = userRegisName + "/"
					     + userRegisEmail + "/"
					     + userRegisPassword;

 		console.log("userRegisData: ",userRegisData)
 		console.log("registerData: ",registerData)
 		
	})


})