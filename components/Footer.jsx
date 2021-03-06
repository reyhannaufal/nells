import Link from 'next/link';

const navigation = {
   perusahaan: [{ name: 'About Us', href: '/aboutus' }],
   edukasi: [
      { name: 'Glow Up!', href: '/glowup' },
      { name: 'Health Zone', href: '/healthzone' },
   ],
   produk: [{ name: `NELL'S Citronella Deodorant`, href: '/product' }],
   media_sosial: [
      {
         name: 'Instagram',
         href: 'https://www.instagram.com/nellsofficial.id/',
      },
      { name: 'Twitter', href: '#' },
   ],
   social: [
      {
         name: 'Instagram',
         href: '#',
         icon: (props) => (
            <svg
               width='30'
               height='30'
               viewBox='0 0 30 30'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
            >
               <path
                  d='M14.9991 0C10.9219 0 10.4138 0.0196875 8.81816 0.0871875C7.21598 0.165938 6.13223 0.414375 5.17598 0.785625C4.17516 1.16346 3.26879 1.75501 2.52004 2.51906C1.75386 3.26606 1.16197 4.17294 0.786602 5.175C0.415352 6.13125 0.166914 7.215 0.0881641 8.81719C0.0159766 10.4137 0.000976562 10.9209 0.000976562 14.9981C0.000976562 19.0753 0.0206641 19.5834 0.0881641 21.1791C0.166914 22.7766 0.415352 23.865 0.786602 24.8212C1.16443 25.8221 1.75599 26.7284 2.52004 27.4772C3.26704 28.2434 4.17391 28.8353 5.17598 29.2106C6.13223 29.5772 7.22066 29.8303 8.81816 29.9091C10.4147 29.9812 10.9219 29.9963 14.9991 29.9963C19.0763 29.9963 19.5844 29.9766 21.18 29.9091C22.7775 29.8303 23.866 29.5763 24.8222 29.2106C25.823 28.8328 26.7294 28.2412 27.4782 27.4772C28.2453 26.731 28.8374 25.8239 29.2116 24.8212C29.5782 23.865 29.8313 22.7766 29.91 21.1791C29.9822 19.5825 29.9972 19.0753 29.9972 14.9981C29.9972 10.9209 29.9775 10.4128 29.91 8.81719C29.8313 7.21969 29.5772 6.12563 29.2116 5.175C28.8338 4.17418 28.2422 3.26781 27.4782 2.51906C26.732 1.7519 25.8249 1.15986 24.8222 0.785625C23.866 0.414375 22.7775 0.165938 21.18 0.0871875C19.5835 0.015 19.0763 0 14.9991 0ZM14.9991 2.7C19.0032 2.7 19.4813 2.71969 21.0638 2.78719C22.5235 2.85563 23.3185 3.09938 23.8463 3.30563C24.4988 3.54649 25.0894 3.92986 25.575 4.42781C26.0721 4.9114 26.4541 5.50064 26.6925 6.15187C26.8988 6.67969 27.1425 7.47469 27.211 8.93437C27.2785 10.5169 27.2982 10.9959 27.2982 14.9991C27.2982 19.0022 27.2785 19.4813 27.2054 21.0638C27.1266 22.5234 26.8829 23.3184 26.6775 23.8463C26.3935 24.5503 26.0766 25.0425 25.5535 25.575C25.0662 26.0698 24.476 26.4514 23.8247 26.6925C23.3035 26.8988 22.4972 27.1425 21.0319 27.2109C19.441 27.2784 18.9722 27.2981 14.9579 27.2981C10.9435 27.2981 10.4757 27.2784 8.88285 27.2053C7.42316 27.1266 6.61785 26.8828 6.09004 26.6775C5.37754 26.3934 4.8891 26.0766 4.36598 25.5534C3.83816 25.0256 3.50254 24.5231 3.24379 23.8247C3.03379 23.3034 2.79379 22.4972 2.71598 21.0319C2.66254 19.4597 2.63723 18.9722 2.63723 14.9766C2.63723 10.9828 2.66254 10.4944 2.71598 8.9025C2.79379 7.43719 3.03379 6.63281 3.24379 6.10969C3.50254 5.39625 3.8391 4.90875 4.36598 4.38094C4.88816 3.85875 5.37754 3.52125 6.09004 3.25687C6.61785 3.05156 7.40348 2.80781 8.86879 2.73469C10.4597 2.6775 10.9285 2.65688 14.9372 2.65688L14.9991 2.7ZM14.9991 7.30031C13.9879 7.29994 12.9865 7.49885 12.0521 7.88566C11.1178 8.27248 10.2688 8.83962 9.55378 9.55467C8.83872 10.2697 8.27158 11.1187 7.88476 12.053C7.49795 12.9874 7.29904 13.9888 7.29941 15C7.29904 16.0112 7.49795 17.0126 7.88476 17.947C8.27158 18.8813 8.83872 19.7303 9.55378 20.4453C10.2688 21.1604 11.1178 21.7275 12.0521 22.1143C12.9865 22.5012 13.9879 22.7001 14.9991 22.6997C16.0103 22.7001 17.0117 22.5012 17.9461 22.1143C18.8804 21.7275 19.7294 21.1604 20.4444 20.4453C21.1595 19.7303 21.7266 18.8813 22.1134 17.947C22.5003 17.0126 22.6992 16.0112 22.6988 15C22.6992 13.9888 22.5003 12.9874 22.1134 12.053C21.7266 11.1187 21.1595 10.2697 20.4444 9.55467C19.7294 8.83962 18.8804 8.27248 17.9461 7.88566C17.0117 7.49885 16.0103 7.29994 14.9991 7.30031V7.30031ZM14.9991 19.9997C12.2354 19.9997 9.99941 17.7637 9.99941 15C9.99941 12.2363 12.2354 10.0003 14.9991 10.0003C17.7629 10.0003 19.9988 12.2363 19.9988 15C19.9988 17.7637 17.7629 19.9997 14.9991 19.9997ZM24.8091 6.99281C24.8086 7.47062 24.6184 7.92869 24.2804 8.26638C23.9424 8.60407 23.4841 8.79375 23.0063 8.79375C22.77 8.79375 22.5361 8.74722 22.3178 8.6568C22.0995 8.56639 21.9012 8.43388 21.7342 8.26682C21.5671 8.09976 21.4346 7.90143 21.3442 7.68316C21.2538 7.46489 21.2072 7.23094 21.2072 6.99469C21.2072 6.75843 21.2538 6.52449 21.3442 6.30622C21.4346 6.08794 21.5671 5.88962 21.7342 5.72256C21.9012 5.5555 22.0995 5.42298 22.3178 5.33257C22.5361 5.24216 22.77 5.19562 23.0063 5.19562C23.9972 5.19562 24.8091 6.00188 24.8091 6.99281V6.99281Z'
                  fill='white'
               />
            </svg>
         ),
      },
      {
         name: 'Tiktok',
         href: '#',
         icon: (props) => (
            <svg
               width='30'
               height='30'
               viewBox='0 0 30 30'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
            >
               <path
                  d='M15.6638 0.0253125C17.2997 0 18.9263 0.015 20.5509 0C20.6494 1.91344 21.3375 3.8625 22.7381 5.21531C24.1359 6.60188 26.1131 7.23656 28.0369 7.45125V12.4847C26.2341 12.4256 24.4228 12.0506 22.7869 11.2744C22.0744 10.9519 21.4106 10.5366 20.7609 10.1119C20.7525 13.7644 20.7759 17.4122 20.7375 21.0497C20.64 22.7972 20.0634 24.5363 19.0472 25.9763C17.4122 28.3734 14.5744 29.9362 11.6597 29.985C9.87188 30.0872 8.08595 29.5997 6.56251 28.7016C4.03782 27.2128 2.26126 24.4875 2.00251 21.5625C1.96992 20.943 1.96491 20.3224 1.98751 19.7025C2.21251 17.3241 3.38907 15.0488 5.21532 13.5009C7.28532 11.6981 10.185 10.8394 12.9 11.3475C12.9253 13.1991 12.8513 15.0488 12.8513 16.9003C11.6109 16.4991 10.1616 16.6116 9.07782 17.3644C8.28492 17.8867 7.68573 18.6552 7.37251 19.5516C7.11376 20.1853 7.18782 20.8894 7.20282 21.5625C7.50001 23.6137 9.47251 25.3378 11.5781 25.1512C12.9741 25.1362 14.3119 24.3263 15.0394 23.1403C15.2747 22.725 15.5381 22.3003 15.5522 21.8119C15.675 19.5759 15.6263 17.3494 15.6413 15.1134C15.6516 10.0744 15.6263 5.04937 15.6647 0.02625L15.6638 0.0253125Z'
                  fill='white'
               />
            </svg>
         ),
      },
   ],
};

