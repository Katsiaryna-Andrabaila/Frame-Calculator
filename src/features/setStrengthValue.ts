import state from '../state/state';
import config from '../data/config.json';
import { Strength } from '../types/types';

const setStrengthValue = (event: Event) => {
  const { target } = event;
  if (target instanceof HTMLInputElement) {
    const strengthArray = config.filter((item) => item.type === 'frame');
    const selectedStrength = <Strength>strengthArray.find((item) => item.key === target.value);
    state.selectedStrength = selectedStrength;
  }
};

export default setStrengthValue;
