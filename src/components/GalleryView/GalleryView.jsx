import { useParams } from 'react-router-dom';

function GalleryView({ galleries }) {
  const { galleryId } = useParams();

  const gallery = galleries.find(
    (gallery) => gallery.id === Number(galleryId)
  );

  
  console.log('Gallery ID:', galleryId);
  console.log('Gallery:', gallery);

  if (!gallery) {
    return <h2>Gallery not found!</h2>;
  }

  return (
    <div>
      <h1>Gallery Details</h1>
      <h2>{gallery.name}</h2>
    </div>
  );
}

export default GalleryView;
