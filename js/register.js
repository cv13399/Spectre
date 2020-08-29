
$(document).ready(function() {

	function sendUserToAWS(body, url) {

		let xobj = new XMLHttpRequest();

		xobj.open('post', url);
		xobj.setRequestHeader('Content-type', 'application/json');

		xobj.onload = function (data){
		    // do something to response
		    console.log("Post success")
		    console.log(JSON.parse(this.responseText));		    
		};
		xobj.send(JSON.stringify(body));
		return true
	}

// https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/register/%7Bname%7D/%7Baccount%7D/%7Bpassword%7D/%7Bphone
	$("#registerButton").on('click', function() {
		let userRegisterName = $("#userName").val();
		let userRegisterEmail = $("#userEmail").val();
		let userRegisterPassword = $("#userPassword").val();
		// let userRegisterPasswordRepeat = $("#userPasswordRepeat").val();
		let userPhone = "098843637637"

		let userBody = {
			"name": userRegisterName,
			"account": userRegisterEmail,
			"password": userRegisterPassword,
			"phone":userPhone
		}

		console.log("userBody: ",userBody)
		sendUserToAWS(userBody, "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/register");
	})

	$("#registerButton").on('click', function() {
		let userRegisterEmail = $("#sign_in_user_name").val();
		let userRegisterPassword = $("#sign_in_user_password").val();

		let userBody = {
			"account": userRegisterEmail,
			"password": userRegisterPassword,
		}

		console.log("userBody: ",userBody)
		sendUserToAWS(userBody, "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/login");
	})
})