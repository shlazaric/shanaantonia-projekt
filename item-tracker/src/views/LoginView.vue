<template>
    <div class="login">
      <h1 class="bold-black"> Dobrodošao/la natrag! </h1>
      <div class="row justify-content-center align-items-center">
        <div class="col-sm"></div>
        <div class="col-sm">
          <div class="image-container">
            <img src="@/assets/login.png" class="logo-image">
          </div>
          <form>
            <div class="form-group">
              <label for="email">Email adresa</label>
              <input type="email" class="form-control" id="email" placeholder="Unesite svoju email adresu" />
            </div>
            <div class="form-group">
              <label for="password">Lozinka</label>
              <input type="password" class="form-control" id="password" placeholder="Unesite svoju lozinku" />
            </div>
            <div class="forgot-password mb-4">
              <router-link to="/forgot-password">Zaboravili ste lozinku? </router-link>
            </div>
            <router-link to="/search-view">Prijavi se</router-link>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </template>
  
  <style>
    body {
      background-color: #b4f1b4;
    }
  
    .bold-black {
      font-weight: bold;
      color: #000;
    }
  
    .logo-image {
      width: 300px;
      height: 300px;
    }
  
    button[type="submit"] {
      background-color: #2ecc71;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  