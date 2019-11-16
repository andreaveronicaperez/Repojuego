window.addEventListener('load',function(){
  var boton= document.querySelector ("button.btn.btn-primary");
  boton.addEventListener('click',function(){
    var errores= false;
    var email= document.querySelector("input.email");
    var nombre= document.querySelector("input.valida-nombre");

    var errorEmail= document.querySelector("span.errorEmail");
    var errorNombre= document.querySelector("span.errorNombre");
    var regexMail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  //  email.onblur=function(){
      if(email.value == ''){
        errorEmail.innerHTML= "Este campo es obligatorio";
         email.style.border= "1px solid red";
           errores=true;
      }else if(!regexMail.test(email.value)){
        errorEmail.innerHTML= "Formato inválido"
         email.style.border= "1px solid red";
         errores= true;
      }else {
        errorEmail.innerHTML= "";
        email.style.border= "1px solid green";
      }
//}


    if(nombre.value == ""){
      errorNombre.innerHTML= "Este campo es obligatorio";
      nombre.style.border= "1px solid red";
      errores=true;
    }else if( nombre.value.length <2){
      errorNombre.innerHTML= "Debe contener al menos 2 caracteres"
      nombre.style.border= "1px solid red";
      errores= true;
    }else {
      errorNombre.innerHTML= "";
      nombre.style.border= "1px solid green";
    }



  });
});
