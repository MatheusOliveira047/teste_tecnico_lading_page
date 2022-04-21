
//validando o formulario de cadastro 
const button = document.querySelector("#button")
button.addEventListener('click',(event)=>{
    event.preventDefault()
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const cpf = document.querySelector("#cpf")
    const sexo = document.querySelectorAll('input[name="radiosex"]')
    const radios = document.querySelector('.error_radios')
    let temErro = false
    
       if(!sexo[0].checked && !sexo[1].checked){
        temErro = true
            radios.innerText = 'Selecione o sexo'     
       }else{
           radios.innerText = ''        
    }

    if(!name.value){
        temErro = true
        name.classList.add('input_error')    
        let span =name.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    }else{
        
        name.classList.remove('input_error')    
        let span =name.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!email.value){
        temErro = true
        email.classList.add('input_error')    
        let span =email.nextSibling.nextSibling
        span.innerText = 'Digite o email corretamente'
    }else{
        
        email.classList.remove('input_error')    
        let span =email.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!cpf.value){
        temErro = true
        cpf.classList.add('input_error')    
        let span = cpf.nextSibling.nextSibling
        span.innerText = 'Digite o cpf corretamente'
    }else{
        cpf.classList.remove('input_error')    
        let span =cpf.nextSibling.nextSibling
        span.innerText = ''
    }

    
    

    
    
    if(temErro === false){
        const form_help = document.querySelector('.form_help')
        const cadastro_concluido = document.querySelector('.cadastro_concluido')
        form_help.style.display = 'none'
        cadastro_concluido.style.display = 'block'
    }

})


const button_convite = document.querySelector("#button_convite")
button_convite.addEventListener('click',(convit)=>{
    convit.preventDefault()

    const name_convidado = document.querySelector("#nome_amigo")
    const email_convidado = document.querySelector("#email_amigo")
    let temErro_convidado = false

    if(!name_convidado.value){
        temErro_convidado = true
        name_convidado.classList.add('input_error')    
        let span =name_convidado.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    }else{
        
        name_convidado.classList.remove('input_error')    
        let span =name_convidado.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!email_convidado.value){
        temErro_convidado = true
        email_convidado.classList.add('input_error')    
        let span =email_convidado.nextSibling.nextSibling
        span.innerText = 'Digite o email corretamente'
    }else{
        
        email_convidado.classList.remove('input_error')    
        let span =email_convidado.nextSibling.nextSibling
        span.innerText = ''
    }



    if(temErro_convidado === false){
        const form_convite = document.querySelector('.convite')
        const cadastro_concluido_convidado = document.querySelector('.cadastro_concluido_convidado')
        form_convite.style.display = 'none'
        cadastro_concluido_convidado.style.display = 'block'
    }

})