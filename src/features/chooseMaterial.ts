import state from '../state/state';
import data from '../data/data.json';

const chooseMaterial = (event: Event) => {
  const materialArray = data.filter((item) => item.type === 'list');

  const { currentTarget } = event;

  if (currentTarget instanceof HTMLDivElement) {
    const materialId = currentTarget.getAttribute('data-id');

    if (materialId) {
      state.materialId = materialId;
    }

    const materialBlock = document.querySelector('.material');
    const selectedMaterial = materialArray.find((item) => item.id.toString() === state.materialId);

    if (selectedMaterial && selectedMaterial.image) {
      state.selectedMaterial = selectedMaterial;
      const selectedMaterialBlock = document.createElement('div');
      selectedMaterialBlock.classList.add('selected-material');
      selectedMaterialBlock.textContent = selectedMaterial.name;

      const selectedMaterialImage = document.createElement('img');
      selectedMaterialImage.classList.add('selected-image');
      selectedMaterialImage.src = selectedMaterial.image;

      selectedMaterialBlock.append(selectedMaterialImage);
      materialBlock?.append(selectedMaterialBlock);
    }
  }
};

export default chooseMaterial;
