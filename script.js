// javascript

const textarea = document.querySelector('#input');
const charCount = document.querySelector('#charCount');

textarea.addEventListener('input', function () {
  charCount.textContent = textarea.value.length;
});