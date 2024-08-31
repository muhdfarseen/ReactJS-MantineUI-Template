import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../components/Pages/HomePage';
import { NotFound } from '../components/Pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
