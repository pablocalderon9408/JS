function miAuto(marca, modelo, puertas){
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
}


var auto1 = new miAuto("Toyota",2020,4)



var articulos = [
    {nombre: "Bici", costo: 300},
    {nombre: "Tv", costo: 500},
    {nombre: "Libro", costo: 15},
    {nombre: "Audifonos", costo: 100},
    {nombre: "Teclado", costo: 200},
]

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 300

});

var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});

var findArticulo = articulos.find(function(articulo){
    return articulo.nombre = "Tv"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre)

})

var articuloEco = articulos.some(function(articulo){
    return articulo.costo <= 100
})