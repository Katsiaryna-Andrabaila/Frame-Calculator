import UI from '../constants/constants';
import state from '../state/state';
import data from '../data/data.json';
import { Fix } from '../types/types';
import addToCart from '../features/addToCart';

const drawTable = () => {
  document.querySelector('.add-button')?.remove();

  const table = document.querySelector('.table');
  const fixItem = <Fix>data.find((item) => item.type === 'fix');
  if (table instanceof HTMLTableElement) {
    table.innerHTML = `
      <tr>
        <td colspan="4" class="info-row">${UI.frameSquare}${state.frameSquare} м2</td>
      </tr>
      <tr>
        <td colspan="4" class="info-row">${UI.ceilSize}${state.ceilSize}</td>
      </tr>
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
        <td>${state.pipesRequired[0][0].unit}</th>
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
      <tr>
        <td colspan="4" class="info-row">${UI.totalSum}${state.priceTotal}</td>
      </tr>
    `;

    const clone = table.cloneNode(true);

    const addBtn = document.createElement('button');
    addBtn.classList.add('button', 'add-button');
    addBtn.textContent = UI.addBtn;
    addBtn.addEventListener('click', () => addToCart(clone, state.priceTotal));

    table.after(addBtn);
  }
};

export default drawTable;
