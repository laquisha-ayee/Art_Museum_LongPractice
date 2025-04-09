import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView/GalleryView';
import ArtDescription from './components/ArtDescription/ArtDescription';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function PageMissing() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        console.log(`${error.status} ${error.statusText}: ${error.data}`);
    }
    return <h2>Page Not Found</h2>;
}

function Layout() {
    return (
        <div className="page-wrapper">
            <GalleryNavigation galleries={harvardArt.records} /> {/* Navigation bar */}
            <main>
                <Outlet /> {/* Renders child routes */}
            </main>
        </div>
    );
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <PageMissing />, // Top-level error handling
        children: [
            {
                path: "/",
                element: (
                    <>
                        <h2>Harvard Art Museum</h2>
                        <p>Please select a gallery from the navigation bar.</p>
                    </>
                ),
            },
            {
                path: "/galleries/:galleryId",
                errorElement: <PageMissing />, // Gallery-level error handling
                children: [
                    {
                        index: true, // Default view for galleries/:galleryId
                        element: <GalleryView galleries={harvardArt.records} />,
                    },
                    {
                        path: "art/:artId", // Nested route for art details
                        element: <ArtDescription galleries={harvardArt.records} />,
                    },
                    {
                        path: "*", // Catch-all for invalid child routes
                        element: <PageMissing />,
                    },
                ],
            },
            {
                path: "*", // Catch-all for invalid paths at the root level
                element: <PageMissing />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
