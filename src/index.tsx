import { createRoot } from 'react-dom/client';
import { App } from 'components';
import './styles/global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(<App />);

// master test commit 1
// test commit 2
// test commit 3
// test commit 4

// test commit 5
// test commit 6
