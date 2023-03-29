import './styles/style.scss';
import drawCalculatorPage from './pages/drawCalculatorPage';
import addFunctionality from './features/addFunctionality';

const App = () => {
  document.body.innerHTML = drawCalculatorPage();
  addFunctionality();
};

App();
