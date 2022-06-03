(function pedirLinks(){
    for (let i = 1; i <= 12; i++){
        let urlImages = prompt(`Ingrese el url de la imagen ${i}`);
        let ciudad = prompt(`Porfavor ingrese el nombre de la ciudad ${i}`);
        let pais = prompt(`Porfavor ingrese el nombre del pais ${i}`);
        if(i <= 4 ){
            const contenedor = document.createElement('div');
            const imagen = document.createElement('img');
            const fatherElement = document.querySelector(`.content1`);
            const createTextCity = document.createElement(`p`);
            createTextCity.classList.add(`ajuste`);
            const createTextCountry = document.createElement(`p`);
            createTextCountry.classList.add(`ajustes`);
            const textoCity = document.createTextNode(ciudad);
            const textoCountry = document.createTextNode(pais);
            crearElementos(fatherElement,imagen,contenedor,urlImages,createTextCity,textoCity,createTextCountry,textoCountry);
        }else if( i >= 5 && i <= 8 ){
            const contenedor = document.createElement('div');
            const imagen = document.createElement('img');
            const fatherElement = document.querySelector(`.content2`);
            const createTextCity = document.createElement(`p`);
            createTextCity.classList.add(`ajuste`);
            const createTextCountry = document.createElement(`p`);
            createTextCountry.classList.add(`ajustes`);
            const textoCity = document.createTextNode(ciudad);
            const textoCountry = document.createTextNode(pais);
            crearElementos(fatherElement,imagen,contenedor,urlImages,createTextCity,textoCity,createTextCountry,textoCountry);
        }else{
            const contenedor = document.createElement('div');
            const imagen = document.createElement('img');
            const fatherElement = document.querySelector(`.content3`);
            const createTextCity = document.createElement(`p`);
            createTextCity.classList.add(`ajuste`);
            const createTextCountry = document.createElement(`p`);
            createTextCountry.classList.add(`ajustes`);
            const textoCity = document.createTextNode(ciudad);
            const textoCountry = document.createTextNode(pais);
            crearElementos(fatherElement,imagen,contenedor,urlImages,createTextCity,textoCity,createTextCountry,textoCountry);
        }
    }
})();

function crearElementos(padre,imagen,contenedor,linkimage,cCity,city,cCountry,country){
    contenedor.classList.add('contenedorCreado');
    imagen.classList.add('estilizarImagenes');
    imagen.src = linkimage;
    padre.appendChild(contenedor);
    contenedor.appendChild(imagen);
    contenedor.appendChild(cCity);
    cCity.appendChild(city);
    contenedor.appendChild(cCountry);
    cCountry.appendChild(country);
}
