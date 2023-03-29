import state from '../state/state';

const setRangeValue = (event: Event, key: string) => {
  const { target } = event;
  const value = document.querySelector(`.${key}-range-value`);
  if (target instanceof HTMLInputElement && value) {
    value.textContent = target.value;
    if (key === 'width') {
      state.selectedWidth = target.value;
    } else {
      state.selectedLength = target.value;
    }
  }
};

export default setRangeValue;
