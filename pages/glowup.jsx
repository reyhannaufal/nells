import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Seo from '../components/Seo';

const content = [
    {
        id: 1,
        href: '/glowup/cara-tepat-mencukur-bulu-ketiak-yang-aman',
        title: 'Cara Tepat Mencukur Bulu Ketiak yang Aman',
        author: 'Regita',
        date: 'August 8, 2021',
        desc: 'Mencukur dengan pisau tumpul dan tidak menggunakan dapat menyebabkan rambut ketiak tumbuh ke dalam iritasi, kulit ketiak terluka, bahkan iritasi kulit dan membuat ketiak menghitam. Maka dari itu ada beberapa hal yang perlu diperhatikan dalam mencukur ketiak agar terhindar dari permasalahan tersebut. Berikut cara tepat mencukur bulu ketiak',
        img: '/png/glowup-1.png',
    },
    {
        id: 2,
        href: '/glowup/penyebab-ketiak-hitam-dan-cara-mengatasinya',
        title: 'Penyebab Ketiak Hitam dan Cara Mengatasinya',
        author: 'Regita',
        date: 'August 8, 2021',
        desc: 'Area ketiak sering kali tampak lebih gelap dari bagian tubuh lainnya. Hal tersebut karena area ketiak cenderung lebih lembab, serta memiliki kelenjar keringat dan pori-pori sehingga rentan mengalami masalah kulit, termasuk perubahan warna kulit menjadi gelap.',
        img: '/jpg/glowup-2.jpg',
    },
];

export default function glowup() {
    return (
        <div>
            <Seo title='Nells | Glowup!' />
            <Header />
            <header>
                <div className='px-5 py-16 space-y-3 font-normal text-center lg:px-0 font-primary'>
                    <h1 className='text-4xl'>Glow Up!</h1>
                    <p className='text-sm text-gray-500 font-secondary md:text-base'>
                        Punya pertanyaan seputar perawatan ketiak?
                    </p>
                    <p className='text-sm text-gray-500 font-secondary md:text-base'>
                        Kami siap membantu!
                    </p>
                </div>
            </header>
            <section className='max-w-sm mx-auto space-y-5 pb-28 lg:max-w-4xl'>
                {content.map((item) => (
                    <div key={item.id}>
                        <div className='mb-4'>
                            <Link href={item.href}>
                                <a>
                                    <div className='flex flex-col px-5 hover:text-gray-600 lg:px-0 lg:space-x-10 lg:flex-row'>
                                        <img
                                            src={item.img}
                                            width='235'
                                            height='235'
                                            className='h-[160px] lg:h-[235px] w-[320px] lg:w-[235px] object-cover rounded-3xl'
                                        />
                                        <aside className='space-y-2'>
                                            <h3 className='mt-3 text-xl font-semibold lg:mt-0 lg:text-3xl'>
                                                {item.title}
                                            </h3>
                                            <div className='flex space-x-10 font-secondary'>
                                                <div className='flex space-x-1 '>
                                                    <img src='/svg/photo-blog.svg' />
                                                    <p className='text-gray-500 mt-0.5'>
                                                        {item.author}
                                                    </p>
                                                </div>
                                                <div className='flex w-full space-x-1'>
                                                    <img
                                                        className='self-center w-5'
                                                        src='/svg/calender-blog.svg'
                                                    />
                                                    <p className='text-gray-500 mt-0.5'>
                                                        {item.date}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className='text-gray-500 font-secondary'>
                                                {item.desc}
                                            </p>
                                        </aside>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <hr className='border-2 rounded-lg ' />
                    </div>
                ))}
            </section>
            <Footer />
        </div>
    );
}
