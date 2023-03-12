
function validateName(){
    let username = document.getElementById('name')
    
    let nameError = document.getElementById('nerr')

    if(username.value == ""){
        nameError.style.display = "block";
        return false;
    }else{
        nameError.style.display = none
    }
    return true;
}

function validatePassword (){
    let password= document.getElementById('password');
    
    const pwdpattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\@$!]).{8,16}$/

    let validPass = document.getElementById('verr')
    let passError = document.getElementById('perr')

    if(password.value == ""){
        passError.style.display = "block";
        return false 
    }else{
        console.log(password.value)
        if(!pwdpattern.test(password.value)){
            
            validPass.style.display="block"
            return false
        }else{
            validPass.style.display="none"
        }
    }

    return true
}

function rePass(){
    let password= document.getElementById('password');
    let repass= document.getElementById('cpassword');

    let repassErr = document.getElementById('rperr')
    let repassWordErr = document.getElementById('reperr')

    if(password.value == ""){
        repassErr.style.display = "block";
        return false;
    }else{
        console.log(password.value)
        if(password.value === repass.value){
            console.log(password === rePass)
            repassWordErr.style.display="none"
        }else{
            repassWordErr.style.display="block";
            return false;
        }
    }
    return true;
}


function validateEmail(){
    let email = document.getElementById('email')

    let emptyEmail = document.getElementById('emailerr')
    let validEmail = document.getElementById('validemailerr');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if(email.value==""){
        emptyEmail.style.display="block"
        return false;
    }
    else{
        if(!emailPattern.test(email.value)){
            validEmail.style.display="block"
            return false;
        }else{
            validEmail.style.display="none";
        }
    }
    return true;
}


function validateContact(){
    let contactInfo = document.getElementById('contact-number');
    let conError = document.getElementById('conerr');
    let validErr = document.getElementById('validcon')

    const regexExp = /^[6-9]\d{9}$/gi;

    if(contactInfo.value == ""){
        conError.style.display = "block";
        return false;
    }else{
        if(!regexExp.test(contactInfo.value)){
            validErr.style.display = "block";
            return false;
        }else{
            validErr.style.display="none"
        }
    }

    return true
}



function formValidation(event){
    console.log(" upper javascript")
    // return false;
    // event.preventdefault();
    let validName = validateName();
    console.log(validName)
    
    let validPassword = validatePassword();
    console.log(validPassword)

    let revalidpass = rePass();
    console.log(revalidpass)
    // return false;
    
    let validEmail = validateEmail();
    console.log(validEmail)
    
    let validContact = validateContact();
    console.log(validContact)
    // return false;
    if(validName && validPassword && validContact && validEmail){
        return true
    }
    else{
        return false
    }

    console.log("javascript")
}