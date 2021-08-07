import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const LeftButton = ({ currentSlide, slideCount, onClick, ...props }) => (
    <button
        className={
            'w-9 h-9 slick-prev slick-arrow' +
            (currentSlide === 0 ? ' slick-disabled' : '')
        }
        aria-disabled={currentSlide === 0 ? true : false}
        aria-label='left-arrow'
        aria-hidden='true'
        onClick={onClick}
    >
        <MdKeyboardArrowLeft className='text-4xl text-black ' />
    </button>
);

const RightButton = ({ currentSlide, slideCount, onClick, ...props }) => (
    <button
        className={
            'w-9 h-9 slick-next slick-arrow' +
            (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
        }
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        aria-label='right-arrow'
        aria-hidden='true'
        onClick={onClick}
    >
        <MdKeyboardArrowRight className='text-4xl text-black' />
    </button>
);

export default function MainContent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <LeftButton />,
        nextArrow: <RightButton />,
    };
    return (
        <div className='pr-4 overflow-hidden bg-white sm:pr-0 px-29'>
            <div className='max-w-sm mx-auto lg:max-w-6xl'>
                <Slider
                    {...settings}
                    className='max-w-[300px] pl-3 py-20 mx-auto sm:max-w-[400px] lg:max-w-7xl  '
                >
                    {sliderContent.map((e) => (
                        <div key={e.id}>
                            <div className='flex flex-col max-w-xs mx-auto sm:max-w-xl lg:flex-row lg:space-x-32 lg:max-w-4xl'>
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
                                        adipiscing elit. Risus cras ut
                                        pellentesque nisi phasellus leo non
                                        lorem magna. Et maecenas bibendum
                                        consectetur pretium id feugiat donec at
                                        ...
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
