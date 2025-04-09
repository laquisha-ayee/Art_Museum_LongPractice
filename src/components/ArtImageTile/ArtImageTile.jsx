import { Link } from 'react-router-dom';

const ArtImageTile = ({ art, galleryId }) => {
    return (
        <Link to={`/galleries/${galleryId}/art/${art.artId}`}>
            <img src={art.imageSrc} alt={art.title} />
        </Link>
    );
};

export default ArtImageTile;


