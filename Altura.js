var Altura1;
var Altura2;
var Resultado;

//AlturaInicial
function altum()
{
navigator.geolocation.getCurrentPosition(altumb);

function altumb(location)
{

    Altura1 = location.coords.altitude;
    document.querySelector("#alturai").innerText = Altura1;
}
}

//AlturaFinal
function altdoisca()
{
navigator.geolocation.getCurrentPosition(altdoiscab);

function altdoiscab(location)
{
    Altura2 = location.coords.altitude;
    document.querySelector("#alturaf").innerText =  Altura2;
}

   Resultado = Altura1 - Altura2;
   document.querySelector("#res").innerText = Resultado;
}

//Altura 1
 //function altum()
       // {
          // navigator.geolocation.getCurrentPosition(alal);
       // }
            //getLocation();

//function alal(pos){document.querySelector("#alturai").innerText =  location.coords.altitude;}


//Altura 2 e Calculo
// function altdoisca(Location)
        //{
            //console.log(location.coords.altitude);

            //var alt1 = Number(document.getElementsById('altura1').value);

            //var alt2 = Number(document.getElementsById('altura2').value);

            //var calculo = alt2 - alt1;

             //document.getElementsById('calculo').value = calculo;
       // }

    
//anot
           //var input = document.querySelector("#altum");
           //var texto = input.value;
           //console.log(texto);

