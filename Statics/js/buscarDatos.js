    document.getElementById('formulario3').addEventListener('submit', function(event) {
    event.preventDefault();
    let dato = document.getElementById('buscar').value;
    alert(`Dato ingresado es ${dato}`);
    document.getElementById('formulario3').reset();

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
       console.log(posts); // Array de posts
       const titulo = posts.find(post => post.title === dato);
       if (titulo) {
       var h3 = document.createElement("h3"); //Creamos el boton y lo guardamos en btn
       h3.innerHTML = 'El titulo ingresado: ' + dato + '  figura en nuestra base de datos' // Le ponemos el texto
       var form = document.getElementById('form');
       // Agregar el <h3> al final del contenedor
       form.appendChild(h3);

       } else {
        var h3 = document.createElement("h3") //Creamos el boton y lo guardamos en btn
        h3.innerHTML = 'El titulo ingresado:  ' + dato + '  no figura en nuestra base de datos' // Le ponemos el texto
        var form = document.getElementById('form');
       // Agregar el <h3> al final del contenedor
       form.appendChild(h3);
       }
       })
    .catch(error => console.error('Error al obtener los posts:', error));

});



function buscarDatos() {
    // Obtener los elementos de input
    var buscarElement = document.getElementById('buscar');
    
    // Obtener los valores de los input
    var datobuscado = buscarElement.value;
    
    // Windows.alert dato 
    alert(datobuscado);

    // Limpiar los campos de entrada
    buscarElement.value = '';
  
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
    console.log(posts); // Array de posts
    const titulo = title.find(title => title.title === dato);
    if (titulo) {
      alert('Titulo encontrado');
    } else {
      alert('Titulo no encontrado');
    }
  })
   .catch(error => console.error('Error al obtener los posts:', error));
 }





