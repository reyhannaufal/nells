import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Seo from '../components/Seo';

const content = [
   {
      id: 3,
      href: '/healthzone/pemeriksaan-secara-dini-kanker-payudara',
      title: 'Pemeriksaan Secara Dini Kanker Payudara',
      author: 'Regita',
      date: 'August 15, 2021',
      desc: 'Kanker payudara adalah tumor ganas yang menyerang jaringan payudara. Jaringan tersebut terdiri dari kelenjar susu (kelenjar pembuat air susu), saluran kelenjar (saluran air susu), dan jaringan penunjang payudara. Kanker payudara tidak menyerang kulit payudara yang berfungsi sebagai pembungkus. Kanker payudara menyebabkan sel dan jaringan payudara berubah bentuk menjadi abnormal dan bertambah banyak secara tidak terkendali.',
      img: '/png/healthzone-3.png',
   },
   {
      id: 2,
      href: '/healthzone/mengenal-gejala-kanker-payudara',
      title: '  Mengenal Gejala Kanker Payudara',
      author: 'Regita',
      date: 'August 15, 2021',
      desc: 'Kanker payudara adalah tumor ganas yang menyerang jaringan payudara. Jaringan tersebut terdiri dari kelenjar susu (kelenjar pembuat air susu), saluran kelenjar (saluran air susu), dan jaringan penunjang payudara. Kanker payudara tidak menyerang kulit payudara yang berfungsi sebagai pembungkus. Kanker payudara menyebabkan sel dan jaringan payudara berubah bentuk menjadi abnormal dan bertambah banyak secara tidak terkendali.',
      img: '/png/healthzone-2.png',
   },
   {
      id: 1,
      href: '/healthzone/cara-mendeteksi-dini-penyakit-alzheimer',
      title: 'Cara Mendeteksi Dini Penyakit Alzheimer',
      author: 'Regita',
      date: 'August 8, 2021',
      desc: 'Penyakit Alzheimer adalah penyakit degeneratif otak dan penyebab paling umum dari demensia. Hal ini ditandai dengan penurunan memori, bahasa, pemecahan masalah dan keterampilan kognitif lainnya yang mempengaruhi kemampuan seseorang untuk melakukan kegiatan sehari-hari. Penurunan ini terjadi karena sel-sel saraf (neuron) di bagian otak yang terlibat dalam fungsi kognitif telah rusak dan tidak lagi berfungsi normal.',
      img: '/png/healthzone-1.png',
   },
];

export default function healthzone() {
   return (
      <div>
         <Seo title='Nells | Healthzone' />
         <Header />
         <header>
            <div className='px-2 py-16 space-y-3 font-normal text-center lg:px-0 font-primary'>
               <h1 className='text-4xl'>Health Zone</h1>
               <p className='text-sm text-gray-500 md:text-base font-secondary'>
                  Yuk, edukasi diri kita mengenai penyakit{' '}
                  <span className='font-bold text-green-700'>Alzheimer</span>
               </p>
               <p className='text-sm text-gray-500 md:text-base font-secondary'>
                  dan
                  <span className='font-bold text-green-700'>
                     {' '}
                     Kanker Payudara
                  </span>
                  !
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
                                 className='h-[160px] lg:h-[235px] w-[320px] lg:w-[235px] object-cover rounded-3xl'
                                 width='235'
                                 height='235'
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
