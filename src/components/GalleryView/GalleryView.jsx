import { useParams, Navigate } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile';

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams(); // Get gallery ID from the URL parameters

    // Find the gallery based on galleryId
    const gallery = galleries.find(g => g.galleryid === parseInt(galleryId)); // Use galleryid (adjust this if your data uses a different key)

    // Handle invalid gallery by redirecting to the homepage
    if (!gallery) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            {/* Display the gallery name */}
            <h2>{gallery.name}</h2>

            {/* Render artworks in a grid */}
            <div className="artworks-grid">
                {gallery.objects.map((art) => (
                    <ArtImageTile key={art.artId} art={art} galleryId={galleryId} /> // Ensure unique key from art.artId
                ))}
            </div>
        </div>
    );
};

export default GalleryView;