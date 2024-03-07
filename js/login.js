const nombrseUsuario = document.getElementById('#nombres');
const apellidosUsuario = document.getElementById('#apellidos');
const emailUsuario = document.getElementById('#email');
const passwordUsuario = document.getElementById('#password');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogOut');

class User{
    constructor({
        nombres,
        apellidos,
        email,
        password,
    }){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password; 
    }
}

let register = () => {
    usuario = new User({
        nombres: nombrseUsuario.value,
        apellidos: apellidosUsuario.value,
        email: emailUsuario.value,
        password: passwordUsuario.value,
    });

    const {nombres, apellidos, email, password} = usuario;

    console.log(nombres);
    console.log(apellidos);
    console.log(email);
    console.log(password);
    alert('Registro exitoso');
};

let noRegister = () => {
    alert('Registro desechado');
}

btnLogin.addEventListener('click', register);
btnLogout.addEventListener('click', noRegister);
