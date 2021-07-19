import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Slider from 'react-slick';

export default function ProductSlider() {
    const settings = {
        customPaging: function (i) {
            return (
                <div className='grid grid-col-4'>
                    <div>
                        <a>
                            <img
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
                <img src='/png/product-foto.png' alt='product foto' />
            </div>
            <div>
                <img src='/png/product-foto.png' />
            </div>
            <div>
                <img src='/png/product-foto.png' />
            </div>
            <div>
                <img src='/png/product-foto.png' />
            </div>
        </Slider>
    );
}
