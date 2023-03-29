import UI from '../constants/constants';
import config from '../data/config.json';

const drawCalculatorPage = () => {
  const strengthArray = config.filter((item) => item.type === 'frame');
  const widthConfig = config.find((item) => item.type === 'size' && item.key === 'width');
  const lengthConfig = config.find((item) => item.type === 'size' && item.key === 'length');

  return `
  <main class="main">
    <h1>${UI.pageHeader}</h1>
    <div class="wrapper">
      <section class="calculator">
        <div class="material">
          <button class="button material-button">${UI.chooseMaterialBtn}</button>
        </div>
        <div class="width">
          <h4 class="width-header">${UI.chooseWidth}</h4>
          <div class="range-limits">
            <span>${widthConfig?.min}</span>
            <span>${widthConfig?.max}</span>
          </div>
          <input type="range"
            class="width-range"
            min=${widthConfig?.min}
            max=${widthConfig?.max}
            value=${widthConfig?.min} />
          <span class="width-range-value">${widthConfig?.min}</span>
        </div>
        <div class="length">
          <h4 class="length-header">${UI.chooseLength}</h4>
          <div class="range-limits">
            <span>${lengthConfig?.min}</span>
            <span>${lengthConfig?.max}</span>
          </div>
          <input type="range"
          class="length-range"
          min=${lengthConfig?.min}
          max=${lengthConfig?.max}
          value=${lengthConfig?.min} />
          <span class="length-range-value">${lengthConfig?.min}</span>
        </div>
        <div class="strength">
          <h4 class="strength-header">${UI.chooseStrength}</h4>
          ${strengthArray
            .map(
              (item) =>
                `<label>
                  ${item.key}
                  <input type="radio" class="radio" value=${item.key} name="strength" />
                </label>`
            )
            .join('')}
        </div>
        <button class="button calculate-button">${UI.calcilateBtn}</button>
      </section>
      <section class="result">
        <table class="table"></table>
        <div class="cart"></div>
      </section>
    </div>
  </main>
`;
};

export default drawCalculatorPage;
