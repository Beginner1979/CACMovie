    document.getElementById('formulario3').addEventListener('submit', function(event) {
    event.preventDefault();
    let dato = document.getElementById('buscar').value;
    alert(`Se ingreso a buscar el siguiente:  ${dato}`);
    document.getElementById('formulario3').reset();

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
       console.log(posts);
       const titulo = posts.find(post => post.title === dato);

       if (titulo) {
       var h3 = document.createElement("h3");
       h3.innerHTML = 'El titulo ingresado: ' + dato + '  figura en nuestra base de datos'
       var form = document.getElementById('form');
       form.appendChild(h3);

       } else {
        var h3 = document.createElement("h3")
        h3.innerHTML = 'El titulo ingresado:  ' + dato + '  no figura en nuestra base de datos'
        var form = document.getElementById('form');
       form.appendChild(h3);
       }
       })
    .catch(error => console.error('Error al obtener los posts:', error));

});