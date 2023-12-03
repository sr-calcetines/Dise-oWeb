document.addEventListener('DOMContentLoaded', function () {
    
    var usuarioInput = document.getElementById('usuario');
    var contrasenaInput = document.getElementById('contrasena');
    var loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function () {
    
        var usuario = usuarioInput.value;
        var contrasena = contrasenaInput.value;

        if (usuario === 'profesor@cesurformacion.com' && contrasena === '1234') {
            alert('Inicio de sesión exitoso como profesor');
            window.location.href = 'profesor.html';
        } else if (usuario === 'alumno@cesurformacion.com' && contrasena === '5678') {
            alert('Inicio de sesión exitoso como alumno');
            window.location.href = 'alumno.html';
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    });
});