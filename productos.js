const productos = [
    { id: 1, nombre: "Auriculares Bluetooth", precio: 50000, categoria: "electronicos", enStock: true },
    { id: 2, nombre: "Cuaderno A4", precio: 5000, categoria: "articulos escolares", enStock: true },
    { id: 3, nombre: "Reloj Inteligente", precio: 80000, categoria: "accesorios", enStock: true },
    { id: 4, nombre: "Calculadora Científica", precio: 25000, categoria: "articulos escolares", enStock: false },
    { id: 5, nombre: "Mouse Inalámbrico", precio: 15000, categoria: "electronicos", enStock: true },
    { id: 6, nombre: "Mochila Urbana", precio: 40000, categoria: "accesorios", enStock: true },
    { id: 7, nombre: "Teclado Mecánico", precio: 95000, categoria: "electronicos", enStock: false },
    { id: 8, nombre: "Set de Marcadores", precio: 8000, categoria: "articulos escolares", enStock: true }
];

const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtroCategoria");
const filtroPrecio = document.getElementById("filtroPrecio");
const filtroStock = document.getElementById("filtroStock");


const renderizarProductos = (lista) => {
    contenedor.innerHTML = lista.map(producto => `
        <div class="tarjeta">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Categoría: ${producto.categoria}</p>
            <p>${producto.enStock ? "En stock" : "Sin stock"}</p>
        </div>
    `).join("");
};

const aplicarFiltros = () => {

    const texto = buscador.value.toLowerCase();
    const cat = filtroCategoria.value;
    const precioMax = parseInt(filtroPrecio.value);
    const soloStock = filtroStock.checked;

    const productosFiltrados = productos.filter(p => {
        const coincideNombre = p.nombre.toLowerCase().includes(texto);
        const coincideCategoria = cat === "todos" || p.categoria === cat;
        const coincidePrecio = p.precio <= precioMax;
        const coincideStock = !soloStock || p.enStock;

        return coincideNombre && coincideCategoria && coincidePrecio && coincideStock;
    });

    renderizarProductos(productosFiltrados);
};

[buscador, filtroCategoria, filtroPrecio, filtroStock].forEach(elemento => {
    elemento.addEventListener("input", aplicarFiltros);
});