import state from '../state/state';
import calculate from './calculate';
import openMaterialPopup from './openMaterialPopup';
import setRangeValue from './setRangeValue';
import setStrengthValue from './setStrengthValue';

const addFunctionality = () => {
  const materialBtn = document.querySelector('.material-button');
  materialBtn?.addEventListener('click', openMaterialPopup);

  const widthRange = <HTMLInputElement>document.querySelector('.width-range');
  widthRange?.addEventListener('input', (event) => setRangeValue(event, 'width'));
  state.selectedWidth = widthRange.value;

  const lengthRange = <HTMLInputElement>document.querySelector('.length-range');
  lengthRange?.addEventListener('input', (event) => setRangeValue(event, 'length'));
  state.selectedLength = lengthRange.value;

  const strength = document.querySelector('.strength');
  strength?.addEventListener('change', setStrengthValue);

  const calculateBtn = document.querySelector('.calculate-button');
  calculateBtn?.addEventListener('click', calculate);
};

export default addFunctionality;
