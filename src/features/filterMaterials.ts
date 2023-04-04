import drawMaterialCards from '../layouts/drawMaterialCard';
import state from '../state/state';
import togglePopup from './togglePopup';
import chooseMaterial from './chooseMaterial';

const filterMaterials = (event: MouseEvent, option: string) => {
  const { target } = event;
  if (target instanceof HTMLButtonElement) {
    state.filter = option;
    target.classList.add('disabled');
    target.disabled = true;

    const metalBtn = <HTMLButtonElement>document.querySelector('.metal-button');
    const plasticBtn = <HTMLButtonElement>document.querySelector('.plastic-button');
    if (target.classList.contains('plastic-button')) {
      metalBtn.classList.remove('disabled');
      metalBtn.disabled = false;
    } else {
      plasticBtn.classList.remove('disabled');
      plasticBtn.disabled = false;
    }

    const cardsWrapper = <HTMLDivElement>document.querySelector('.cards-wrapper');
    cardsWrapper.innerHTML = drawMaterialCards();
    const cards = document.querySelectorAll('.material-card');
    cards.forEach((item) => item.addEventListener('click', togglePopup));
    cards.forEach((item) => item.addEventListener('click', (e) => chooseMaterial(e)));
  }
};

export default filterMaterials;
