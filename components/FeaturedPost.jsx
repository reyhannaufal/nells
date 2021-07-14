const posts = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Kamu tahu gak sih, tubuh yang sehat dan punya imun yang kuat lebih sulit untuk terpapar penyakit lho! Tubuh ... ',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        category: { name: 'Video', href: '#' },
        description:
            'Kamu tahu gak sih, tubuh yang sehat dan punya imun yang kuat lebih sulit untuk terpapar penyakit lho! Tubuh ... ',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '4 min',
        author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'Improve your customer experience',
        href: '#',
        category: { name: 'Case Study', href: '#' },
        description:
            'Kamu tahu gak sih, tubuh yang sehat dan punya imun yang kuat lebih sulit untuk terpapar penyakit lho! Tubuh ... ',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
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
                <div className='grid max-w-lg gap-5 px-5 mx-auto mt-12 md:px-0 lg:grid-cols-3 lg:max-w-none'>
                    {posts.map((post) => (
                        <div
                            key={post.title}
                            className='flex flex-col overflow-hidden shadow-lg rounded-3xl'
                        >
                            <div className='flex-shrink-0'>
                                <img
                                    className='object-cover w-full h-48'
                                    src={post.imageUrl}
                                    alt=''
                                />
                            </div>
                            <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                                <div className='flex-1'>
                                    <a href={post.href} className='block mt-2'>
                                        <p className='text-xl font-semibold text-gray-900'>
                                            {post.title}
                                        </p>
                                        <p className='mt-3 text-base text-gray-500 font-secondary'>
                                            {post.description}
                                        </p>
                                    </a>
                                </div>
                                <button
                                    type='button'
                                    className='inline-flex items-center w-[150px] px-9 py-2 mt-5 text-sm font-medium text-white border border-transparent rounded-full shadow-sm md:px-9 bg-spurple hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spurplehover'
                                >
                                    Read More
                                </button>
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
