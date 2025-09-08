import { createBrowserRouter } from "react-router-dom";

// Application Layout Componnents
import ApplicationLayout from '@/apps/ApplicationLayout';

// Application routes
import siteRoutes from './siteRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ApplicationLayout />,
        children: siteRoutes
    }
]);

export default router;