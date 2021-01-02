function validate(form) {
	var returnValue = true;
	var username = document.getElementById ("username");
	var password = document.getElementById ("password");
			
	if(username.value != "Proyek" && username.value != "Kelompok06") {
		returnValue = false;
		alert("Masukkan username dengan benar");
		document.getElementById("username").focus();
	}
	else if((username.value != "Proyek" && password.value != "Kelompok06") || (username.value != "Kelompok06" && password.value != "Proyek")) {
		returnValue = false;
		alert("Password anda salah! \n Coba lagi.");
		document.getElementById("password").focus();
	}
	return returnValue;
}
	