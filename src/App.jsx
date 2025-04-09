import harvardArt from './data/harvardArt';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import { Outlet } from 'react-router-dom';
import GalleryView from './components/GalleryView/GalleryView';




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
    children: [
      {
        path: "/", 
        element: (
          <>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.
            </p>
          </>
        ),
      },
      {
        path: "/galleries/:galleryId",
        element: <GalleryView />,
      },
      {
        path: "*",
        element: <h2>Page Not Found</h2>,
      },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;