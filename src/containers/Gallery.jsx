import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4 } from '../assets';

const Gallery = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const gallery = [GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4];
	const imagesRef = useRef([]);

	const handleNext = () => {
		if (currentIndex < gallery.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			setCurrentIndex(0);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		} else {
			setCurrentIndex(gallery.length - 1);
		}
	};

	return (
		<div className='w-full mx-auto relative scale-100'>

			<div className='w-[90%] max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-y-6'>
				<div>
					<p className='my-1 lg:my-3 font-nunito text-lg font-semibold'>Future Forward Features</p>
					<h1 className='font-orbitron font-bold text-5xl lg:text-6xl uppercase'>Solar Sky</h1>
				</div>
				<p className='w-full lg:w-[40%] font-inter text-sm'>
					When fully exposed to the sun, the Fisker Ocean Extreme's SolarSky can produce up to 1,500 clean, emissions-free miles per year, and under ideal conditions may increase to beyond 2,000 miles.
				</p>
			</div>

			<div className='w-full overflow-clip'>
				<div className='w-[80%] h-[200px] lg:h-[700px] my-10 mx-auto relative'>
					{gallery.map((img, index) => (
						<img
							key={index}
							src={img}
							alt={`Gallery Image ${index + 1}`}
							className='w-full h-full object-cover rounded-lg absolute'
							style={{
								left: `${(index - currentIndex) * 100}%`,
								transform: 'translateX(0%)',
								scale: index === currentIndex ? '105%' : '92%',
								transition: 'all 1s ease-in-out',
								zIndex: index === currentIndex ? 1 : 0,
							}}
							ref={(el) => (imagesRef.current[index] = el)}
						/>
					))}
				</div>
			</div>

			<div className='w-max flex items-baseline justify-center gap-3 absolute -bottom-5 left-1/2 -translate-x-1/2'>
				<button className='text-3xl font-medium cursor-pointer transition-all duration-500 ease-in-out hover:scale-125 hover:-translate-x-1 disabled:opacity-50' disabled={currentIndex === 0} onClick={handlePrev}>&larr;</button>
				<p className='text-xl font-normal'>{currentIndex + 1}/{gallery.length}</p>
				<button className='text-3xl font-medium cursor-pointer transition-all duration-500 ease-in-out hover:scale-125 hover:translate-x-1 disabled:opacity-50' disabled={currentIndex === gallery.length - 1} onClick={handleNext}>&rarr;</button>
			</div>
		</div>
	);
}

export default Gallery;
