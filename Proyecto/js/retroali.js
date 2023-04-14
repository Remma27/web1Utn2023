const form = document.getElementById('comment-form');
  const comentarios = document.getElementById('comment-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('card', 'grey', 'darken-3', 'mb-3');
    nuevoComentario.innerHTML = `
      <div class="card-body">
        <h5 class="card-title white-text">${nombre}</h5>
        <p class="card-text white-text">${comment}</p>
      </div>
    `;

    comentarios.prepend(nuevoComentario);
    
    form.reset();
  }   
);



document.getElementById('name').addEventListener('keydown', inputCharacters);
function inputCharacters(event) {
 
  if (event.keyCode == 13) {
    document.getElementById('comment').focus();
  }
};
