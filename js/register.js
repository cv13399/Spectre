// require(['utils/stringUtils'], function (stringUtils) {
//     //foo is now loaded.
// });

// require("utils/stringUtils")

if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };
}

$(document).ready(function() {

	function sendUserToAWS(url,body) {
		// var AWSregisterUrl = "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/register/"
		const xobj = new XMLHttpRequest();
		xobj.open('POST', url, true);
		xobj.setRequestHeader('Content-type', 'application/json');
		xobj.setRequestHeader('Access-Control-Allow-Origin', '*');
		xobj.onload = function (data) {
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
		let userRegisterPasswordRepeat = $("#userPasswordRepeat").val();
		let userPhone = "098843637637"

		let userBody = {
			"name": userRegisterName,
			"account": userRegisterEmail,
			"password": userRegisterPassword,
			"phone":userPhone
		}

		let url = "https://0vmdbx6mda.execute-api.ap-southeast-1.amazonaws.com/test/register/{{0}}/{{1}}/{{2}}/{{3}}"

		url = String.format(url, userRegisterName, userRegisterEmail, userRegisterPassword, userPhone)

		console.log("userBody: ",userBody)
 		console.log("url: ",url)
		sendUserToAWS(url,userBody);
	})
})