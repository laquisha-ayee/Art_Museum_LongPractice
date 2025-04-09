import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile';
import { Navigate } from "react-router-dom";


const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();

    const gallery = galleries.find(g => g.id === parseInt(galleryId));

    
    if (!gallery) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h2>{gallery.name}</h2>
            <div className="artworks-grid">
                {gallery.objects.map(art => (
                    <ArtImageTile key={art.artId} art={art} galleryId={galleryId} />
                ))}
            </div>
        </div>
    );
};

export default GalleryView;