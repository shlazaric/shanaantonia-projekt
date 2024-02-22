<template>
    <div>
      <div class="welcome-message">
        <p>Dobrodošao/la! </p>
      </div>
  
      <input v-model="searchQuery" placeholder="Unesite ID proizvoda">
      <button @click="searchById">Pretraži po ID-u</button>
  
      <div v-if="selectedProduct" class="product-item">
        
        <img :src="getImagePath(selectedProduct.image)" :alt="selectedProduct.name">
        <p>{{ selectedProduct.name }}</p>
      </div>
      <div v-if="showNotFoundMessage" class="no-product-message">
        <p>Nije pronađen proizvod sa ID-om {{ searchQuery }}.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        products: [
          { id: 1, name: 'Parfem', image: 'perfume.png' },
          { id: 2, name: 'Četka', image: 'cetka.png' },
          { id: 3, name: 'Baloni', image: 'baloni.png' },
          { id: 4, name: 'Šminka', image: 'sminka.png' },
        ],
        selectedProduct: null,
        showNotFoundMessage: false,
      };
    },
    computed: {
      filteredResults() {
        if (!this.searchQuery) return this.products;
        const queryId = parseInt(this.searchQuery);
        return this.products.filter(product => product.id === queryId);
      },
    },
    methods: {
      searchById() {
        if (this.filteredResults.length > 0) {
          this.selectedProduct = this.filteredResults[0];
          this.showNotFoundMessage = false;
        } else {
          this.selectedProduct = null;
          this.showNotFoundMessage = true;
        }
      },
      getImagePath(image) {
       
        return require(`@/assets/${image}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .welcome-message {
    margin-bottom: 10px;
  }
  
  input {
    margin-bottom: 10px;
    padding: 5px;
  }
  
  .product-list {
    display: flex;
    justify-content: space-around;
  }
  
  .product-item {
    text-align: center;
  }
  
  .product-item img {
    width: 100px; 
    height: 100px;
  }
  </style>
  