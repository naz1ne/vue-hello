const { createApp } = Vue

createApp({
      data() {
            return {
                  message: 'This is a image!',
                  url: 'https://picsum.photos/800/400'
            }
      }
}).mount('#app')