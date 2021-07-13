import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function MainContent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='overflow-hidden bg-gray-400'>
            <Slider
                {...settings}
                className='max-w-[300px] py-20 mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl'
            >
                {sliderContent.map((e) => (
                    <div key={e.id}>
                        <div className='flex flex-col max-w-sm mx-auto sm:max-w-xl md:max-w-3xl md:flex-row md:space-x-32 lg:max-w-4xl'>
                            <img
                                src={e.image}
                                className='w-[200px] mx-auto md:mx-0 h-[200px] md:h-auto md:w-auto rounded-3xl'
                            />
                            <div>
                                <h1 className='mt-8 text-lg font-semibold text-center md:text-left md:text-4xl'>
                                    {e.title}
                                </h1>
                                <p className='max-w-md mt-2 text-center md:text-left text-gray-50'>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Risus cras ut pellentesque
                                    nisi phasellus leo non lorem magna. Et
                                    maecenas bibendum consectetur pretium id
                                    feugiat donec at ...
                                </p>
                                <div className='flex justify-center py-2 md:justify-start'>
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
