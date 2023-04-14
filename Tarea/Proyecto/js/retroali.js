const form = document.getElementById('comment-form');
  const comentarios = document.getElementById('comment-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    //toma los valores que se digiten en el nombre y el comentario
    //por medio del id
    const nombre = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    //crea un nuevo div para colocar los elementos
    //tambien se añade un card con los estilos para el mismo
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('card', 'grey', 'darken-3', 'mb-3');
    nuevoComentario.innerHTML = `
      <div class="card-body">
        <h5 class="card-title white-text">${nombre}</h5>
        <p class="card-text white-text">${comment}</p>
      </div>
    `;

    comentarios.prepend(nuevoComentario);
    //inserta y resetea el formulario para que se 
    //muestre la informacion en la pagina sin refrescar
    form.reset();
  }   
);


//permite desplazarse del campo "Nombre" hacia el campo "Comentario"
//con la tecla enter, y asi evitar enviar el form sin ningun
//comentario
document.getElementById('name').addEventListener('keydown', inputCharacters);
function inputCharacters(event) {
 
  if (event.keyCode == 13) {
    document.getElementById('comment').focus();
  }
};
