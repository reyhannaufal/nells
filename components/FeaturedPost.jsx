import Image from 'next/image';
import Link from 'next/link';

const posts = [
    {
        title: 'Cara Tepat Mencukur Bulu Ketiak yang Aman',
        href: '/glowup/cara-tepat-mencukur-bulu-ketiak-yang-aman',
        description:
            'Mencukur dengan pisau tumpul dan tidak menggunakan dapat menyebabkan rambut ketiak tumbuh ke dalam iritasi, kulit ketiak terluka, bahkan iritasi kulit dan membuat ketiak menghitam. Maka dari itu ada beberapa hal yang perlu diperhatikan dalam mencukur ketiak agar...',
        imageUrl: '/png/glowup-1.png',
    },
    {
        title: 'Cara Mendeteksi Dini Penyakit Alzhimer',
        href: '/healthzone/cara-mendeteksi-dini-penyakit-alzheimer',
        description:
            'Penyakit Alzheimer adalah penyakit degeneratif otak dan penyebab paling umum dari demensia. Hal ini ditandai dengan penurunan memori, bahasa, pemecahan masalah dan keterampilan kognitif lainnya yang mempengaruhi kemampuan seseorang untuk melakukan kegiatan sehari-hari.',
        imageUrl: '/png/healthzone-1.png',
    },
    {
        title: 'Improve your customer experience',
        href: '/healthzone/cara-mendeteksi-dini-penyakit-alzheimer',
        description:
            'Kamu tahu gak sih, tubuh yang sehat dan punya imun yang kuat lebih sulit untuk terpapar penyakit lho! Tubuh ... ',
        imageUrl: '/png/product-foto.png',

        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
];

export default function FeaturedPost() {
    return (
        <div className='relative px-4 pt-16 pb-20 bg-spurple sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
            <div className='absolute inset-0'>
                <div className='bg-spurple h-1/3 sm:h-2/3' />
            </div>
            <div className='relative mx-auto max-w-7xl'>
                <div className='text-center'>
                    <h2 className='text-5xl font-medium tracking-tight text-white sm:text-4xl'>
                        Our Latest Article
                    </h2>
                </div>
                <div className='grid max-w-lg gap-5 mx-auto mt-12 px-7 lg:grid-cols-3 lg:max-w-none'>
                    {posts.map((post) => (
                        <div
                            key={post.title}
                            className='flex flex-col overflow-hidden shadow-lg rounded-3xl'
                        >
                            <div className='flex-shrink-0'>
                                <div className='w-full h-full '>
                                    <Image
                                        height={170}
                                        width={320}
                                        placeholder='blur'
                                        layout='responsive'
                                        src={post.imageUrl}
                                        alt={post.title}
                                        blurDataURL={post.imageUrl}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                                <div className='flex-1'>
                                    <Link href={post.href}>
                                        <a className='block mt-2'>
                                            <p className='text-xl font-semibold text-gray-900'>
                                                {post.title}
                                            </p>
                                            <p className='mt-3 text-base text-gray-500 font-secondary'>
                                                {post.description}
                                            </p>
                                        </a>
                                    </Link>
                                </div>
                                <Link href={post.href}>
                                    <a className='inline-flex items-center w-[150px] px-9 py-2 mt-5 text-sm font-medium text-white border border-transparent rounded-full shadow-sm md:px-9 bg-spurple hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spurplehover'>
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button
                        type='button'
                        className='inline-flex mt-10 items-center w-[321px] px-[130px] py-3  text-md font-medium bg-white border border-transparent rounded-2xl shadow-sm text-spurple md:px-[130px] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                    >
                        See All
                    </button>
                </div>
            </div>
        </div>
    );
}
