<template>
    <div class="containerData">
      <div class="containerImg animate__animated animate__flipInX">
        <img id="imgNico" src="../assets/img/v.png" alt="">
      </div>
      <div class="textContent animate__animated animate__flipInX">
        <span id="title">NICOLAS EMANUEL FIGUEREDO</span>
      </div>
      <div class="textContent animate__animated animate__flipInX">
        <span>Soy una persona proactiva, excelente compañero de equipo, organizado y responsable. Disfruto mucho aprender cosas nuevas, por lo que mi objetivo es un puesto desafiante y dinámico donde poder compartir mi experiencia y a su vez sumar nuevos conocimientos.
          edad: 21 años
</span>
      </div>
    </div>
</template>

<style scoped>

#title{
  font-weight: bold;
}
.containerData {
  margin-top: 50px;
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

.containerImg {
  margin-bottom: 20px; 
}

#imgNico {
  height: 200px;
  width: 200px;
  border-radius: 100%;
}

.textContent {
  max-width: 400px; 
  text-align: center; 
}


</style>
