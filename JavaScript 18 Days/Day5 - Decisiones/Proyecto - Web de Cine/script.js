function recomendacion(genero) {
  let edad = document.getElementById("edad").value;
  let pelicula = "";
  if (edad <= 13) {
    switch (genero) {
      case "comedia":
        pelicula = "Mi villano favorito";
        break;
      case "infantil":
        pelicula = "Toy Story";
        break;
      case "accion":
        pelicula = "Spider-Man: Un nuevo universo";
        break;
      case "crimen":
        pelicula = "Los Increíbles";
        break;
      default:
        pelicula = "Ninguna";
        break;
    }
  } else {
    if (edad <= 16) {
      switch (genero) {
        case "comedia":
          pelicula = "Superbad";
          break;
        case "infantil":
          pelicula = "La princesa Mononoke";
          break;
        case "accion":
          pelicula = "Los Vengadores";
          break;
        case "crimen":
          pelicula = "El origen";
          break;
        default:
          pelicula = "Ninguna";
          break;
      }
    } else {
      switch (genero) {
        case "comedia":
          pelicula = "La gran apuesta";
          break;
        case "infantil":
          pelicula = "Shrek 2";
          break;
        case "accion":
          pelicula = "Mad Max: Furia en el camino";
          break;
        case "crimen":
          pelicula = "El lobo de Wall Street";
          break;
        default:
          pelicula = "Ninguna";
          break;
      }
    }
  }
  let texto = document.getElementById("texto");
  texto.textContent = "Te recomiendo la película: " + pelicula;
}
