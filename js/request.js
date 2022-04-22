const Request = {

    //DECLARANDO AS FUNCTIONS
    init: function(){
        this.selectors()
        this.displayError()
        this.convertToJson()
        this.displayOnScreen()
        this.requestingAPI()
    },

    //SELECIONADO OS ELEMENTOS HTML
    selectors: function(){
        this.card = document.querySelector(".card_produtos")
        this.button_add = document.querySelector("#button_add")
    },


    convertToJson: function(response){
        return response.json()
    },


    requestingAPI: function(){
        const self = this
        page++
        return fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`)
        .then(self.convertToJson)
        .then(self.displayOnScreen)
        .catch(self.displayError)
    },



    displayError: function(){
        console.log('error')
    },


    displayOnScreen: function(dados){
        console.log(dados)

    }







}

Request.init()