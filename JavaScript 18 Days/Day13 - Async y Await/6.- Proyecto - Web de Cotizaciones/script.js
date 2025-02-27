async function cargarDatos() {
    console.log("Entrando en cargarDatos");
    let loading = document.getElementById('loading');
    loading.style.display = 'block';

    // Esperar 1 segundo antes de continuar
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Obtenemos los datos de las APIs
    const datosDivisas = await consultarRecursosExternos();

    // Ocultamos el loading
    loading.style.display = 'none';

    // Cargamos el título y el logo
    cargarTituloYLogo();

    // Cargamos las cotizaciones con los datos obtenidos
    cargarCotizaciones(datosDivisas);
}

async function consultarRecursosExternos() {
    console.log("Entrando en consultarRecursosExternos");
    let rutaDatosEUR = 'https://open.er-api.com/v6/latest/EUR';
    let rutaDatosUSD = 'https://open.er-api.com/v6/latest/USD';
    let rutaDatosARS = 'https://open.er-api.com/v6/latest/ARS';
    let rutaDatosCNY = 'https://open.er-api.com/v6/latest/CNY';

    // Obtenemos los datos de las APIs
    let respuestaEUR = await fetch(rutaDatosEUR);
    let jsonEUR = await respuestaEUR.json();

    let respuestaUSD = await fetch(rutaDatosUSD);
    let jsonUSD = await respuestaUSD.json();

    let respuestaARS = await fetch(rutaDatosARS);
    let jsonARS = await respuestaARS.json();

    let respuestaCNY = await fetch(rutaDatosCNY);
    let jsonCNY = await respuestaCNY.json();

    // Retornamos un objeto con los datos de las divisas
    return {
        eurToUsd: jsonEUR.rates.USD,
        usdToArs: jsonUSD.rates.ARS,
        arsToCny: jsonARS.rates.CNY,
        cnyToEur: jsonCNY.rates.EUR
    };
}

function cargarTituloYLogo() {
    console.log("Entrando en cargarTituloYLogo");
    let titulo = document.getElementById('titulo');
    let logo = document.getElementById('logo');

    titulo.textContent = '🪙WEB DE COTIZACIONES🪙';
    logo.src = "dollar-bag-100.png";
}

function cargarCotizaciones(datosDivisas) {
    console.log("Entrando en cargarCotizaciones");
    let euroToDolar = document.getElementById('euroToDolar');
    let dolarToPeso = document.getElementById('dolarToPeso');
    let pesoToYuan = document.getElementById('pesoToYuan');
    let yuanToEuro = document.getElementById('yuanToEuro');

    // Limpiamos el contenido previo
    euroToDolar.innerHTML = '';
    dolarToPeso.innerHTML = '';
    pesoToYuan.innerHTML = '';
    yuanToEuro.innerHTML = '';

    // Mostramos las cotizaciones
    euroToDolar.textContent = `1 EUR = ${datosDivisas.eurToUsd} USD`;
    dolarToPeso.textContent = `1 USD = ${datosDivisas.usdToArs} ARS`;
    pesoToYuan.textContent = `1 ARS = ${datosDivisas.arsToCny} CNY`;
    yuanToEuro.textContent = `1 CNY = ${datosDivisas.cnyToEur} EUR`;
}