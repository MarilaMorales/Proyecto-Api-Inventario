const path= require('path');
const fs = require('fs').promises;





const productData= path.join(__dirname, '../data/products.json');



const getAllProducts = async (req, res) => {
    products= await readProducts();

    try {
     

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: `Ooops error al obtener el dato`, error });
    }
};





async function readProducts() {
    try {
        const data = await fs.readFile(productData, 'utf-8'); 
        return JSON.parse(data); 
    } catch (error) {
        console.error('Oops! Error al leer el archivo:', error); 
        return [];
    }
}


async function writeProducts(productos) {
    try {
    const data = JSON.stringify(productos, null, 2);
    await fs.writeFile(productData, data, 'utf-8');
    } catch (error) {
    console.error('Error al escribir el archivo:', error);
    

}};




const addproduct = async (req, res) => {

    const { Nombre, Descripcion, Precio, Cantidad } = req.body;

    
    // Validar datos vacios
    if (!Nombre || !Precio || !Descripcion || !Cantidad) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    console.log(req.body); 
    
    const newProduct = {
        id: products.length + 1,
        Nombre,
        Descripcion,
        Precio,
        Cantidad
    };

    products.push(newProduct);
    await writeProducts(products);
    res.status(201).json(newProduct);
};



const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        products = await readProducts();
        const producIndex = products.findIndex(product => product.id === parseInt(id));
        
        if (producIndex === -1) {
            return res.status(404).json({ message:' Oops Producto no encontrado' });
        }


        products.splice(producIndex, 1); //elimina con el splice el producto
        await writeProducts(products);
        res.status(200).json({ message: 'Producto eliminado exitosamente.' });


    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor." });
    }
};




const updateProducts = async (req,res) => {
 
    try {
        const products= await readProducts();
        const {id} = req.params;    
        const { Nombre, Descripcion, Precio, Cantidad } = req.body;
        const producIndex = products.findIndex(products => products.id == parseInt(id));
        

        //Valida si esta el ID
        if (producIndex === -1) {
            return res.status(404).json({ message: 'Ooops, Producto no encontrado' });
        }



        if(Nombre) {
            products[producIndex].Nombre = Nombre;

        }
        if(Descripcion) {
            products[producIndex].Descripcion = Descripcion;
        }
        if(Precio) {
            products[producIndex].Precio = Precio;
        }
        if(Cantidad) {
            products[producIndex].Cantidad = Cantidad;
        }

        await writeProducts(products);
        console.log(req.body); 
        res.status(200).json({ message: 'Producto Editado Exitosamente. ', products:[producIndex] });

    } catch (error) {
        console.error("error al eliminar el Producto", error);
        res.status(500).json({message: "Error interno del servidor. "});
    }


};


readProducts();





module.exports = { getAllProducts, addproduct, deleteProducts, updateProducts, readProducts, writeProducts};

















