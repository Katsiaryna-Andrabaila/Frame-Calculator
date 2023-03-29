import state from '../state/state';

const setLeavesRequired = () => {
  const leafSquare = state.selectedMaterial.width;
  const leavesRequired = Math.ceil(state.frameSquare / leafSquare);
  state.leavesRequired = leavesRequired;
};

export default setLeavesRequired;
