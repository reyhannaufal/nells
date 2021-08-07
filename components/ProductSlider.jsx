import Image from 'next/image';
import Slider from 'react-slick';

const sliderImages = [
    {
        src: '/png/PRODUCT-01.png',
        alt: 'product-foto-1',
    },
    {
        src: '/png/PRODUCT-02.png',
        alt: 'product-foto-2',
    },
    {
        src: '/png/PRODUCT-03.png',
        alt: 'product-foto-3',
    },
    {
        src: '/png/PRODUCT-04.png',
        alt: 'product-foto-4',
    },
];

export default function ProductSlider() {
    const settings = {
        customPaging: function (i) {
            return (
                <div className='grid grid-col-4'>
                    <div>
                        <a>
                            <Image
                                height={320}
                                width={320}
                                loading='lazy'
                                src={`/png/PRODUCT-0${i + 1}.png`}
                                alt='product-foto'
                            />
                        </a>
                    </div>
                </div>
            );
        },
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
    };

    return (
        <Slider {...settings}>
            {sliderImages.map((image) => (
                <>
                    <Image
                        key={image.src}
                        height={320}
                        width={320}
                        loading='lazy'
                        src={image.src}
                        alt={image.alt}
                    />
                </>
            ))}
        </Slider>
    );
}
