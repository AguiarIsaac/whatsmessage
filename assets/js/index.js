const tel = document.getElementById('tel') // Seletor do campo de telefone
const message = document.getElementById('message')
const button = document.getElementById('btn')
const error = document.getElementById('errorNumber')

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, "")
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
  tel.value = valor // Insere o(s) valor(es) no campo
}


function getNumberAndMessage() {
  if(tel.value == '' || tel.value.length < 15) {
    error.classList.toggle('active')

  } else {
      const telFormated = tel.value.replace(/[\(\)\-\s]/g, '')

      var messageFormated = ''
      
      if(message.value != '') {
        messageFormated = message.value.replaceAll(' ', '%20')
      }
      
      const linkWicthMessage = `https://wa.me//55${telFormated}?text=${messageFormated}` 
      const linkWichoutMessage = `https://wa.me//55${telFormated}`
      
      messageFormated != '' ? window.location.href = linkWicthMessage : window.location.href = linkWichoutMessage
  }
}

button.addEventListener('click', getNumberAndMessage)
