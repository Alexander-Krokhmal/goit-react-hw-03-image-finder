import propTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({items}) => {
    return (
        <ul className={css.ImageGallery}>
            {items.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    previewImage={webformatURL}
                    largeImage={largeImageURL}
                    tags={tags}
                />))}
        </ul>
    )
}

ImageGallery.propTypes = {
    items: propTypes.array.isRequired,
  }