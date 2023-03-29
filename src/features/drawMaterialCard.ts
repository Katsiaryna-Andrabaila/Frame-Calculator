import data from '../data/data.json';

const drawMaterialCards = (): string => {
  const materialArray = data.filter((item) => item.type === 'list');
  return `
  <div class="cards-wrapper">
    ${materialArray
      .map(
        (item) =>
          `<div class="material-card" data-id=${item.id}>
            <img src=${item.image} class="material-image">
            <h4 class="card-item material-header">${item.name}</h4>
            <p class="card-item">${item.material}</p>
            <p class="card-item">Width: ${item.width}</p>
            <p class="card-item">Price: ${item.price}</p>
        </div>`
      )
      .join('')}
  </div>
  `;
};

export default drawMaterialCards;
