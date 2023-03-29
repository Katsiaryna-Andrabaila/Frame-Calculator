import state from '../state/state';

const setStrengthValue = (event: Event) => {
  const { target } = event;
  if (target instanceof HTMLInputElement) {
    state.selectedStrength = target.value;
  }
};

export default setStrengthValue;
