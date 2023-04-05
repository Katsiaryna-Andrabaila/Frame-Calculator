import state from '../state/state';
import data from '../data/data.json';
import { Fix } from '../types/types';

const setTotalSum = () => {
  const leavesSum = state.leavesRequired * state.selectedMaterial.price;

  const pipeSum: number[] = [];
  state.pipesRequired.forEach((item) => {
    pipeSum.push(item[0].price * item[1]);
  });

  const fixItem = <Fix>data.find((item) => item.type === 'fix');
  const fixSum = fixItem.price * state.fixRequired;

  state.priceTotal = pipeSum.map((item) => `${leavesSum + item + fixSum}`).join(' / ');
};

export default setTotalSum;
