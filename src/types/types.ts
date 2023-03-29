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

export type State = {
  materialId: string;
  selectedMaterial: MaterialCard;
  width: string;
  length: string;
  strength: string;
};
