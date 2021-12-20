$(document).ready(function(){
	$("#signupbtn").click(function(){
		$('.loginCard').hide(0);
        $('.signupCard').fadeIn("slow");
	});
    $("#loginbtn").click(function(){
		$('.signupCard').hide(0);
        $('.loginCard').fadeIn("slow");
	});
});


// function showSignUp(){
//     document.getElementsByClassName("loginCard").style.display = "none";
//     document.getElementsByClassName("signupCard").style.display = "inherit";
// }