export default function Footer() {
   return (
      <footer
         style={{ backgroundColor: '#305841' }}
         className='font-primary'
         aria-labelledby='footerHeading'
      >
         <h2 id='footerHeading' className='sr-only'>
            Footer
         </h2>
         <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8'>
            <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
               <div className='space-y-8 xl:col-span-1'>
                  <img
                     className='h-16 mx-auto md:mx-0'
                     src='/png/white-logo.png'
                     alt='white-logo'
                  />
                  <p className='text-base font-bold text-center text-white md:text-left'>
                     Stay connected with us!
                  </p>
                  <div className='flex justify-center space-x-6 md:justify-start'>
                     {navigation.social.map((item, index) => (
                        <Link href={item.href} key={index}>
                           <a className='text-gray-400 hover:text-gray-500'>
                              <span className='sr-only'>{item.name}</span>
                              <item.icon
                                 className='w-6 h-6'
                                 aria-hidden='true'
                              />
                           </a>
                        </Link>
                     ))}
                  </div>
               </div>
               <div className='grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2'>
                  <div className='mx-auto md:mx-0 md:grid md:grid-cols-2 md:gap-8'>
                     <div>
                        <h3 className='text-sm font-bold tracking-wider text-white uppercase'>
                           Perusahaan
                        </h3>
                        <ul className='mt-4 space-y-4'>
                           {navigation.perusahaan.map((item, index) => (
                              <li key={index}>
                                 <a
                                    href={item.href}
                                    className='text-base font-light text-white hover:text-gray-200'
                                 >
                                    {item.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className='mt-12 md:mt-0'>
                        <h3 className='text-sm font-bold tracking-wider text-white uppercase'>
                           Edukasi
                        </h3>
                        <ul className='mt-4 space-y-4'>
                           {navigation.edukasi.map((item, index) => (
                              <li key={index}>
                                 <a
                                    href={item.href}
                                    className='text-base font-light text-white hover:text-gray-200'
                                 >
                                    {item.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className='mx-auto md:mx-0 md:grid md:grid-cols-2 md:gap-8'>
                     <div>
                        <h3 className='text-sm font-bold tracking-wider text-white uppercase'>
                           Produk
                        </h3>
                        <ul className='mt-4 space-y-4'>
                           {navigation.produk.map((item, index) => (
                              <li key={index}>
                                 <a
                                    href={item.href}
                                    className='text-base font-light text-white hover:text-gray-200'
                                 >
                                    {item.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className='mt-12 md:mt-0'>
                        <h3 className='text-sm font-bold tracking-wider text-white uppercase'>
                           Media Sosial
                        </h3>
                        <ul className='mt-4 space-y-4'>
                           {navigation.media_sosial.map((item, index) => (
                              <li key={index}>
                                 <a
                                    href={item.href}
                                    target='_blank'
                                    rel='nofollow noopener noreferrer'
                                    className='text-base font-light text-white hover:text-gray-200'
                                 >
                                    {item.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='py-5 ' style={{ backgroundColor: '#203B2C' }}>
            <p className='text-base text-center text-white'>
               &copy; 2021 Nells. All rights reserved.
            </p>
         </div>
      </footer>
   );
}
