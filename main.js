let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web relacionados con Química y estudio Química en la UNAM.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
