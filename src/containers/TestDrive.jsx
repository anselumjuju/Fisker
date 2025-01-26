import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TestDriveImg, SearchSvg } from '../assets';

gsap.registerPlugin(ScrollTrigger);

const TestDrive = () => {
  const imageRef = useRef(null);
  const contRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contRef.current,
        start: 'start bottom',
        end: 'bottom 80%',
        scrub: true,
      },
    });

    tl.fromTo(imageRef.current, { scale: 1.5 }, { scale: 1, ease: 'none' });
  }, []);

  return (
    <div className='w-full max-w-screen-3xl mx-auto h-[70vh] flex items-center justify-center relative' ref={contRef}>
      <div className='w-[90%] h-full rounded-lg overflow-clip relative'>
        <img src={TestDriveImg} alt='' className='w-full h-full absolute object-cover scale-150' ref={imageRef} />
        <div className='w-full h-full absolute bg-gradient-to-b from-[#00000094] to-[#00000000]' />
      </div>

      <div className='w-[80%] flex flex-col lg:flex-row gap-y-6 items-start justify-between absolute top-8 lg:top-16'>
        <div className='w-full flex flex-col items-start gap-4'>
          <h1 className='text-4xl font-orbitron font-bold text-white'>Make It Yours</h1>
          <p className='text-base font-inter font-medium text-white'>Book a test drive near you</p>
        </div>
        <div className='w-full h-10 lg:h-16 flex items-center justify-start lg:justify-end gap-2 lg:gap-4'>
          <input type='text' placeholder='Search address or postal code' className='w-[80%] h-full p-4 bg-white rounded-lg outline-none' />
          <div className='w-12 h-full flex items-center justify-center bg-orange-600 rounded-lg'>
            <img src={SearchSvg} alt='' className='w-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;
