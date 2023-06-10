import './styles/style.scss';
import drawCalculatorPage from './pages/drawCalculatorPage';
import addFunctionality from './features/addFunctionality';

const app = () => {
  document.body.innerHTML = drawCalculatorPage();
  addFunctionality();
};

app();
