document.getElementById('formulario2').addEventListener('submit', function(event) {
    event.preventDefault();
    let usuario = document.getElementById('email').value;
    alert(`Bienvenido/a usuario/a ${usuario}!`);
    document.getElementById('formulario2').reset();
});
