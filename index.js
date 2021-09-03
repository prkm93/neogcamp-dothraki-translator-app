const textInput = document.querySelector('#text-input');
const btnTranslate = document.querySelector('#btn-translate');
const dothrakiConversion = document.querySelector('#dothraki-conversion');
const serverURL = 'https://api.funtranslations.com/translate/dothraki.json';

btnTranslate.addEventListener('click', clickHandler)

function clickHandler() {
    const inputText = textInput.value; // taking input

    // calling server 
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => dothrakiConversion.textContent = json.contents.translated) //output
    .catch(error => console.error(error))
}


function getTranslationURL(text) {
    return (`${serverURL}?text=${encodeURI(text)}`);
}