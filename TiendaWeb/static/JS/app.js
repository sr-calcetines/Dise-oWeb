document.addEventListener('DOMContentLoaded', function () {
    
    var usuarioInput = document.getElementById('usuario');
    var contrasenaInput = document.getElementById('contrasena');
    var loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function () {
    
        var usuario = usuarioInput.value;
        var contrasena = contrasenaInput.value;

        if (usuario === 'admin@pepenacho.com' && contrasena === '1234') {
            alert('Inicio de sesión exitoso como admin');
            window.location.href = 'panelAdmin.html';
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    });
});

    document.addEventListener("DOMContentLoaded", function() {
      const createProductButton = document.querySelector('.create-product');
      const tbody = document.querySelector('tbody');

      createProductButton.addEventListener('click', function() {
        const lastRow = tbody.querySelector('tr:last-child'); 

        
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>Nuevo Producto</td>
          <td>Descripción del nuevo producto</td>
          <td><img src="static/IMG/sudadera2.webp" alt="Nuevo Producto"></td>
          <td>$24.99</td>
          <td>20</td>
          <td>2023-12-03</td>
          <td>
            <a href="#" class="edit">Editar</a>
            <a href="#" class="delete">Eliminar</a>
          </td>
        `;

        if (lastRow) {
          lastRow.insertAdjacentElement('afterend', newRow); 
        } else {
          tbody.appendChild(newRow); 
        }
      });
    });

    document.addEventListener("DOMContentLoaded", function() {
      const tbody = document.querySelector('tbody');

      tbody.addEventListener('click', function(event) {
        const target = event.target;

       
        if (target.classList.contains('edit')) {
          const row = target.closest('tr'); 

        
          const name = row.cells[0].textContent;
          const description = row.cells[1].textContent;
          const imagen = row.cells[2].textContent;
          const precio = row.cells[3].textContent;
          const stock = row.cells[4].textContent;
          const fechaCreacion = row.cells[5].textContent;

          
          row.innerHTML = `
            <td><input type="text" value="${name}" /></td>
            <td><input type="text" value="${description}" /></td>
            <td><input type="text" value="${imagen}" /></td>
            <td><input type="text" value="${precio}" /></td>
            <td><input type="text" value="${stock}" /></td>
            <td><input type="text" value="${fechaCreacion}" /></td>
            <!-- Aquí agregarías campos editables para los demás datos -->
            <td><button class="save">Guardar</button></td>
          `;

          
          const saveButton = row.querySelector('.save');
          saveButton.addEventListener('click', function() {
            const newName = row.cells[0].querySelector('input').value;
            const newDescription = row.cells[1].querySelector('input').value;
            const newImagen = row.cells[2].querySelector('input').value;
            const newPrecio = row.cells[3].querySelector('input').value;
            const newStock = row.cells[4].querySelector('input').value;
            const newfechaCreacion = row.cells[5].querySelector('input').value;

           
            row.innerHTML = `
              <td>${newName}</td>
              <td>${newDescription}</td>
              <td>${newImagen}</td>
              <td>${newPrecio}</td>
              <td>${newStock}</td>
              <td>${newfechaCreacion}</td>
             
              <td>
                <a href="#" class="edit">Editar</a>
                <a href="#" class="delete">Eliminar</a>
              </td>
            `;
          });
        }
      });
    });
 