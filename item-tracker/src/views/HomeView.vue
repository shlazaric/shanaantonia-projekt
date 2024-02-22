<template>
  <div class="home">
    <div class="image-container">
    
      <img src="@/assets/home.png" class = "logo-image">
    </div>
    </div>
    <br> 
    <div class="button-container">
      <div class="button-container">
     
      <router-link to="/login-view">
        <button>Prijavi se</button>
      </router-link>
      <router-link to="/sign-up">Registracija</router-link>
    </div>
    </div>
</template>

<style> 
body {
  background-color: #b4f1b4;

} 



  button {
    background-color: #2ecc71; 
    color: #fff; 
    padding: 10px 20px; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 

}

.logo-image {
    width: 300px; 
    height: 300px;
  }

</style> 