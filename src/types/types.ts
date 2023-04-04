export type MaterialCard = {
  id: number;
  type: string;
  name: string;
  material: string;
  unit: string;
  width: number;
  price: number;
  image: string;
};

export type Strength = {
  type: string;
  key: string;
  name: string;
  step: number;
};

export type Pipe = Omit<MaterialCard, 'material' | 'image'>;

export type Fix = Omit<Pipe, 'width'>;

export type FixConfig = {
  type: string;
  key: string;
  name: string;
  value: number;
};

export type State = {
  materialId: string;
  selectedMaterial: MaterialCard;
  selectedWidth: string;
  selectedLength: string;
  selectedStrength: Strength;
  leavesRequired: number;
  pipesRequired: Array<[Pipe, number]>;
  frameSquare: number;
  ceilSize: string;
  fixRequired: number;
  priceTotal: string;
  cartItems: string[];
  filter: string;
};
