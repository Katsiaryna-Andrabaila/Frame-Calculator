import UI from '../constants/constants';
import state from '../state/state';

const addToCart = (node: Node, price: string) => {
  state.cartItems.push(price);
  const splitted = state.cartItems.map((item) => item.split(' / ').map((el) => Number(el)));

  const totalPriceNarrowPipe = splitted.map((el) => el[0]).reduce((item, acc) => item + acc);
  const totalPriceWidePipe = splitted.map((el) => el[1]).reduce((item, acc) => item + acc);

  const cart = document.querySelector('.cart');
  cart?.classList.remove('hidden');

  const cartSum = document.createElement('h4');
  cartSum.classList.add('cart-sum');
  cartSum.textContent = `${UI.cartSum}${totalPriceNarrowPipe} / ${totalPriceWidePipe}`;

  cart?.append(cartSum, node);
  const prevSum = document.querySelector('.cart-sum');
  prevSum?.replaceWith(cartSum);

  document.querySelector('.cart')?.classList.remove('hidden');
  document.querySelector('.cart-header')?.classList.remove('hidden');
};

export default addToCart;
