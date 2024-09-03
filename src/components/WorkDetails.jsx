import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsItems } from '../ProjectItems';
import ErrorPage from '../Pages/ErrorPage';
import InputForm from '../components/InputForm';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import ScrollToTop from './ScrollToTop';

export const FullImage = ({ image, src, stateSeter }) => {



  return (
    <div className='w-full absolute h-[100vh] top-0 bottom-0 z-50 
    bg-[#000000c7] flex justify-center items-center overflow-hidden'>
      <ScrollToTop/>
      <div
        className='absolute right-9 top-9 bg-[#ffffff20] rounded-full p-1 cursor-pointer'
        onClick={() => stateSeter()}
      >
        <CloseIcon fontSize='large' />
      </div>
      <img
        className='h-[90vh] max-md:w-[90%] max-md:h-auto '
        src={image}
        alt={src}
      />
    </div>
  );
};

function WorkDetails() {
  const params = useParams();
  const filteredItem = projectsItems.find((item) => item.name === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageIsActive, setImageIsActive] = useState(false);

  const images = filteredItem.images || [filteredItem.photoUrl];

  const handleNextImage = () => {
    setCurrentImageIndex((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  if (!filteredItem) {
    return <ErrorPage />;
  }

  return (
    <>
      {imageIsActive && (
        <FullImage
          image={images[currentImageIndex]}
          src={filteredItem.name}
          stateSeter={setImageIsActive}
        />
      )}
      <div className={`w-full flex flex-col mt-1 justify-center items-center ${imageIsActive ? "hidden" : ""}`}>
        <div className='mt-9 w-full flex justify-center min-h-[30vh] flex-col items-center gap-4'>
          <div className='w-[90%] flex items-center mb-4'>
            <div className='flex gap-2 cursor-pointer'>
              <Link to="/" className='opacity-60 hover:opacity-100 hover:underline'>Home</Link>
              <span>/</span>
              <Link to=".." relative='path' className='opacity-60 hover:opacity-100 hover:underline'>Projects</Link>
              <span>/</span>
              <span className='font-semibold'>{filteredItem.name}</span>
            </div>
            <div className='flex-grow bg-gray-300 h-[0.2px] ml-4'></div>
          </div>
          <div className='text-center'>
            <h1 className='font-extrabold text-[60px]'>{filteredItem.name}</h1>
            <h2 className='text-[24px]'>{filteredItem.work}</h2>
          </div>
          <div className='w-full h-[80vh] max-md:w-[90%] max-md:h-[50vh] flex justify-center items-center'>
            {images.length > 1 && (
              <div
                onClick={handlePrevImage}
                className='opacity-65 hover:opacity-100 cursor-pointer'
              >
                <ArrowLeftIcon sx={{ width: '50px', height: '50px' }} />
              </div>
            )}
            <img
              onClick={() => setImageIsActive(true)}
              className='w-[90%] h-[100%] object-cover'
              src={images[currentImageIndex]}
              alt={filteredItem.name}
            />
            {images.length > 1 && (
              <div
                onClick={handleNextImage}
                className='opacity-65 hover:opacity-100 cursor-pointer'
              >
                <ArrowRightIcon sx={{ width: '50px', height: '50px' }} />
              </div>
            )}
          </div>
          {images.length > 1 && (
            <div className='flex mt-4'>
              {images.map((circle, index) => (
                <div
                  onClick={() => handleDotClick(index)}
                  key={index}
                  className={`cursor-pointer w-2 h-2 rounded-full mx-1 transition-all duration-300 bg-white ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-30'
                  }`}
                ></div>
              ))}
            </div>
          )}
          <p className='w-[80%] text-justify text-[18px] py-7'>
            {filteredItem.description}
          </p>
        </div>
        <InputForm />
      </div>
    </>
  );
}

export default WorkDetails;
