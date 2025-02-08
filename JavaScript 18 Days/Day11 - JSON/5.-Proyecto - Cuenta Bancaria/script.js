let datosJSON;

function cargarCuenta() {
  fetch("cuentaBanco.json")
    .then((res) => res.json())
    .then((salida) => {
      datosJSON = salida;

      let nombre = document.getElementById("nombre");
      let n_cuenta = document.getElementById("n_cuenta");
      let usd = document.getElementById("usd");
      let euros = document.getElementById("euros");
      let CBU = document.getElementById("CBU");

      nombre.textContent = datosJSON.nombre;
      n_cuenta.textContent = datosJSON.numero_cuenta;
      usd.textContent = datosJSON.saldo[0] + "$";
      euros.textContent = datosJSON.saldo[1] + "€";
      CBU.textContent = datosJSON.CBU;
    })
    .catch(function (error) {
      alert(error);
    });
}
