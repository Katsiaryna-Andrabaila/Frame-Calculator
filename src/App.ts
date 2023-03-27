import './styles/style.scss';
import i18next from 'i18next';
import en from './data/en.json';
import ru from './data/ru.json';
import state from './state/state';

const router = async () => {
  i18next.init({
    fallbackLng: 'en',
    lng: state.language,
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
  });
};

router();
