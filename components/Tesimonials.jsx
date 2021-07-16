import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiUserLine } from 'react-icons/ri';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function Tesimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        prevArrow: (
            <button className='top-0 my-2 w-9'>
                <MdKeyboardArrowLeft className='text-4xl text-black' />
            </button>
        ),
        nextArrow: (
            <button className='top-0 w-9 h-9'>
                <MdKeyboardArrowRight className='text-4xl text-black' />
            </button>
        ),
    };
    return (
        <div className='py-20 overflow-hidden bg-white'>
            <h2 className='mt-10 text-4xl font-normal text-center font-primary '>
                Their Testimonials
            </h2>
            <Slider
                {...settings}
                className='max-w-[300px] py-20 mx-auto sm:max-w-[400px] lg:max-w-7xl'
            >
                {sliderContent.map((e) => (
                    <div key={e.id} className='pl-4 md:pl-0'>
                        <div className='flex flex-col max-w-lg mx-auto my-5 shadow-lg rounded-3xl'>
                            <div className='p-5'>
                                <p className='max-w-md font-normal text-center text-gray-500 font-secondary lg:text-left'>
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Risus cras ut pellentesque
                                    nisi phasellus leo non lorem magna. Et
                                    maecenas bibendum consectetur pretium id
                                    feugiat donec at"
                                </p>
                                <div className='flex justify-center py-2 mt-4 space-x-3 lg:justify-start'>
                                    <div className='w-10 h-10 rounded-full'>
                                        <RiUserLine className='mx-auto mt-1 w-9 h-9' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-gray-500 font-secondary text-md'>
                                            Reyhan Naufal
                                        </p>
                                        <p className='text-sm text-gray-400 font-secondary'>
                                            Mahasiswa
                                        </p>
                                    </div>
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
        title: 'Penanganan Alzheimer',
    },
    {
        id: 2,
        title: 'Penanganan Penyakit Mental',
    },
    {
        id: 3,
        title: 'Penanganan Penyakit Mental',
    },
];