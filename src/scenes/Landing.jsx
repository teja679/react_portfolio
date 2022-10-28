import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import profileImage from '../assets/profile-image.png'
import motion from 'framer-motion'

const Landing = ({ setSelectedPage }) => {
    const isAboveMeduimScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>

        {/* IMAGE SECTION */}
        <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
            {isAboveMeduimScreens ? (
                <div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                 before:border-2 before:border-blue before:x-[-1]'>
                    <img className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]' 
                    alt='profile' src={profileImage} />
                </div>
            ) : (
                <div>
                     <img className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]' 
                    alt='profile' src={profileImage} />
                </div>
            )}

            {/*  MAIN SECTION */}
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5}}
                >

                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Landing