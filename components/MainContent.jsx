import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function MainContent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <button className='w-9 h-9'>
                <MdKeyboardArrowLeft className='text-4xl text-black' />
            </button>
        ),
        nextArrow: (
            <button className='w-9 h-9'>
                <MdKeyboardArrowRight className='text-4xl text-black' />
            </button>
        ),
    };
    return (
        <div className='pb-10 overflow-hidden bg-white'>
            <Slider
                {...settings}
                className='max-w-[300px] py-20 mx-auto sm:max-w-[400px] lg:max-w-7xl'
            >
                {sliderContent.map((e) => (
                    <div key={e.id} className='pl-4 md:pl-0'>
                        <div className='flex flex-col max-w-sm mx-auto sm:max-w-xl lg:flex-row lg:space-x-32 lg:max-w-4xl'>
                            <img
                                src={e.image}
                                className='w-[200px] mx-auto lg:mx-0 h-[200px] lg:h-auto lg:w-auto rounded-3xl'
                                alt={e.title}
                            />
                            <div>
                                <h1 className='mt-8 text-lg font-semibold text-center lg:text-left md:text-4xl'>
                                    {e.title}
                                </h1>
                                <p className='max-w-md mt-2 text-center text-gray-500 font-secondary lg:text-left'>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Risus cras ut pellentesque
                                    nisi phasellus leo non lorem magna. Et
                                    maecenas bibendum consectetur pretium id
                                    feugiat donec at ...
                                </p>
                                <div className='flex justify-center py-2 lg:justify-start'>
                                    <button
                                        type='button'
                                        className='inline-flex  items-center w-[150px] px-9 py-2 mt-8  text-sm font-medium text-white border border-transparent rounded-full shadow-sm md:px-9 bg-spurple hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spurplehover'
                                    >
                                        Read More
                                    </button>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

const sliderContent = [
    {
        id: 1,
        image: 'png/main-photo.png',
        title: 'Penanganan Alzheimer',
    },
    {
        id: 2,
        image: 'png/main-photo.png',
        title: 'Penanganan Penyakit Mental',
    },
];
