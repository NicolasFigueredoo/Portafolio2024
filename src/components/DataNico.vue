<template>
  <div class="rectangulo">
    <div class="tecnologias">
      <div class="logos animate__animated animate__slideInDown ">
        <font-awesome-icon icon="fa-brands fa-php" />
      </div>
      <div class="logos animate__animated animate__slideInDown ">
        <font-awesome-icon icon="fa-brands fa-laravel" />
      </div>
      <div class="logos animate__animated animate__slideInDown ">
        <font-awesome-icon icon="fa-brands fa-vuejs" />
      </div>
      <div class="logos animate__animated animate__slideInDown ">
        <font-awesome-icon icon="fa-solid fa-database" />
      </div>
    </div>
    <div class="redes">
      <div class="logos animate__animated animate__slideInDown ">
       <a href="https://www.linkedin.com/in/nicolasfigueredo/" target="_blank"><font-awesome-icon class="logo" @mouseover="startAnimationLogo('linkedin')" @mouseout="stopAnimationLogo('linkedin')" :class="{'animate__heartBeat': classAnimatedLinkedin}" icon="fa-brands fa-linkedin" />
       </a> 
      </div>
      <div class="logos animate__animated animate__slideInDown ">
        <a href="https://github.com/NicolasFigueredoo" target="_blank">
        <font-awesome-icon class="logo" @mouseover="startAnimationLogo('github')" @mouseout="stopAnimationLogo('github')" :class="{'animate__heartBeat': classAnimatedGithub}" icon="fa-brands fa-github" />
      </a>  
      </div>
      <div class="logos animate__animated animate__slideInDown ">
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7127087692034547712/?originTrackingId=WAx64gXfSEeepkHSI84RWw%3D%3D" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon class="logo" @mouseover="startAnimationLogo('file')" @mouseout="stopAnimationLogo('file')" :class="{'animate__heartBeat': classAnimatedFile}" icon="fa-solid fa-file fa-10x" />
      </a>
      </div>
  </div>
 
  <div class="datosNico">
    <div>
      <p class="animate__animated animate__bounce animate__delay-1s" @click="navigate('/miPerfil')">SOBRE MI</p>      
    </div>
    <div>
      <p class="animate__animated animate__bounce animate__delay-2s" @click="navigate('/proyectos')">PROYECTOS</p>
    </div>
    <div>
      <p class="animate__animated animate__bounce animate__delay-3s" @click="redirectToEmail()">CONTACTO</p>
    </div>
  </div>
  
  <div class="bienvenida">
    <h1>BIENVENIDOS A MI PORTAFOLIO</h1>
    <button  type="button"  class="btn btn-secondary animate__animated animate__rubberBand animate__delay-4s" @click="navigate('/proyectos')" >EXPLORAR PROYECTOS</button>
  </div>

  <router-view/>

  
  


  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      animatedText: "",
      isAnimating: false,
      animationInterval: null,
      classAnimatedLinkedin: false,
      classAnimatedGithub: false,
      classAnimatedFile: false, 
     };
  },
  methods: {
    navigate(route) {
      $('.bienvenida').remove('');
      this.$router.push(route);
    },
    startAnimationLogo(logo) {
      this[`classAnimated${logo.charAt(0).toUpperCase() + logo.slice(1)}`] = true;
    },
    stopAnimationLogo(logo) {
      this[`classAnimated${logo.charAt(0).toUpperCase() + logo.slice(1)}`] = false;
    },
    startAnimation() {
      if (!this.isAnimating) {
        this.isAnimating = true;

        const textToAnimate = "ICOLAS FIGUEREDO";
        this.animatedText = "";
        let index = 0;

        this.animationInterval = setInterval(() => {
          if (index < textToAnimate.length) {
            this.animatedText += textToAnimate[index];
            index++;
          } else {
            clearInterval(this.animationInterval);
            this.isAnimating = false; // Restablecer la bandera
          }
        }, 100); // 100ms entre cada letra
      }
    },
    stopAnimation() {
      if (this.isAnimating) {
        clearInterval(this.animationInterval);
        this.animatedText = ""; // Restablecer el texto animado
        this.isAnimating = false; // Restablecer la bandera
      }
    },
    redirectToEmail(){
        const email = 'nicofigueredodev@outlook.com.ar';
        const asunto = encodeURIComponent('Contacto Portafolio');
        const mensaje = encodeURIComponent('Hola buenas tardes');
        const mailtoLink = `mailto:${email}?subject=${asunto}&body=${mensaje}`;
          window.location.href = mailtoLink;
    }
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

.rectangulo{
  margin: 30px;
  border: 1px solid black;
  width: 97%;
  height: 93vh;
}

.redes{
  display: flex;
  justify-content: center;
}


.logos a{
  text-decoration: none;
  color: #000;
  margin-bottom: 50px;
}

.logos{
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-top: 10px;
  width: 70px;
  height: 50px;
}

.logo{
  cursor:pointer;
}

.datosNico{
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.datosNico div p{
  border: 1px solid black;
  border-radius: 50px;
  padding: 10px;
}

.bienvenida{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  margin: 0 auto; 
  text-align: center;
}
.bienvenida h1{
  font-size: 100px;
  font-family: 'Fjalla One', sans-serif;
}


.datosNico div{
  margin-left: 20px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}

.bienvenida button{
  background-color: white;
  border: 1px solid black;
  border-radius: 50px;
  padding: 10px;
  color: black;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  font-size: 15px;
}

.tecnologias{
  position: fixed;
}


</style>
