# Manual para utilizar la api XD
Esta es una api bastante sencilla y talvez con varios errores, pero se puede utilizar bien.
# Cosas antes de utilizar API
Primero utilizar `npm install` para instalar todas las dependencias, ademas de crear el .env para tener todas las variables de entorno, entre ellas:

    PORT= "Escriba el puerto donde queire iniciar el servidor"
    DATABASE_NCC = "Escriba la url para conectarse a MongoDB"
    CLAVEPRIVADAJWT = "Cree una calve cualquiera para el cifrado de los jwt"

# 1- Primero debes de crear un usuario
Para crear un usuario utiliza la direccion.
`localhost:8080/api/usuarios/login`
donde por medio de el **body** tendras que enviar: 
```json
{
    "nombre": "- Ingresa el nombre de usuario - ",
    "correo": "- Ingresa un correo valido -",
    "contraseña": "- Ingresa una contraseña de mas de 8 caracteres -"
}
```

- Cuando hayas creado tu primer usuario podras utilizar los otros metodos de "api/usuarios/ de manera correcta, dentro de los cuales esta:

## - POST:
Donde podras crear nuevos usuarios, para ello tendras que mandar el body donde este lo que se dijo antes, osea, nombre, correo, y contraseña.

## - LOGEATE:
Para poder logearte debes ir a `localhost:8080/api/usuarios/` por el metodo post y enviar en el body el correo y contraseña. Si envias correctamente te regresara el JWT que enviaras en el header para validarte en todo el resto de metodos, envialo como un `token`
Recuerda hacerlo seguido, ya que cada cierto tiempo se debe de actulizar para que sea valido

## -GET:
El get devolvera una lista con todos los usuarios que esten en la base de datos,

## -PUT:
EL put resibirá por medio del body lo mas importante, podra enviar el nombre, correo y contraseña si desea actulizarlo. (Recuerda enviar el jwt en el header como token)

```json
{
    "nombre": "bananeido2",
    "correo": "Bananeido123@gmial.com",
    "contraseña": "miguelAngel"
}
```

## -DELEATE:
Para utilizar el post lo unico que debes de hacer es enviar el token en el header al cual se borrará, esto no lo borrara del todo de la base de datos, pero si lo colocara en estado false, y deberia de ser como si nunca hubiera existido :v . uwu

# 2 - Despues de que tengas aunque sea un usuario, podras relacionarle tareas 7u7
En las tareas podras agregarle descripcion, relacionarlo a un usuario, y tener un estado donde sabras si lo hiciste o no XD.

- Para accedeer a la api de las tareas tendras el url de: `/api/tareas/ ` donde podras solicitar lo sigueintes metodos:

## -POST:
Aqui podras crear nuevas tareas para el usuario, para eso deberas mandar en el body descripcion de la tarea.(Recuerda enviar el jwt en el header como token) Por ejemplo:

```json
{
	"descripcion":  "Esta es la nueva tarea"
}
```


## - GET:
Deberas pasarle en el hederel jwt del usuario para poder agregarselas a ese usuario:

Devolvera una lista de todas las tareas que tenga ese usuario, si no tiene tareas devolvera un array vacio, creo XD

## - PUT:
Podras actualizar la informacion de las tareas, para esto deberas enviar en el body la descripcion exacta de la tarea que quieres actualizar, y tambien en que estado quieres que esté la tarea.(Recuerda enviar el jwt en el header como token) Por ejemplo: 

    {
    	"descripcion": "Sacar al perro",
    	"id": " - ID del usuario dueño de la tarea - ",
    	"completado": true || false //Dependiendo que quieras
    }

## - Deleate:
Podras borrar las tareas que tenga el usuario. Para ello deberas mandar en el header de la peticion , el jwt del usuario dueño de la tarea, y ademas de eso la descripcion exacta de la tarea que quieras borrar. Por ejemplo:

```json
{
	"descripcion": "Sacar al perro"
}
```


*Creo que por el momento eso es todo seguramente en el futuro agregare una interfaz con Reactjs*~~~~
