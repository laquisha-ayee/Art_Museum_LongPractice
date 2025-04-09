import { useParams, Link } from 'react-router-dom';

const ArtDescription = ({ galleries }) => {
    const { galleryId, artId } = useParams();
    console.log(`Gallery ID: ${galleryId}, Art ID: ${artId}`);
    console.log('All Galleries:', galleries);

    // Find the gallery using the correct key
    const gallery = galleries.find(g => g.galleryid === parseInt(galleryId));
    console.log('Found Gallery:', gallery);

    if (gallery) {
        console.log('Gallery Objects:', gallery.objects);
        console.log('Full First Artwork Object:', JSON.stringify(gallery.objects[0], null, 2)); // Log all fields
    }

    // Find the artwork using the correct key
    const artwork = gallery?.objects.find(a => a.objectid === parseInt(artId)); // Match against `objectid`
    console.log('Found Artwork:', artwork);

    if (!gallery || !artwork) {
        return <h2>Artwork not found</h2>;
    }

    return (
        <div>
            <Link to="..">Back to Gallery</Link>
            <h2>
                <a href={artwork.url} target="_blank" rel="noopener noreferrer">
                    {artwork.title}
                </a>
            </h2>
            <p><strong>Description:</strong> {artwork.description}</p>
            <p><strong>Credit:</strong> {artwork.creditline}</p>
            <p><strong>Technique:</strong> {artwork.technique}</p>
            <div className="images">
                {artwork.images.map((image, index) => (
                    <img key={index} src={image.baseimageurl} alt={`${artwork.title} - ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default ArtDescription;
