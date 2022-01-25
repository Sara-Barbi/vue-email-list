

const app = new Vue({
    el: "#root",
    array
    
    data :{
        num:null,
    },
    

    methods: {
        email: function () {
          axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((risposta) => {

              console.log(risposta.data.response);

              
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
    
    
    
    
    
    
    
    
    
     
        
        
        
        
        
       
       
       
       
       
       


    
       
})