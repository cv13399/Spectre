
$(document).ready(function() {

	function sendUserToAWS(body) {
		var AWS_registerUrl = "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/register/"

		let xobj = new XMLHttpRequest();
		xobj.onreadystatechange = function(){
			if(this.readyState === 4){
				console.log(this.responseText);
			}
		};

		xobj.open('post', AWS_registerUrl);
		xobj.setRequestHeader('Content-type', 'application/json');

		xobj.onload = function (data){
		    // do something to response
		    console.log(data);
		    console.log(this.responseText);
		};
		xobj.send(body);
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
		sendUserToAWS(userBody);
	})
})