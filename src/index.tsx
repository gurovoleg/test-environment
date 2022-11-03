import { createRoot } from 'react-dom/client';
import { App } from 'components';
import './styles/global.css';
// import { postcodes } from './test';

// console.log(postcodes);

// const a = postcodes.replace(/\s/g, '');
// const b = postcodes.match(/.{3,4}\s.{3}/g);
// console.log(b);

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(<App />);
