import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Flowbite } from 'flowbite-react';
import 'flowbite/dist/flowbite.css';
import './index.css';
import App from './App.jsx';

// This is a workaround for flowbite-react v0.12.16
const FlowbiteWrapper = ({ children }) => {
  return children;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Flowbite>
      <App />
    </Flowbite>
  </StrictMode>
);
