

const app = new Vue({
    el: "#root",
    
    data :{
        arrayEmail:[],
    },
    

    methods: {
        carica: function () {
          axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((risposta) => {

              console.log(risposta.data.response);
              this.arrayEmail.push(risposta.data.response);
             

             
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
      mounted() {
        for(let i=0; i<10; i++){
            this.carica()
        }
      
      }

    
    
    
    
    
    
    
    
    
    
     
        
        
        
        
        
       
       
       
       
       
       


    
       
})