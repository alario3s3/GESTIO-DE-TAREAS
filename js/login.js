const nombrseUser = document.getElementById('nombres');//-->Capturamos los datos del html
const lastNameUser = document.getElementById('apellidos');
const emailUser = document.getElementById('email');
const passwordUser = document.getElementById('password');

const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogOut');

const users = [];//-->Creamos la lista de los usuarios

let valueUserName;//-->Creamos las variables donde estarán los datos capturados
let valueUserLastName;
let valueUseremail;
let valueUserpassword;

//Creamos un objeto User 
class User{
    constructor({
        name = undefined,
        lastName = undefined,
        email = undefined,
        password = undefined,
    }){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
} 

//Asignamos los valores de cada dato a sus variables
nombrseUser.addEventListener('input', ()=>{valueUserName = nombrseUser.value});
lastNameUser.addEventListener('input', ()=> {valueUserLastName = lastNameUser.value});
emailUser.addEventListener('input', ()=> {valueUseremail = emailUser.value});
passwordUser.addEventListener('input', ()=> {valueUserpassword = passwordUser.value});

//Informamos la instancia de un usuario y creamos la instancia de ese objeto
btnLogin.addEventListener('click', () => {
    alert(`Hellow ${valueUserName} ${valueUserLastName}, your email is ${valueUseremail} and your password is ${valueUserpassword}`);
    users.push(new User({
        name: valueUserName,
        lastName: valueUserLastName,
        email: valueUseremail,
        password: valueUserpassword,
    }));
    console.table(users);
});

btnLogout.addEventListener('click', () => {
    alert('Registro desechado');
});


