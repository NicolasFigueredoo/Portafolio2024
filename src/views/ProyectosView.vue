<template>
  
<div class="container">

  <div class="row justify-content-center">

<div cñ v-for="proyecto in JsonProyectos.proyectos" :key="proyecto.id" class="col-md-4 mb-4 mt-5">
    
    <div class="tarjetas card animate__animated animate__flipInX" style="width: 18rem;">
        <font-awesome-icon class="iconos" :icon="proyecto.icon" />
        <div class="bodyTarjeta card-body">
            <h5 class="card-title">{{proyecto.nombre}}</h5>
            <p class="card-text">{{proyecto.descripcion}}</p>
 
        </div>
        <div class="links">
          <span v-if="proyecto.web !== ''">
            <a class="redes" :href="proyecto.web" target="_blank"><font-awesome-icon class="git" icon="fa-solid fa-square-arrow-up-right" /></a>
          </span>

          <span v-if="proyecto.github !== ''">
            <a class="redes" :href="proyecto.github" target="_blank"><font-awesome-icon class="git" icon="fa-brands fa-square-github" /></a>
          </span>

          <span v-if="!proyecto.github && !proyecto.web">
            <p>Mantenimiento</p>

          </span>
        </div>
    </div>

</div>

</div>


</div>

</template>

<script>

export default {
  data() {
    return {
      JsonProyectos: {
        proyectos: [
          { id: 5, nombre: "Systema de turnos", descripcion: "PHP LARAVEL JQUERY MYSQL", github:'https://github.com/NicolasFigueredoo/PaginaCamila/tree/main/agenda', web:'', icon:"fa-solid fa-headphones" },
          { id: 6, nombre: "Ecommerce Nike", descripcion: "HTML CSS JS JQUERY BOOTSTRAP", github:'https://github.com/NicolasFigueredoo/NikePaginaFinal', web:'https://nicolasfigueredoo.github.io/NikePaginaFinal/', icon:'fa-solid  fa-cart-shopping' },
          { id: 3, nombre: "Soporte de Tickets", descripcion: "PHP LARAVEL JQUERY MYSQL", github:'', web:'https://well-mannered-invoi.000webhostapp.com/', icon:"fa-solid fa-headset"},
          { id: 4, nombre: "Calculadora Animada", descripcion: "HTML CSS JS JQUERY BOOTSTRAP", github:'https://github.com/NicolasFigueredoo/CalculadoraFinal', web:'https://nicolasfigueredoo.github.io/CalculadoraFinal/', icon:'fa-solid fa-calculator'},
          { id: 1, nombre: "MlPlak", descripcion: "LARAVEL VUE.JS MYSQL", github:'', web:'', icon:'fa-solid fa-diagram-project'},
          { id: 2, nombre: "CyberArg", descripcion: "LARAVEL VUE.JS MYSQL", github:'', web:'', icon:'fa-solid fa-users-gear'},



        ]
      }
    };
  }
}
</script>


<style>

.iconos{
  margin: 20px;
  font-size: 50px;
}
.tarjetas{
  align-items: center;
  margin-left: 50px;
}

.bodyTarjeta{
  text-align: center;
}
.git{
  font-size: 40px;
  margin-left: 4px;
}

.redes{
  color: black;
}
.links{
  margin-bottom: 10px;
}
</style>
