
// Script para fazen a seleção SignIn <=> SignUp
const formSignIn = document.querySelector('#signIn');
const formSignUp = document.querySelector('#signUp');
const btnColor = document.querySelector('.btnColor');

document.querySelector('#btnSignIn').addEventListener('click', () => {
    formSignIn.style.left = "25px"
    formSignUp.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignUp').addEventListener('click', () => {
    formSignIn.style.left = "-450px"
    formSignUp.style.left = "25px"
    btnColor.style.left = "90px"
})

// Script para validação de senha

function validate() {
    let pwd = signUp.pwd.value;
    let cpwd = signUp.cpwd.value;

     pwd === cpwd ? alert('Sign Up Sucessfully!') : alert ('Passwords are not the same!');
     signUp.cpwd.focus ();
     return false
}