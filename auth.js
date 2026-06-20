// Importar las funciones necesarias de Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Tu configuración de Firebase (Reemplaza esto con TUS datos de la consola)
const firebaseConfig = {
  apiKey: "AIzaSyAyT-kOTCMnR0i_JiaA24IeC5VDVqQq04g",
  authDomain: "curso-biblico-a3d39.firebaseapp.com",
  projectId: "curso-biblico-a3d39",
  storageBucket: "curso-biblico-a3d39.firebasestorage.app",
  messagingSenderId: "349312695697",
  appId: "1:349312695697:web:4094173b37adff62b4ee30"
};

// Inicializar Firebase y el servicio de Autenticación
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Capturar elementos del DOM
const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btnAction = document.getElementById('btn-action');
const toggleAuth = document.getElementById('toggle-auth');

let isLoginMode = true; // Por defecto el formulario inicia en Login

// Cambiar entre Modo Login y Modo Registro
toggleAuth.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    
    if (isLoginMode) {
        btnAction.textContent = "Iniciar Sesión";
        toggleAuth.textContent = "Regístrate aquí";
    } else {
        btnAction.textContent = "Crear Cuenta";
        toggleAuth.textContent = "Ya tengo cuenta, ingresar";
    }
});

// Manejar el envío del formulario
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (isLoginMode) {
        // Lógica para Iniciar Sesión
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("¡Ingreso exitoso!");
                window.location.href = "curso.html"; // Redirige a la página principal del curso
            })
            .catch((error) => {
                alert("Error al ingresar: " + error.message);
            });
    } else {
        // Lógica para Registrarse
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("¡Cuenta creada con éxito! Bienvenido.");
                window.location.href = "curso.html"; 
            })
            .catch((error) => {
                alert("Error en el registro: " + error.message);
            });
    }
});

// Al final de tu auth.js actual, agrega esto:

const btnCerrarSesion = document.getElementById('btn-cerrar-sesion');

onAuthStateChanged(auth, (user) => {
    // Si estamos en curso.html y NO hay usuario, redirigir al login
    if (!user && window.location.pathname.includes('curso.html')) {
        window.location.href = "index.html";
    } 
    // Si hay usuario y estamos en curso.html, asignarlo a tu variable global
    else if (user && window.location.pathname.includes('curso.html')) {
        if (typeof estudianteActual !== 'undefined') {
            estudianteActual = user.email;
        }
    }
});

// Manejo de tu botón de salir original
if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener('click', () => {
        signOut(auth).then(() => {
            window.location.href = "index.html";
        });
    });
}
