let account = "";
let password = "";

$(document).ready(function() {
   let userName = $("#currencyUserName");
   let currentUserName = localStorage.getItem('currentUser') || "Guest";
   userName.text(currentUserName);
})