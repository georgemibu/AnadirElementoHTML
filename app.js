const crearProducto = document.getElementById('crear-producto')
const productosContainer = document.getElementById('productos-container')


function crearProductoEnTarjeta(productos){
        const nuevoProducto = document.createElement('div')
        nuevoProducto.classList='tarjeta-producto'
        nuevoProducto.innerHTML= `
            <h3>Holi ${productos}</h3> 
        `

        productosContainer.appendChild(nuevoProducto)
        console.log(nuevoProducto)
}


crearProducto.addEventListener('click', ()=>{
    crearProductoEnTarjeta("Prueba")
})


