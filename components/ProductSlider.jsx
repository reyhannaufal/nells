import Image from 'next/image';
import Slider from 'react-slick';

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
                                src={`/png/product-foto.png`}
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
            <div>
                <Image
                    width={320}
                    loading='lazy'
                    height={320}
                    src='/png/product-foto.png'
                    alt='product foto'
                />
            </div>
            <div>
                <Image
                    width={320}
                    height={320}
                    loading='lazy'
                    src='/png/product-foto.png'
                />
            </div>
            <div>
                <Image
                    width={320}
                    height={320}
                    loading='lazy'
                    src='/png/product-foto.png'
                />
            </div>
            <div>
                <Image
                    width={320}
                    height={320}
                    loading='lazy'
                    src='/png/product-foto.png'
                />
            </div>
        </Slider>
    );
}
