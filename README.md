# Manual para utilizar la api XD
Esta es una api bastante sencilla y talvez con varios errores, pero se puede utilizar bien.
# Cosas antes de utilizar API
Primero utilizar `npm install` para instalar todas las dependencias, ademas de crear el .env para tener todas las variables de entorno, entre ellas:

    PORT= "Escriba el puerto donde queire iniciar el servidor"
    DATABASE_NCC = "Escriba la url para conectarse a MongoDB"
    CLAVEPRIVADAJWT = "Cree una calve cualquiera para el cifrado de los jwt"

# 1- Primero debes de crear un usuario
Para crear un usuario utiliza la direccion.
`localhost:8080/api/usuarios/`
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
## -GET:
El get devolvera una lista con todos los usuarios que esten en la base de datos,
## -PUT:
EL put resibirá por medio del body lo mas importante, el id del usuario que se quiere autenticar, luego podra enviar el nombre, correo y contraseña si desea actulizarlo.

```json
{
    "id": "6219312b954b31d17f0d4514",
    "1nombre": "bananeido2",
    "1correo": "Bananeido123@gmial.com",
    "contraseña": "miguelAngel"
}
```

## -POST:
Para utilizar el post lo unico que debes de hacer es enviar el id del usuario al cual se borrará, esto no lo borrara del todo de la base de datos, pero si lo colocara en estado false, y deberia de ser como si nunca hubiera existido :v . uwu

# 2 - Despues de que tengas aunque sea un usuario, podras relacionarle tareas 7u7
En las tareas podras agregarle descripcion, relacionarlo a un usuario, y tener un estado donde sabras si lo hiciste o no XD.

- Para accedeer a la api de las tareas tendras el url de: `/api/tareas/ ` donde podras solicitar lo sigueintes metodos:

## -POST:
Aqui podras crear nuevas tareas para el usuario, para eso deberas mandar en el body descripcion de la tarea, y el id del usuario dueño de la tarea. Por ejemplo:

```json
{
	"descripcion":  "Esta es la nueva tarea",
	"id":  "- Aqui iria la id del usuario -"
}
```


## - GET:
Deberas pasarle en el body como argumento un ` id ` del usuario para poder agregarselas a ese usuario:
Por ejemplo:

    {
    	"id": "- Aqui iria ID del usuario"
    }

Devolvera una lista de todas las tareas que tenga ese usuario, si no tiene tareas devolvera un array vacio, creo XD

## - PUT:
Podras actualizar la informacion de las tareas, para esto deberas enviar en el body la descripcion exacta de la tarea que quieres actualizar, junto con el id del usuario, y tambien en que estado quieres que esté la tarea. Por ejemplo:

    {
    	"descripcion": "Sacar al perro",
    	"id": " - ID del usuario dueño de la tarea - ",
    	"completado": true || false //Dependiendo que quieras
    }

## - Deleate:
Podras borrar las tareas que tenga el usuario. Para ello deberas mandar en el body de la peticion , el id del usuario dueño de la tarea, y ademas de eso la descripcion exacta de la tarea que quieras borrar. Por ejemplo:

```json
{
	"id" : -" Aqui iria el id del dueño de la tarea -",
	"descripcion": "Sacar al perro"
}
```


*Creo que por el momento eso es todo seguramente en el futuro agregare una interfaz con Reactjs, y agregar mas metodos al api y los JWT y muchas cosas mas xD*~~~~