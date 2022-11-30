// INITIALISATION SUCCESS VARIABLE
a = false; b = false; c = false;

//LAUNCH / FIRST VERIFICATION / VERIFICATION OF THE SUCCESS
$('form').submit(function(){
    if($('#name').val()==""){
        $("#name").css('border-color', '#ff0000'); 
        $("#name").next('.error').fadeIn('fast').text("* Champ obligatoire !");
        a = false;
    }
    if($('#email').val()==""){
        $("#email").css('border-color', '#ff0000');
        $("#email").next('.error').fadeIn('fast').text("* Champ obligatoire! ");
        b =false;
    }
    if($('#message').val()==""){
        $("#message").css('border-color', '#ff0000');
        $("#message").next('.error').fadeIn('fast').text("* Champ obligatoire !");
        c = false;
    }
    
    setSuccessFor();
    return false;
});

//VERIFICATION OF THE VALIDITY OF THE FORM
function setSuccessFor() {
    if(a== true && (a == b && a == c)){
        alert("Message envoyé : " + $('#message').val()); // send current message
        location.reload(); // refresh current page
    }
}

//VERIFICATION OF NAME WHEN A KEYUP
$('#name').keyup(function(){
    if($('#name').val() != ""){
        $('#name').css('border-color', '#00ff00');
        $('#name').next('.error').fadeOut();
        a = true;
    }else{
        $("#name").css('border-color', '#ff0000');
        $("#name").next('.error').fadeIn('fast').text("* Champ obligatoire ! ");
        a = false;
    }
    
});

//VERIFICATION OF EMAIL WHEN A KEYUP
$('#email').keyup(function(){
    if ($('#email').val() == "" || !(isEmail($('#email').val()))) {
        $("#email").css('border-color', '#ff0000');
        $("#email").next('.error').fadeIn('fast').text("* Votre adresse mail est invalide ! ");
        b = false;
    }else{
        $('#email').css('border-color', '#00ff00');
        $('#email').next('.error').fadeOut();
        b = true;
    }
});

//VERIFICATION OF THE MESSAGE WHEN A KEYUP
$('#message').keyup(function(){
    if($('#message').val().length<10){
        $('#message').css('border-color', '#ff0000');
        $("#message").next('.error').fadeIn('fast').text("* Doit faire plus de 10 caractères ! ");

        c = false;
    }else{
        $("#message").css('border-color', '#00ff00');
        $('#message').next('.error').fadeOut();
        c = true;
    }
});

//VERIFICATION OF THE STRUCTURE OF THE EMAIL
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
    }else{
      return true;
    }
}
