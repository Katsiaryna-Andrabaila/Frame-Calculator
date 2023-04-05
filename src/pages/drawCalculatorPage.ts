import UI from '../constants/constants';
import config from '../data/config.json';

const drawCalculatorPage = () => {
  const strengthArray = config.filter((item) => item.type === 'frame');
  const widthConfig = config.find((item) => item.type === 'size' && item.key === 'width');
  const lengthConfig = config.find((item) => item.type === 'size' && item.key === 'length');

  return `
  <header class="header">
    <h1 class="page-header">${UI.pageHeader}</h1>
  </header>
  <main class="main">
    <div class="calculator-wrapper">
      <section class="calculator">
        <div class="option material">
          <button class="button material-button">${UI.chooseMaterialBtn}</button>
        </div>
        <div class="option width">
          <h4 class="option-header">${UI.chooseWidth}</h4>
          <span class="width-range-value">${widthConfig?.min}</span>
          <input type="range"
            class="range width-range"
            min=${widthConfig?.min}
            max=${widthConfig?.max}
            value=${widthConfig?.min} />
          <div class="range-limits">
            <span>${widthConfig?.min}</span>
            <span>${widthConfig?.max}</span>
          </div>
        </div>
        <div class="option length">
          <h4 class="option-header">${UI.chooseLength}</h4>
          <span class="length-range-value">${lengthConfig?.min}</span>
          <input type="range"
          class="range length-range"
          min=${lengthConfig?.min}
          max=${lengthConfig?.max}
          value=${lengthConfig?.min} />
          <div class="range-limits">
            <span>${lengthConfig?.min}</span>
            <span>${lengthConfig?.max}</span>
          </div>
        </div>
        <div class="option strength">
          <h4 class="option-header">${UI.chooseStrength}</h4>
          <div class="radio-wrapper">
            ${strengthArray
              .map(
                (item) =>
                  `<label class="radio-label">
                    <input type="radio" class="radio" value=${item.key} name="strength" />
                    <span>${item.key}</span>
                  </label>`
              )
              .join('')}
          </div>
        </div>
        <div class="calculate-wrapper">
          <button class="button calculate-button">${UI.calculateBtn}</button>
        </div>
      </section>
      <section class="result">
        <div class="result-table">
          <h3 class="result-header hidden">${UI.resultHeader}</h3>
          <table class="table"></table>
        </div>
      </section>
    </div>
    <div class="cart hidden">
      <h3 class="cart-header hidden">${UI.cartHeader}</h3>
    </div> 
  </main>
`;
};

export default drawCalculatorPage;
