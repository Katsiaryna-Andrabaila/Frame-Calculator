import './styles/style.scss';
import drawCalculatorPage from './pages/drawCalculatorPage';

const App = () => {
  document.body.innerHTML = drawCalculatorPage();
};

App();
