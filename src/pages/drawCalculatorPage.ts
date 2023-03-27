const drawCalculatorPage = () =>
  `
  <main class="main">
    <h1>Frame calculator</h1>
    <div class="wrapper">
      <section class="calculator">
        <div class="material">
          <button class="button material-button">Choose material</button>
        </div>
        <div class="width">
          <h4 class="width-header">Choose width</h4>
          <input type="range" class="width-range" />
        </div>
        <div class="height">
          <h4 class="height-header">Choose height</h4>
          <input type="range" class="height-range" />
        </div>
        <div class="strength">
          <h4 class="strength-header">Choose strength</h4>
          <label>
            <input type="radio" class="radio" value="light" />
          </label>
          <label>
            <input type="radio" class="radio" value="standard" />
          </label>
          <label>
            <input type="radio" class="radio" value="strong" />
          </label>
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

export default drawCalculatorPage;
