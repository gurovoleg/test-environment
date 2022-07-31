import { createRoot } from 'react-dom/client';
import { App } from './components';
import './styles/global.css';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
