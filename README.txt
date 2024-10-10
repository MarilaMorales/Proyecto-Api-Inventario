Nombre del Proyecto: Inventario API:

Index.js:

1)Primero se hacen las importaciones: 
-Traemos express, path, cors y fs, además de las rutas de productos.

2) Creación de la app: 
- Con const app = express();

3) Después hacermos las Configuraciones: app.use(express.json()); permite recibir datos en JSON.

4) Definimos el puerto en const port = 3000.


5) Servidor: en el http://localhost:3000



ProductController:

1) Importaciones: Cargamos path para manejar rutas de archivos y fs para leer y escribir en el sistema de archivos.

2)Ruta de datos: Definimos la ruta del archivo products.json donde guardamos la información de los productos.

3) Funciones principales:

- getAllProducts: Obtiene todos los productos y los devuelve en formato JSON.

- readProducts: Lee el archivo JSON y devuelve los productos.

- writeProducts: Escribe los productos de nuevo en el archivo products.json.

- addProduct: Agrega un nuevo producto en el archivo products,json, validando que no falte información antes de guardarlo.

- deleteProducts: Elimina un producto por su ID, validando errores si no se encuentra.

- updateProducts: Actualiza un producto existente, también validando si el ID es correcto.



ProductRoutes:

1) Importaciones: Traemos express para manejar rutas y el productController.

2) Definición de rutas:

- GET /: Obtiene todos los productos.
- POST /: Agrega un nuevo producto.
- DELETE /:id: Elimina un producto específico por su ID.
- PUT /:id: Actualiza un producto existente por su ID.

3)Exportación: Al final, exportamos el router para que se use en la aplicación principal.

