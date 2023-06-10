import state from '../state/state';
import config from '../data/config.json';
import { FixConfig } from '../types/types';

const setFixRequired = () => {
  const fixConfig = <FixConfig>config.find((item) => item.value && item.key === state.selectedMaterial.material);
  const fixRequired = fixConfig.value * state.frameSquare;
  state.fixRequired = fixRequired;
};

export default setFixRequired;
