import setFrameSquare from './setFrameSquare';
import setLeavesRequired from './setLeavesRequired';
import setPipesRequired from './setPipesRequired';
import setFixRequired from './setFixRequired';
import state from '../state/state';
import UI from '../constants/constants';
import setTotalSum from './setTotalSum';
import drawTable from '../layouts/drawTable';

const calculate = (event: Event) => {
  state.pipesRequired.length = 0;

  const { target } = event;
  if (target instanceof HTMLButtonElement) {
    document.querySelector('.error-message')?.remove();

    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');

    if (!state.materialId && !state.selectedStrength.step) {
      errorMessage.textContent = UI.complexError;
      target.after(errorMessage);
      return;
    }
    if (!state.materialId) {
      errorMessage.textContent = UI.materialError;
      target.after(errorMessage);
      return;
    }
    if (!state.selectedStrength.step) {
      errorMessage.textContent = UI.strengthError;
      target.after(errorMessage);
      return;
    }

    setFrameSquare();
    setLeavesRequired();
    setPipesRequired();
    setFixRequired();
    setTotalSum();
    drawTable();
  }
};

export default calculate;
