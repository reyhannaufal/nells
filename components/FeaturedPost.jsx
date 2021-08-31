import Image from 'next/image';
import Link from 'next/link';

const posts = [
   {
      title: 'Cara Tepat Mencukur Bulu Ketiak yang Aman',
      href: '/glowup/cara-tepat-mencukur-bulu-ketiak-yang-aman',
      description:
         'Mencukur dengan pisau tumpul dan tidak menggunakan dapat menyebabkan rambut ketiak tumbuh ke dalam iritasi, kulit...',
      imageUrl: '/png/glowup-1.png',
   },
   {
      title: 'Cara Mendeteksi Dini Penyakit Alzhimer',
      href: '/healthzone/cara-mendeteksi-dini-penyakit-alzheimer',
      description:
         'Penyakit Alzheimer adalah penyakit degeneratif otak dan penyebab paling umum dari demensia. Hal ini ditandai dengan...',
      imageUrl: '/png/healthzone-1.png',
   },
   {
      title: 'Mengenal Gejala Kanker Payudara',
      href: '/healthzone/mengenal-gejala-kanker-payudara',
      description:
         'Kanker payudara adalah tumor ganas yang menyerang jaringan payudara. Jaringan tersebut terdiri dari kelenjar susu (kelenjar pembuat air susu), saluran kelenjar...',
      imageUrl: '/png/healthzone-2.png',
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
                           <a className='inline-flex items-center w-[170px]  py-2 mt-5 text-sm font-medium text-white border border-transparent rounded-full shadow-sm justify-center bg-spurple hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spurplehover'>
                              Baca Selengkapnya
                           </a>
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
            <div className='flex justify-center'>
               <Link href='/healthzone'>
                  <a className='inline-flex mt-10 items-center w-[321px]  py-3  text-md font-medium bg-white border border-transparent rounded-2xl shadow-sm text-spurple justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                     Lihat Selengkapnya
                  </a>
               </Link>
            </div>
         </div>
      </div>
   );
}
