// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.

const inputEl = document.querySelector(`#validation-input`);
const valueAtribute = inputEl.getAttribute(`data-length`);

function changeClass(name) {
  inputEl.classList.add(name);
}

function removeClass(name) {
  inputEl.classList.remove(name);
}

function checkingEnteredValue(event) {
  event.currentTarget.value.length === Number(valueAtribute)
    ? changeClass(`valid`) || removeClass(`invalid`)
    : changeClass(`invalid`);
}

inputEl.addEventListener(`blur`, checkingEnteredValue);
