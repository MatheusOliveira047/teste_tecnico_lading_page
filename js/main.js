
//SELECIONANDO O CONTAINER QUE IRA EXIBIR NA TELA
const card = document.querySelector(".card_produtos") 

// butão que ira adicionar mais produtos na tela
const button_add = document.querySelector("#button_add")
button_add.addEventListener('click', buscandoApi)

// FUNÇÃO QUE IRA EXIBIR NA TELA OS DADOS DA API
function exibirNaTela(dados){
    const produtos = dados.products
    produtos.forEach(element => {
        card.innerHTML += `
        <div class="card">
        <div class="image">
        <img src="${element.image}" alt="">
        </div>
        <div class="description">
        <h2>${element.name}</h2>
        <p>${element.description}</p>
        <p>De:R$ ${element.oldPrice} </p>
        <h3>Por:R$ ${element.price} </h3>
        <p>ou ${element.installments.count}x de R$${element.installments.value}</p>
        <button>Comprar</button>
        <div/>
        </div>`    
    });
}



// função que irá exibir erros caso ocorra
function exibirError(){
    console.log("Deu erro")
}

function transformarEmJson(response){
    return response.json()
}




// Função que faz a requisição da api

//  variavel que ira atualizar a cada click do butão adicionar mais produtos
let page = 0


function buscandoApi() {
    page++
   return fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`).then(transformarEmJson)
    .then(exibirNaTela)
    .catch(exibirError)
}
buscandoApi()


