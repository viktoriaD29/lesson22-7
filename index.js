const inputElem = document.querySelector('.text-input');
function handleChange(event) {
  console.log(event.target.value)
}
inputElem.addEventListener('change', handleChange)