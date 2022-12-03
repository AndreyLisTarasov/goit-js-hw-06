// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputFormEl = document.querySelector(`#name-input`);
const userNameEl = document.querySelector(`#name-output`);

inputFormEl.addEventListener(`input`, changeNameToValue);

function changeNameToValue(event) {
  if (event.currentTarget.value) {
    userNameEl.textContent = event.currentTarget.value;    
  } else {
    userNameEl.textContent = `Anonymous`;
  }
}
