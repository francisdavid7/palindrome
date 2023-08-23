const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('save-btn');
const outPutEl = document.getElementById('output-el');

const palindrome = () => {
    let inputText = inputEl.value;
    let alphaNemuricOnly = inputText.toLowerCase().match(/[a-z0-9]/g).join('');

    outPutEl.innerHTML = alphaNemuricOnly;

    let reversed = alphaNemuricOnly.split('').reverse().join('');

    if (reversed === alphaNemuricOnly) {
        outPutEl.innerHTML = `Yeah, It's a palindrome`
        outPutEl.classList.toggle('success');
        outPutEl.classList.remove('error');
    } else {
        outPutEl.innerHTML = `Not a palindrome`
        outPutEl.classList.toggle('error');
        outPutEl.classList.remove('success');
    }
}

saveBtn.addEventListener('click', () => {
    palindrome();
});
