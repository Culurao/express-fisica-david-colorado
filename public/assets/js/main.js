var users = [
    {
        usuario: 'colo',
        contrasena: 1234,
    },
    {
        usuario: 'jd',
        contrasena: 4321
    },
    {
        usuario: 'lol@gmail.com',
        contrasena: 2431
    }
]

const login = () =>{
    let user = document.querySelector('#user')
    let pass = document.querySelector('#pass')
    let log = false
    
    users.forEach(u => {
        if (user.value == u.usuario && pass.value == u.contrasena) {
            log = true            
        }
    });

    verficacion(log)
}

const verficacion = (log) =>{
    return new Promise((resolve, reject) =>{
        if (log == true ) {
            resolve(location.href="home")
        } else {
            reject(alert("Nombre de usuario o contraseña invalidos"))
        }
    })
}
const btn = document.querySelector('#button')
btn.addEventListener("click", login)        