import UI from '../constants/constants';
import state from '../state/state';
import data from '../data/data.json';
import { Fix } from '../types/types';

const drawTable = () => {
  document.querySelector('.square-info')?.remove();
  document.querySelector('.ceil-info')?.remove();
  document.querySelector('.price-info')?.remove();

  const table = document.querySelector('.table');
  const fixItem = <Fix>data.find((item) => item.type === 'fix');
  if (table instanceof HTMLTableElement) {
    table.innerHTML = `
      <caption>${UI.tableHeader}</caption>
      <tr>
        <th>${UI.tableMainColumn}</td>
        <th>${UI.tableItems}</th>
        <th>${UI.tableQuantity}</th>
        <th>${UI.tableSum}</th>
      </tr>
      <tr>
        <th>${state.selectedMaterial.name}</td>
        <td>${state.selectedMaterial.unit}</th>
        <td>${state.leavesRequired}</th>
        <td>${state.leavesRequired * state.selectedMaterial.price}</th>
      </tr>
      <tr>
        <th>${state.pipesRequired[0][0].name} / ${state.pipesRequired[1][0].name}</td>
        <td>${state.pipesRequired[0][0].unit} / ${state.pipesRequired[1][0].unit}</th>
        <td>${state.pipesRequired[0][1]} / ${state.pipesRequired[1][1]}</th>
        <td>${state.pipesRequired[0][0].price * state.pipesRequired[0][1]} / ${
      state.pipesRequired[1][0].price * state.pipesRequired[1][1]
    }</th>
      </tr>
      <tr>
        <th>${fixItem.name}</td>
        <td>${fixItem.unit}</th>
        <td>${state.fixRequired}</th>
        <td>${Math.trunc(fixItem.price * state.fixRequired)}</th>
      </tr>
    `;

    const square = document.createElement('p');
    square.classList.add('square-info');
    square.textContent = `${UI.frameSquare}${state.frameSquare} м2`;

    const ceil = document.createElement('p');
    ceil.classList.add('ceil-info');
    ceil.textContent = `${UI.ceilSize}${state.ceilSize}`;

    const price = document.createElement('p');
    price.classList.add('price-info');
    price.textContent = `${UI.totalSum}${state.priceTotal}`;

    table.before(square, ceil);
    table.after(price);
  }
};

export default drawTable;
