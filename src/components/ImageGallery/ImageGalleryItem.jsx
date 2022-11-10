import { Component } from 'react';
import Modal from 'components/Modal/Modal';

import propTypes from 'prop-types';
import css from './ImageGallery.module.css';

export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };
      
    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    }
    
    render() {
        const {previewImage, largeImage, tags} = this.props;
        const { showModal } = this.state;
        return(
    
            <>
                <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
                        <img className={css.ImageGalleryItem_image} src={previewImage} alt={tags} />
                </li>
    
                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <img src={largeImage} alt={tags} />
                    </Modal>
                )}
            </>
        )
    }
}

ImageGalleryItem.propTypes = {
    previewImage: propTypes.string.isRequired,
    largeImage: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
  }