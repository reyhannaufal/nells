/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline';

const solutions = [
    {
        name: 'Home',
        description:
            'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Product',
        description:
            'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    {
        name: 'About Us',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Glow Up!',
        description:
            "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Health Zone',
        description:
            'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
];

export default function Header() {
    return (
        <Popover className='relative bg-white font-primary'>
            {({ open }) => (
                <>
                    <div className='px-4 mx-auto shadow-md sm:px-6'>
                        <div className='flex flex-row-reverse items-center justify-between py-6 md:flex-row md md:justify-start md:space-x-10'>
                            <div className='flex justify-start w-7/12 lg:w-0 lg:flex-1'>
                                <a href='#'>
                                    <span className='sr-only'>Nells</span>
                                    <img
                                        className='w-auto h-8 sm:h-10'
                                        src='/svg/colored-logo.svg'
                                        alt='colored-logo'
                                    />
                                </a>
                            </div>
                            <div className='-my-2 -mr-2 md:hidden'>
                                <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                    <span className='sr-only'>Open menu</span>
                                    <MenuIcon
                                        className='w-6 h-6'
                                        aria-hidden='true'
                                    />
                                </Popover.Button>
                            </div>
                            <Popover.Group
                                as='nav'
                                className='hidden space-x-10 md:flex'
                            >
                                <a
                                    href='#'
                                    className='text-base font-bold text-gray-900 hover:text-gray-900'
                                >
                                    Home
                                </a>
                                <a
                                    href='#'
                                    className='text-base font-medium text-gray-500 hover:text-gray-900'
                                >
                                    Product
                                </a>
                                <a
                                    href='#'
                                    className='text-base font-medium text-gray-500 hover:text-gray-900'
                                >
                                    About Us
                                </a>
                                <a
                                    href='#'
                                    className='text-base font-medium text-gray-500 hover:text-gray-900'
                                >
                                    Glow Up!
                                </a>
                                <a
                                    href='#'
                                    className='text-base font-medium text-gray-500 hover:text-gray-900'
                                >
                                    Health Zone
                                </a>
                            </Popover.Group>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter='duration-200 ease-out'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='duration-100 ease-in'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <Popover.Panel
                            focus
                            static
                            className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'
                        >
                            <div className='bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
                                <div className='px-5 pt-5 pb-6'>
                                    <div className='flex flex-row-reverse items-center justify-between'>
                                        <div>
                                            <img
                                                className='w-auto h-8'
                                                src='/svg/colored-logo.svg'
                                                alt='Nells'
                                            />
                                        </div>
                                        <div className='-mr-2'>
                                            <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                                <span className='sr-only'>
                                                    Close menu
                                                </span>
                                                <XIcon
                                                    className='w-6 h-6'
                                                    aria-hidden='true'
                                                />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <nav className='grid gap-y-8'>
                                            {solutions.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className='flex items-center p-3 -m-3 rounded-md hover:bg-gray-50'
                                                >
                                                    <item.icon
                                                        className='flex-shrink-0 w-6 h-6 text-indigo-600'
                                                        aria-hidden='true'
                                                    />
                                                    <span className='ml-3 text-base font-medium text-gray-900'>
                                                        {item.name}
                                                    </span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                {/* <div className='px-5 py-6 space-y-6'>
                                    <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                                        <a
                                            href='#'
                                            className='text-base font-medium text-gray-900 hover:text-gray-700'
                                        >
                                            Pricing
                                        </a>

                                        <a
                                            href='#'
                                            className='text-base font-medium text-gray-900 hover:text-gray-700'
                                        >
                                            Docs
                                        </a>
                                        {resources.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className='text-base font-medium text-gray-900 hover:text-gray-700'
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div>
                                        <a
                                            href='#'
                                            className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700'
                                        >
                                            Sign up
                                        </a>
                                        <p className='mt-6 text-base font-medium text-center text-gray-500'>
                                            Existing customer?{' '}
                                            <a
                                                href='#'
                                                className='text-indigo-600 hover:text-indigo-500'
                                            >
                                                Sign in
                                            </a>
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}
