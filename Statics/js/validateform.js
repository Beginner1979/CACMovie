let usuario = [];

var usuario3 = document.getElementById('formulario1').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombreElement = document.getElementById('nombre');
    var emailElement = document.getElementById('email');
    
    var nombre = nombreElement.value;
    var email = emailElement.value;

    var usuario3 = {
        nombre: nombre,
        email: email
    };
    
    usuario.push(usuario3);

    alert(`Alta existosa! Usuario/a ${usuario3.nombre}, bienvenido/a a nuestra página.`);
    document.getElementById('formulario1').reset();   
 });
