let account = "";
let password = "";

$(document).ready(function() {

	let xobj = new XMLHttpRequest();
	
	function sendUserToAWS(body, url) {


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

	function getUserData(uid, account){

	}

	$("#registerButton").on('click', function() {
		let userRegisterName = $("#userName").val();
		let userRegisterPhone = $("#userPhone").val();
		let userRegisterEmail = $("#userEmail").val();
		let userRegisterPassword = $("#userPassword").val();
		// let userRegisterPasswordRepeat = $("#userPasswordRepeat").val();

		let userBody = {
			"account": userRegisterEmail,
			"name": userRegisterName,
			"password": userRegisterPassword,
			"phone": userRegisterPhone,
		}

		console.log("userBody: ",userBody)
		sendUserToAWS(userBody, "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/register");

		xobj.onload = function() {
			var callbackData = JSON.parse(xobj.responseText);
			// Get respon text here
			console.log(callbackData);
		}
	})

	$("#loginButton").on('click', function() {
		let userRegisterEmail = $("#sign_in_user_name").val();
		let userRegisterPassword = $("#sign_in_user_password").val();

		let userBody = {
			"account": userRegisterEmail,
			"password": userRegisterPassword,
		}

		// console.log("userBody: ",userBody)
		sendUserToAWS(userBody, "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/login");

		xobj.onload = function() {
			var response = JSON.parse(xobj.responseText);
			// Get respon text here
			console.log("login sucessfully!");
			console.log(response);
			console.log(response.body);
			if (response.success) {
				let body = response.body;
				let data = JSON.parse(body);
				console.log(data['UID']);
				// 給ED用這個uid去call getuser 可以拿到使用者所有資料
			}
		}
	})
})