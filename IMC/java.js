var resultado = 0;
var sexo = 0;

function showSelected() {
  let sexo = document.getElementById("sexo").value;
  console.log(sexo)
} 
  

const submit = () => {
  
  let nombre = document.getElementById("nombre").value; 
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let sexo = document.getElementById("sexo").value;
  console.log(sexo)

  parseInt(peso)
  parseInt(altura)

  altura = altura / 100

  let imc = peso / (altura**2)

  if (sexo == 0) {

    if (imc < 17) {
    let estado1 = "Muy Delgado"
    document.getElementById("mensaje").innerHTML = `${nombre}, su índice de masa corporal es: ${estado1}. Precaución 
                                                    Considere realizar actividad física para mejorar su condición.`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/SkinnyMan.jpg" />';
  } else if (imc > 18 && imc <= 22) {
    let estado2 = "Delgado"
    document.getElementById("mensaje").innerHTML = `${nombre}, su índice de masa corporal es: ${estado2}. ¡Advertencia¡ Debe aumentar su peso.`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/DelgadoMan.jpg" />';
    console.log(estado2)
  } else if (imc > 22 && imc <= 27) {
    let estado3 = "Nivel Normal"
    document.getElementById("mensaje").innerHTML = `${nombre}, su índice de masa corporal es: ${estado3}. 
                                                    Se encuentra en los niveles adecuados­, ¡mantente así!.`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/NormalMan.jpg" />';
    console.log(estado3)
  } else if (imc >= 28 && imc <= 33) {
    let estado4 = "Obesidad tipo 1"
    document.getElementById("mensaje").innerHTML = `${nombre}, su índice de masa corporal es: ${estado4}. ¡Atención!, posiblemente se encuentra en la fase inicial de la Obesidad. 
                                                    Iniciar dieta y actividad fisica a la menor brevedad posible`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/FatMan.jpg" />';
    console.log(estado4)
  } else {
    let estado5 = "Obesidad tipo 2"
    document.getElementById("mensaje").innerHTML = `${nombre}, su índice de masa corporal es: ${estado5}. ¡Alerta! Posiblemente se encuentra en fase avanzada de Obesidad.
                                                    Consulta inmediatamente a tu medico de familia para atención prioritaria y recomendaciones generales.`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/DangerFatMan.jpg" />';
    }
    
  } else {
if (imc < 16) {
    let estado1 = "Muy Delgado"
    document.getElementById("mensaje").innerHTML = `${nombre}, su índice de masa corporal es: ${estado1}. Precaución
                                                                Considere realizar actividad física para mejorar su condición`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/SkinnyWoman.png" />';
  } else if (imc > 16 && imc <= 19) {
    let estado2 = "Delgado"
    document.getElementById("mensaje").innerHTML = `${nombre}, Su índice de masa corporal es: ${estado2}. ¡Advertencia¡ Debe aumentar su peso.`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/DelgadaWoman.png" />';
    console.log(estado2)
  } else if (imc > 19 && imc <= 24) {
    let estado3 = "Nivel Normal"
    document.getElementById("mensaje").innerHTML = `${nombre}, su índice de masa corporal es: ${estado3}. 
                                                            Se encuentra en los niveles adecuados­, ¡mantente así!.­.`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/NormalWoman.png" />';
    console.log(estado3)
  } else if (imc >= 25 && imc <= 29) {
    let estado4 = "Obesidad tipo 1"
    document.getElementById("mensaje").innerHTML = `${nombre}, su índice de masa corporal es: ${estado4}. ¡Atención!, posiblemente se encuentra en la fase inicial de la Obesidad. 
                                                             Iniciar dieta y actividad fisica a la menor brevedad posible`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/FatWoman.png" />';
    console.log(estado4)
  } else {
    let estado5 = "Obesidad tipo 2"
    document.getElementById("mensaje").innerHTML = `${nombre}, su índice de masa corporal es: ${estado5}. ¡Alerta! Posiblemente se encuentra en fase avanzada de Obesidad.
                                                                Consulta inmediatamente a tu medico de familia para atención prioritaria y recomendaciones generales.`;
    document.getElementById("image").innerHTML='<img src="./Imagenes/DangerFatWoman.png" />';
    }
  }

  

  console.log(imc)
  
}