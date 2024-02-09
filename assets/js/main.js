const container = document.querySelector('.container')
const horas = document.getElementById("hours");
const minutos = document.getElementById("minutes");
const segundos = document.getElementById("seconds");

function nowHours(data, acrescentaZero) {
   
   data = new Date();
   acrescentaZero = "0";

   let nHour = data.getHours();
   let nMinutes = data.getMinutes();
   let nSeconds = data.getSeconds()

   if (nSeconds < 10) {
      nSeconds = acrescentaZero + nSeconds;
   }

   if (nMinutes < 10) {
      nMinutes = acrescentaZero + nMinutes;
   }

   if (nHour < 10) {
      nHour = acrescentaZero + nHour;
   }

   horas.textContent = nHour;
   minutos.textContent = nMinutes;
   segundos.textContent = nSeconds;

   if (nHour >= 18) {
      container = container.style.backgroundImage = "url('./assets/imagens/nightt.jpg')";
   } 

   else if (nHour < 18) {
      container = container.style.backgroundImage = "url('./assets/imagens/day.jpg')";
   } 

}
setInterval(nowHours, 1000);


