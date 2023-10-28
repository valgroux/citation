const textQuote = document.querySelector('.quote')
const idQuote = document.querySelector('.advice span')
const changeQuote = document.querySelector('.container__button')


function getQuote(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if(!response.ok){
            throw new Error (`Erreur réseau sur l'API`)
        }
        return response.json();
    })
    .then(data => {
        textQuote.textContent = `${data.slip.advice}`
        idQuote.textContent = `${data.slip.id}`
    })
    .catch(error => {
        console.log('Il y a un problème', error.message)
    })
}

getQuote();

changeQuote.addEventListener('click', getQuote)