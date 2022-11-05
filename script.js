
const inputText = document.querySelector('.textAria')
const counter = document.querySelector('.counter')
// console.log(inputText.value);
//evenimentul input ne transmite ceea ce noi tapam
// crreea o functie anomima cu even input
inputText.addEventListener('input', function() {

    //primit valoarea din text Area
    let valText = inputText.value
    // console.log(valText);


    let letters = valText.length // calcul num de caractere
    
    // console.log(letters);
    let wordsCount = valText.split(/\s+/).length // metoda split
    // pentru a transforma cuvintele in array
    
    let parag = valText.replace(/\n$/gm, '').split(/\n/).length
    // pentru a calcula numara num de paragrafe
  
    let readingTime = (wordsCount * 60)/300
    // pentru a calcula vireza de citire
    showResult(letters, wordsCount, parag, readingTime);  // functia este chemata in alta functie
    //cu param variabilei letters

})

function showResult(letters, wordsCount, parag, readingTime) {
    //cu ajutorul operatorului ternar am creat o verificare 
    // ca daca nu este tapat nimic sa afiseze zero
    let caractVerify = (letters == undefined) ? 0 : ' '
    // console.log(caractVerify);
    let counterText = `
    <div class="letters">
        <span class='rezult'>Characters:</span>
        <span class='rezultValue'>${letters || caractVerify};</span>    
    </div>
    <div class='words'>
        <span class='rezult'>Total words:</span>
        <span class='rezultValue'>${wordsCount || caractVerify}</span>
    </div>
    <div class='parag'>
        <span class='rezult'>Paragraphs:</span>
        <span class='rezultValue'>${parag || caractVerify}</span>
    </div>
    <div class='reading'>
        <span class='rezult'>Reading Time:</span>
        <span class='rezultValue'>${readingTime || caractVerify} s</span>
    </div>
`
//${letters || caractVerify} am introdus intro inegrare doua variavile
// cu ajutorul operatorului logic sau

counter.innerHTML = counterText
}
//functia este chemata ca sa afiseze structura html
showResult();