const contenedor = document.getElementById('contenedor');
const loading = document.getElementById('loading');
const errorMsg = document.getElementById('error-message');
const buscador = document.getElementById('buscador');

async function fetchPersonajes(nombre = "") {
    try {
        loading.style.display = 'block';
        errorMsg.textContent = "";
        contenedor.innerHTML = "";

        const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`;
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) throw new Error("No se encontraron resultados");
            throw new Error("Error de conexión");
        }

        const data = await response.json();

        const html = data.results.map(p => `
            <div class="card">
                <img src="${p.image}" alt="${p.name}" width="100">
                <h3>${p.name}</h3>
            </div>
        `).join('');

        contenedor.innerHTML = html;

    } catch (error) {
        errorMsg.textContent = error.message;
    } finally {
        loading.style.display = 'none';
    }
}

buscador.addEventListener("input", (e) => {
    const query = e.target.value;
    if (query.length >= 3) {
        fetchPersonajes(query);
    } else if (query.length === 0) {
        fetchPersonajes(); 
    }
});

fetchPersonajes();