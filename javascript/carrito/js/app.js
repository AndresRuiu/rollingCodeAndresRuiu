//declaras
let productos=[];
let ids=1;
function crearProductos(prod) {
    productos.push(prod);
}

//expresadas
let mostrarProductos =function() {
    let elementoDiv = document.querySelector(".container");
    
    console.log(elementoDiv);
    elementoDiv,classlist.add("bg-info");
    
    productos.forEach(function(producto){
        elementoDiv.innerHTML+=`<h2>${producto}</h2>`;
    });
}
let borrarProductos=()=>{
    
    mostrarProductos();
}
let modificarProductos=(id,newData)=>{
    productos[pos]=newData;
    
    //productos.splice();
    mostrarProductos();
}

//invocamos las funciones
/*crearProductos({
    id:ids++,
    precio:20000, 
    nombre:"memoria de 8gb",
    url:'https://m.media-amazon.com/images/I/7132NML2VhL._AC_SL1500_.jpg'
})

crearProductos({
    id:ids++,
    precio:100000, 
    nombre:"memoria de 16gb",
    url:'https://m.media-amazon.com/images/I/7132NML2VhL._AC_SL1500_.jpg'
}) */

crearProductos("yerba mate");
crearProductos("coca cola");
crearProductos("agua mineral");
crearProductos("chueptin");
crearProductos("dulce de leche");
console.log(productos);
mostrarProductos();