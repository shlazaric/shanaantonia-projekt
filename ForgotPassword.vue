<template>
    <div>
      <h2>Zaboravljena lozinka</h2>
      <p>Unesite svoj e-mail kako bi Vam mogli poslati link za ponovni upis lozinke:</p>
      <input v-model="email" placeholder="Unesite e-mail">
      <button @click="resetPassword"> Resetiraj lozinku</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      resetPassword() {
        
        alert('Zahtjev za resetiranje lozinke poslan');
        
      },
    },
  };
  </script>
  
  <style scoped>

  h2 {
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 10px;
  }
  
  input {
    margin-bottom: 10px;
    padding: 8px;
  }
  
  button {
    padding: 8px 12px;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
  </style>
  