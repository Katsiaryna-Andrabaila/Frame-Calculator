import config from '../data/config.json';
// import data from '../data/data.json';

const drawCalculatorPage = () => {
  // const materialArray = data.filter((item) => item.type === 'list');
  const strengthArray = config.filter((item) => item.type === 'frame');
  const widthConfig = config.find((item) => item.type === 'size' && item.key === 'width');
  const heightConfig = config.find((item) => item.type === 'size' && item.key === 'height');
  return `
  <main class="main">
    <h1>Frame calculator</h1>
    <div class="wrapper">
      <section class="calculator">
        <div class="material">
          <button class="button material-button">Choose material</button>
        </div>
        <div class="width">
          <h4 class="width-header">Choose width</h4>
          <input type="range" class="width-range" min=${widthConfig?.min} max=${widthConfig?.max} />
        </div>
        <div class="height">
          <h4 class="height-header">Choose height</h4>
          <input type="range" class="height-range" min=${heightConfig?.min} max=${heightConfig?.max} />
        </div>
        <div class="strength">
          <h4 class="strength-header">Choose strength</h4>
          ${strengthArray
            .map(
              (item) =>
                `<label>
              ${item.key}
              <input type="radio" class="radio" value=${item.key} />
            </label>`
            )
            .join('')}
        </div>
        <button class="button calculate-button">Calculate</button>
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
