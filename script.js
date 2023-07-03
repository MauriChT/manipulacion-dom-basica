const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular') 
const pResult = document.querySelector('#result')

//el mismo addEventLisener envía un evento a la funcion, que en este caso es sumarInputValues
form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
    //mostramos por consola el objeot event 
    //console.log({event})

    //llamammos a este método de event para prevenir que recargue toda la página y envie los datos por la URL
    // Siempre se debe evitar enviar datos por la URL   
    event.preventDefault();    
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;    
}

/*la segundo forma de enviar datos de formulario, sería colocar al boton que está dentro de form, el typo="button", 
no se ejecutara ningún evento de submit, como en el ejercicio de arriba, solo el evento del boton */