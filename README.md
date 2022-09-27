# Prueba técnica Hiberus - Frontend

Deberás desarrollar una tienda online, sin gestionar toda la lógica de pagos.

Consistirá en un listado de productos, desde el cual podremos añadir los productos al carrito de la compra.

Cada uno de estos productos tendrá los siguientes atributos, "id", "name", "description", "image", "price" y "discount".

En el listado de productos deberás de mostrar toda la información del producto, además tendrás que tener en cuenta que alguno de los productos tiene un descuento, que tendremos que aplicar al precio para mostrar el precio con descuento e indicar al usuario de alguna forma que este producto esta en oferta.

Desde cada uno de los productos tendrás un botón que nos permitirá añadir el producto al carrito y tendrás que permitir al usuario acceder a este carrito para ver un resumen del pedido que va a realizar.

En el listado de productos se permitira ordenar y filtrar los artículos por nombre y precio.

## Cómo iniciar la API

Para tener disponible los datos de los productos como si de una api se tratará usaremos el paquete de npm json-server [Ver enlace](https://www.npmjs.com/package/json-server) el cual usando el comando `json-server --watch products.json` nos permitirá iniciar un servidor con el json proporcionado junto a este archivo.

## A tener en cuenta

Queda a tu elección el uso de cualquier librería o herramienta que mejore la calidad del desarrollo o la fluidez a la hora de trabajar.

Se permite modificar el campo "image" de cada producto para poder guardar las imagenes en el directorio deseado, las imagenes están en la carpeta assets junto a este documento.

Las herramientas usadas para la maquetación de la aplicación tambien quedan a tu elección, el diseño de la aplicación deberá ser responsive.

## Puntos a valorar

- Diseño usable y atractivo.
- Estructuración del codigo y de los componentes
- Documento indicando las decisiones tomadas a la hora de desarrollar la aplicación y por qué se han tomado.

## Requisitos

- Uso de React
- Uso de Typescript
- Usar una librería de componentes (Ant, Chackra, etc...)
- Uso de Redux / Context API

Opcional:

- Storybook
- Test unitario con Jest y react testing library.
