import drawMaterialCards from '../layouts/drawMaterialCard';
import togglePopup from './togglePopup';
import chooseMaterial from './chooseMaterial';
import filterMaterials from './filterMaterials';
import state from '../state/state';

const openMaterialPopup = () => {
  document.querySelector('.shadow')?.remove();
  document.querySelector('.popup')?.remove();

  const popup = document.createElement('div');
  popup.classList.add('popup');

  const shadow = document.createElement('div');
  shadow.classList.add('shadow');
  document.body.append(shadow, popup);

  popup.classList.add('popup-active');
  shadow.classList.add('shadow-active');
  shadow.addEventListener('click', togglePopup);

  const close = document.createElement('img');
  close.classList.add('close-sign');
  close.src = '../assets/icons/close.svg';
  close.addEventListener('click', togglePopup);

  const plasticBtn = document.createElement('button');
  plasticBtn.classList.add('button', 'plastic-button');
  plasticBtn.textContent = 'PLASTIC';
  plasticBtn.disabled = state.filter === 'plastic';

  const metalBtn = document.createElement('button');
  metalBtn.classList.add('button', 'metal-button');
  metalBtn.textContent = 'METAL';
  metalBtn.disabled = state.filter === 'metal';

  const cardsWrapper = document.createElement('div');
  cardsWrapper.classList.add('cards-wrapper');
  cardsWrapper.innerHTML = drawMaterialCards();

  popup.append(close, plasticBtn, metalBtn, cardsWrapper);
  plasticBtn.addEventListener('click', (event) => filterMaterials(event, 'plastic'));
  metalBtn.addEventListener('click', (event) => filterMaterials(event, 'metal'));

  const cards = document.querySelectorAll('.material-card');
  cards.forEach((item) => item.addEventListener('click', togglePopup));
  cards.forEach((item) => item.addEventListener('click', (event) => chooseMaterial(event)));
};

export default openMaterialPopup;
