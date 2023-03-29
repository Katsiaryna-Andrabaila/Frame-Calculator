import drawMaterialCards from './drawMaterialCard';
import togglePopup from './togglePopup';
import chooseMaterial from './chooseMaterial';

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

  popup.append(close);

  popup.innerHTML = drawMaterialCards();

  const cards = document.querySelectorAll('.material-card');
  cards.forEach((item) => item.addEventListener('click', togglePopup));
  cards.forEach((item) => item.addEventListener('click', (event) => chooseMaterial(event)));
};

export default openMaterialPopup;
