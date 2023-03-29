import state from '../state/state';
import data from '../data/data.json';
import { Pipe } from '../types/types';

const setPipesRequired = () => {
  const pipesArray = <Pipe[]>data.filter((item) => item.type === 'pipe');

  pipesArray.forEach((item) => {
    const { step } = state.selectedStrength;
    const length = Number(state.selectedLength);
    const width = Number(state.selectedWidth);

    const lengthPipesUnits = Math.ceil(length / (step + item.width / 1000)) + 1;
    const lengthPipesRequired = lengthPipesUnits * width;
    const ceilLength = (length - (item.width / 1000) * lengthPipesUnits) / (lengthPipesUnits - 1);

    const widthPipesUnits = Math.ceil(width / (step + item.width / 1000)) + 1;
    const widthPipesRequired = widthPipesUnits * length;
    const ceilWidth = (width - (item.width / 1000) * widthPipesUnits) / (widthPipesUnits - 1);

    const pipesRequired = lengthPipesRequired + widthPipesRequired;
    state.pipesRequired.push([item, pipesRequired]);
    state.ceilSize = `${ceilLength.toFixed(2)}x${ceilWidth.toFixed(2)}м`;
    console.log(lengthPipesUnits, widthPipesUnits, state.ceilSize);
  });
};

export default setPipesRequired;
