import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/routes';

export const App = () => {
    return <RouterProvider router={router} />;
};
