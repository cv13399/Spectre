let account = "";
let password = "";

$(document).ready(function() {

	let xobj = new XMLHttpRequest();
	let loadingPanel = $("#loading-panel");
	
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
        // loadingPanel.removeClass('hide');

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
			let response = JSON.parse(xobj.responseText);
			// Get respon text here
			console.log(response);

			if (response.success) { 
				loadingPanel.removeClass('hide');

				let currentUserName = localStorage.setItem('currentUser', userBody.name);

                setTimeout(function() {
                    window.location.href = "./my-account.html";
                },2000)


			}  else {
				alert("Please Check you data again!");
				window.location.reload();
			}
		}
	})

	$("#loginButton").on('click', function() {
		let userRegisterEmail = $("#sign_in_user_name").val();
		let userRegisterPassword = $("#sign_in_user_password").val();

		let userBody = {
			"account": userRegisterEmail,
			"password": userRegisterPassword,
		}

		sendUserToAWS(userBody, "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/login");

		xobj.onload = function() {
			let response = JSON.parse(xobj.responseText);

			var userData = response.body;

			if (response.success) {
				let body = response.body;
				let data = JSON.parse(body);

				let currentUserName = localStorage.setItem('currentUser', data.name);
				loadingPanel.removeClass('hide');

                setTimeout(function() {
                    window.location.href = "./my-account.html";
                },2000)

			} else {
				alert("Please Check you email or passowrd again");
				window.location.reload();
			}
		}
	})
})