import { NavLink } from 'react-router-dom';

function GalleryNavigation({ galleries }) {
  if (!galleries || galleries.length === 0) {
    return <p>No galleries available</p>; 
  }

  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/" end>Home</NavLink>
      {galleries.map(gallery => (
        <NavLink
          key={gallery.galleryid}
          to={`/galleries/${gallery.galleryid}`}
        >
          {gallery.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default GalleryNavigation;