import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';

const LeftButton = ({ currentSlide, slideCount, onClick, ...props }) => (
    <button
        className={
            'w-9 h-9 slick-prev slick-arrow' +
            (currentSlide === 0 ? ' slick-disabled' : '')
        }
        aria-disabled={currentSlide === 0 ? true : false}
        aria-label='left-arrow'
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
                                <div>
                                    <div className='w-[200px] mx-auto lg:mx-0 h-[200px] lg:h-[320px] lg:w-[320px] rounded-3xl '>
                                        <Image
                                            width={320}
                                            height={320}
                                            layout='intrinsic'
                                            src={e.image}
                                            alt={e.title}
                                            placeholder='blur'
                                            blurDataURL={e.image}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h1 className='mt-8 text-lg font-semibold text-center lg:text-left md:text-4xl'>
                                        {e.title}
                                    </h1>
                                    <p className='max-w-md mt-2 text-center text-gray-500 font-secondary lg:text-left'>
                                        {e.desc}
                                    </p>
                                    <div className='flex justify-center py-2 lg:justify-start'>
                                        <Link href={e.href}>
                                            <a className='inline-flex  items-center w-[150px] px-9 py-2 mt-8  text-sm font-medium text-white border border-transparent rounded-full shadow-sm md:px-9 bg-spurple hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spurplehover'>
                                                Read More
                                            </a>
                                        </Link>
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
        image: '/png/banner/glowup-1.png',
        title: 'Cara Tepat Mencukur Bulu Ketiak yang Aman',
        desc: 'Mencukur dengan pisau tumpul dan tidak menggunakan dapat menyebabkan rambut ketiak tumbuh ke dalam iritasi, kulit ketiak terluka, bahkan iritasi kulit dan membuat ketiak menghitam. Maka dari itu ada beberapa hal yang perlu diperhatikan dalam mencukur ketiak agar...',
        href: '/glowup/cara-tepat-mencukur-bulu-ketiak-yang-aman',
    },
    {
        id: 2,
        image: '/png/banner/healthzone-1.png',
        title: 'Cara Mendeteksi Dini Penyakit Alzhimer',
        desc: 'Penyakit Alzheimer adalah penyakit degeneratif otak dan penyebab paling umum dari demensia. Hal ini ditandai dengan penurunan memori, bahasa, pemecahan masalah dan keterampilan kognitif lainnya yang mempengaruhi kemampuan seseorang untuk melakukan kegiatan...',
        href: '/healthzone/cara-mendeteksi-dini-penyakit-alzheimer',
    },
];
