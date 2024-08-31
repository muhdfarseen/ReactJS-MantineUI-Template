import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import '@mantine/core/styles.css';
import './index.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
    <MantineProvider>
        <App />
    </MantineProvider>
);
