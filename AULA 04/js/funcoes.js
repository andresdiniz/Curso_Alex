function VerificaForm(){
    const senha = document.getElementById('exampleFormControlTextarea1');
    const email = document.getElementById('exampleFormControlInput1');
    const emailvalor = email.value;
    const senhavalor = senha.value;

    if(VerificaEmail(emailvalor)){

        email.style.border = "2px solid green";
    }else{
        email.style.border = "2px solid red";
    }
    console.log(emailvalor);
    console.log(senhavalor);

}
function VerificaEmail(emailvalor){
    const indice = emailvalor.indexOf('@');
    return indice !==-1;
}