import { State } from '../types/types';

const state: State = {
  materialId: '',
  selectedMaterial: {
    id: 0,
    type: '',
    name: '',
    material: '',
    unit: '',
    width: 0,
    price: 0,
    image: '',
  },
  selectedWidth: '',
  selectedLength: '',
  selectedStrength: {
    type: '',
    key: '',
    name: '',
    step: 0,
  },
  leavesRequired: 0,
  pipesRequired: [],
  frameSquare: 0,
  ceilSize: '',
  fixRequired: 0,
  priceTotal: '',
  cartItems: [],
  filter: '',
};

export default state;
