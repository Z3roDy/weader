$("#Login").on("click",function(){
    userName = $("#user").val();
    password = $("#passwd").val();

    if(userName.length < 3){
        $("#user").css('border-color','red');
        return;
    }
    $("#user").css('border-color','green');
    if(password.length < 6){
        $("#passwd").css('border-color','red');
        return;
    }
    $("#passwd").css('border-color','green');

    let user = {
        flag : true,
        name : userName,
        latName : "reza",
    }
    user = JSON.stringify(user);
    localStorage.setItem("user", user);
    window.location.href = "index.html";
});