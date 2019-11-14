window.addEventListener('load',function(){
  var boton= document.querySelector ("button.loginHome");
  boton.addEventListener('click',function(){
    var errores= false;
    var email= document.querySelector("input.email");
    var contraseña= document.querySelector("input.password");

    var errorEmail= document.querySelector("span.errorEmail");
    var errorContraseña= document.querySelector("span.errorContraseña");

    if(email.value == ""){
      errorEmail.innerHTML= "Este campo es obligatorio";
      email.style.border= "1px solid red";
      errores=true;
    }else if( email.value.length <5){
      errorEmail.innerHTML= "Debe contener al menos 5 caracteres"
      email.style.border= "1px solid red";
      errores= true;
    }else {
      errorEmail.innerHTML= "";
      email.style.border= "1px solid green";
    }


    if(contraseña.value == ""){
      errorContraseña.innerHTML= "Este campo es obligatorio";
      contraseña.style.border= "1px solid red";
      errores=true;
    }else if( contraseña.value.length <5){
      errorContraseña.innerHTML= "Debe contener al menos 5 caracteres"
      contraseña.style.border= "1px solid red";
      errores= true;
    }else {
      errorContraseña.innerHTML= "";
      contraseña.style.border= "1px solid green";
    }



  })
})
