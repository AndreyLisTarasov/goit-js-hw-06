// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementEl = document.querySelector(`button[data-action="decrement"]`);
const incrementEl = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);

const counterValue = {
  value: 0,

  changeValueUp() {
    this.value += 1;
  },

  changeValueDown() {
    this.value -= 1;
  },
};

decrementEl.addEventListener(`click`, () => {
  counterValue.changeValueDown();
  valueEl.textContent = counterValue.value;
});

incrementEl.addEventListener(`click`, () => {
  counterValue.changeValueUp();
  valueEl.textContent = counterValue.value;
});
