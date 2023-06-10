import state from '../state/state';

const setFrameSquare = () => {
  const frameSquare = Number(state.selectedWidth) * Number(state.selectedLength);
  state.frameSquare = frameSquare;
};

export default setFrameSquare;
