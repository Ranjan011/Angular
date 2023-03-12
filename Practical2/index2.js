const textFields = document.querySelectorAll('input[type="text"]')
const passwordField = document.querySelectorAll('input[type="password"]');

const pwdpattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\@$!]).{8,16}$/;
const namePattern = /^[a-zA-Z]{2,}\s[a-zA-Z]{1,}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const contactPattern = /^[6-9]\d{9}$/gi;

passwordField.forEach((ele) => {
    ele.addEventListener('blur', (event) => {
        if(event.target.type == "password"){          
            const pwdpattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\@$!]).{8,16}$/;
            
            validateForm(event.target,pwdpattern);
        }
    })
})

textFields.forEach((ele) => {
    ele.addEventListener('blur', (event) => {
        if(event.target.name == "Name"){
            const namePattern = /^[a-zA-Z]{2,}\s[a-zA-Z]{1,}$/;
            validateForm(event.target, namePattern);
        }
        else if(event.target.name == "email"){
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            validateForm(event.target, emailPattern)
        }
        else if(event.target.name == "contact"){
            const contactPattern = /^[6-9]\d{9}$/gi;
            validateForm(event.target, contactPattern);
        }
    })
})

function validateForm(field, regexExp) {
    console.log(field.value)
    let errSpan = field.nextElementSibling
    if (field.value == "") {
        errSpan.style.display = "block";
        return false;
    } else {
        let validErrSpan = field.nextElementSibling.nextElementSibling;
        if(!regexExp.test(field.value)){
            validErrSpan.style.display="block";
            return false;
        }else{
            validErrSpan.style.display="none";
        }
    }
    return true;
}

// on clicking submit button
function formValidation(event){
    event.preventDefault();
    console.log(" upper javascript")
    passwordField.forEach((ele) => {
        return validateForm(ele,pwdpattern)
    })

    textFields.forEach((ele) => {
        if(ele.name == "Name"){
            return validateForm(ele,namePattern);
        }
        if(ele.name == "email"){
            return validateForm(ele,emailPattern);
        }
        if(ele.name == "contact"){
            return validateForm(ele,contactPattern)
        }
    })
    return false;
}
// function emptyElementValidation(field) {
//     let errSpan = field.nextElementSibling
//     if (field.value == "") {
//         errSpan.style.display = "block";
//         return false;
//     } else {
//         errSpan.style.display = "none"
//     }
//     return true;
// }


// const nameExp = /^[a-zA-Z]{2,}\s[a-zA-Z]{1,}$/;

// const pwdpattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\@$!]).{8,16}$/;

//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

//     const contactPattern = /^[6-9]\d{9}$/gi;;
// if (event.target.name == "contact") {
//     let validconterr = event.target.nextElementSibling.nextElementSibling
//     const regexExp = /^[6-9]\d{9}$/gi;
//     if (!regexExp.test(event.target.value)) {
//         validconterr.style.display = "block";
//         return false;
//     } else {
//         validconterr.style.display = "none"
//     }
//     return true;
// }


// if (event.target.name == "email") {
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

//     if (emptyElementValidation(event.target)) {
//         let validerrSpan = event.target.nextElementSibling.nextElementSibling

//         if (!emailPattern.test(event.target.value)) {
//             validerrSpan.style.display = "block";
//             return false;
//         } else {
//             validerrSpan.style.display = "none";
//         }
//         return true;
//     }
// }


// function passwordVaidation(field) {
//     const pwdpattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\@$!]).{8,16}$/;

//     if (emptyElementValidation(field)) {
//         let validerrSpan = field.nextElementSibling.nextElementSibling;

//         if (!pwdpattern.test(field.value)) {
//             validerrSpan.style.display = "block";
//             return false;
//         } else {
//             validerrSpan.style.display = "none"
//         }
//     }
// }