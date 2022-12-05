// Напиши скрипт, который реагирует на изменение значения input#font-size-control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const fontSizeControlEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`)

fontSizeControlEl.setAttribute(`value`, `16`);

fontSizeControlEl.addEventListener(`input`, onChangingTextSize)

function onChangingTextSize (event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}