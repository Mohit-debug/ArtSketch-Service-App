import React, { useState, useEffect } from 'react';
import Modal from '../modal';

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('/gallerydata.json')
      .then(response => response.json())
      .then(data => setGalleryData(data))
      .catch(error => console.error('Error loading gallery data:', error));
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center space-x-4 pt-10 ">
        {galleryData.map((image, index) => (
          <div key={index} className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/5 p-2" onClick={() => openModal(image)}>
            <img src={image.src} alt={image.alt} className="w-full h-full object-contain rounded-lg cursor-pointer" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal.Container onClose={closeModal}>
          <div className="relative bg-white rounded-lg lg:w-1/2 pt-4">
            <button className="absolute top-2 right-5 text-2xl font-bold text-gray-900 rounded-full" onClick={closeModal}>
              X
            </button>
            <div className="w-full h-full mt-5 flex flex-col items-center pr-3 pl-3">
              <img src={selectedImage.src} alt={selectedImage.alt} className="lg:h-4/5 w-full flex object-contain rounded-lg mb-5" />
              <div className="flex flex-col items-start text-center">
                <p className="text-sm text-gray-700 mb-1"><strong>Description:</strong> {selectedImage.description}</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Type:</strong> {selectedImage.type}</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Made By:</strong> {selectedImage.madeBy}</p>
              </div>
            </div>
          </div>
        </Modal.Container>
      )}
    </div>
  );
};

export default Gallery;
