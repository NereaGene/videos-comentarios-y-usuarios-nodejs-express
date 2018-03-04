function envia(event){
    event.preventDefault();
    console.log("No envio el formulario");
    var user=$("#usuario").val();
    var pass=$("#password").val();
    var objetoAEnviar={
        usuario:user,
        password:pass
    };
    
function init(){
    console.log("Hola Navegador!");
    $("#login").submit(envia);
};
$(document).ready(init);