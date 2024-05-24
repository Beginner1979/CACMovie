document.getElementById('formulario1').addEventListener('submit', function(event) {
    event.preventDefault();
    let usuario = document.getElementById('nombre').value;
    alert(`Alta existosa! Usuario/a ${usuario}, bienvenido/a a nuestra página.`);
    document.getElementById('formulario1').reset();   
});