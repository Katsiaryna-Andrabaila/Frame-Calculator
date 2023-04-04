import data from '../data/data.json';
import state from '../state/state';

const drawMaterialCards = (): string => {
  const materialArray = !state.filter
    ? data.filter((item) => item.type === 'list')
    : data.filter((item) => item.type === 'list' && item.material === state.filter);
  return `
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
  `;
};

export default drawMaterialCards;
