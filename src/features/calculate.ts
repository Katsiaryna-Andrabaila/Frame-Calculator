import state from '../state/state';

const calculate = () => {
  const frameSquare = Number(state.selectedWidth) * Number(state.selectedLength);
  const leafSquare = state.selectedMaterial.width;
  const leavesRequired = Math.ceil(frameSquare / leafSquare);
};

export default calculate;
