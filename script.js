// Fecha objetivo: 26 de enero de 2026
const targetDate = new Date("Jan 26, 2026 00:00:00").getTime();

const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");
const audioElement = document.getElementById("daily-song");
const titleElement = document.getElementById("main-title");

// Contenido diario: 12 días
const contenidoDiario = {
  12: { song: "songs/dia12.mp3", photo: "images/dia12.jpg", message: "Y aunque el sol se canse de iluminar, yo jamás me cansaré de ti. 💘"},
  11: { song: "songs/dia11.mp3", photo: "images/dia11.jpg", message: "Si cada mirada tuya fuera una página, yo leería tu historia por siempre… porque mi vida solo tiene sentido al pasar cada capítulo contigo. 📖💞" },
  10: { song: "songs/dia10.mp3", photo: "images/dia10.jpg", message: "Aunque tuviera que esperarte mil años, lo haría sin dudar… porque cada segundo contigo es la eternidad que soñé. ⏳❤️" },
  9:  { song: "songs/dia9.mp3",  photo: "images/dia9.jpg",  message: "Aunque el reloj corra y digan que vamos tarde, contigo cada minuto se vuelve eterno… porque tu amor me hace llegar siempre a tiempo. ⏰❤️" },
  8:  { song: "songs/dia8.mp3",  photo: "images/dia8.jpg",  message: "Desde que llegaste, transformaste mi mundo… ahora cada instante contigo es magia, alegría y razón de vivir. 🌎❤️" },
  7:  { song: "songs/dia7.mp3",  photo: "images/dia7.jpg",  message: "Eres mi regalo de Dios, la bendición más grande que la vida me dio… contigo entendí que el amor verdadero existe y que mi destino eres tú. 🙏❤️" },
  6:  { song: "songs/dia6.mp3",  photo: "images/dia6.jpg",  message: "Lo tienes todo… la sonrisa que me enamora, la mirada que me calma y el amor que me completa. No necesito más, porque contigo ya lo tengo todo. 💕🌟" },
  5:  { song: "songs/dia5.mp3",  photo: "images/dia5.jpg",  message: "Eres ese algo que no sé explicar, pero que me llena de vida… ese misterio perfecto que me enamora más cada día. 💫❤️" },
  4:  { song: "songs/dia4.mp3",  photo: "images/dia4.jpg",  message: "Lo nuestro es amor del bueno… ese que no se finge, que se vive con el alma, como tu me has enseñado y que me hace agradecer cada día por tenerte. 💕🌹" },
  3:  { song: "songs/dia3.mp3",  photo: "images/dia3.jpg",  message: "Siempre te voy a querer, aunque pasen los años y cambie el mundo… mi amor por ti será eterno, porque eres mi razón de vivir. 💍❤️" },
  2:  { song: "songs/dia2.mp3",  photo: "images/dia2.jpg",  message: "Qué bonito es querer y saber que tú me quieres… porque contigo descubrí que el amor es la mayor alegría de la vida. 🌸💕" },
  1:  { song: "songs/dia1.mp3",  photo: "images/dia1.jpg",  message: "Si no me falla el corazón, sé que tú y yo estamos hechos el uno para el otro… porque mi destino siempre será amarte. 💓✨" },
  0:  { song: "songs/final.mp3", photo: "images/final.jpg", message: "Hoy celebramos que somos la pareja del momento… pero para mí, serás la pareja de toda mi vida. 🎉❤️" }
};

// Guardar el último día mostrado para no reiniciar audio cada segundo
let lastDay = null;

// Mostrar contenido diario
function mostrarContenido(days) {
  if (contenidoDiario[days] !== undefined && days !== lastDay) {
    lastDay = days; // actualizamos el último día
    const data = contenidoDiario[days];

    document.getElementById("daily-photo").src = data.photo;
    document.getElementById("daily-message").innerText = data.message;
    audioElement.src = data.song;

    // Intentar reproducir automáticamente
    audioElement.play().catch(err => {
      console.log("El navegador bloqueó autoplay:", err);
    });

    // Cambiar color del título según el día
    if (coloresTitulo[days] !== undefined) {
      titleElement.style.color = coloresTitulo[days];
    }
  }
}

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // 🔧 Ajuste: usar Math.ceil para que el contador llegue al 26 de enero
  const days = Math.ceil(distance / (1000 * 60 * 60 * 24)) - 1;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (days > 12) {
    messageElement.innerHTML = "La cuenta regresiva ha comenzado 💕";
  }

  mostrarContenido(days);

  if (distance < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = "¡Llegó el momento! 🎉";
    mostrarContenido(0);
  }
}, 1000);
