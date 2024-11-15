"use client";

const featuresData = [
  {
    icon: "bi bi-brush",
    title: "Elegant & Impressive Design",
    description: "Invitations are designed elegantly & impressively."
  },
  {
    icon: "bi bi-list-ol",
    title: "Unlimited Number of Guests",
    description: "The Number of Guests can be adjusted as request without additional cost."
  },
  {
    icon: "bi bi-clipboard-check",
    title: "Custom Guests Name",
    description: "The Invitation Guest's Name can be customized."
  },
  {
    icon: "bi bi-phone",
    title: "Flexible Access",
    description: "All can access the invitation through the website."
  },
  {
    icon: "bi bi-qr-code-scan",
    title: "Simply Guest Presence",
    description: "Barcode Scan for Confirm The Invitation presence."
  },
  {
    icon: "bi bi-file-earmark-music",
    title: "Music Background",
    description: "Strengthen the impression of your special event with your choice of music on your invitations."
  },
  {
    icon: "bi bi-images",
    title: "Photo Gallery",
    description: "Share your special moment through Photo or Video with your guest."
  },
  {
    icon: "bi bi-envelope-paper-heart",
    title: "Wedding Wishes",
    description: "Leave an invitation to share impressions & messages or prayers for your happy day."
  }
];

const invitationCards = [
  {
    title: 'Akad Nikah',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, molestiae. Impedit, dolorem? Voluptas, optio voluptatibus!',
    image: 'https://picsum.photos/600/300',
    premium: true,
  },
  {
    title: 'Akad Nikah',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, molestiae. Impedit, dolorem? Voluptas, optio voluptatibus!',
    image: 'https://picsum.photos/600/301',
    premium: false,
  },
  {
    title: 'Akad Nikah',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, molestiae. Impedit, dolorem? Voluptas, optio voluptatibus!',
    image: 'https://picsum.photos/601/300',
    premium: false,
  },
  {
    title: 'Akad Nikah',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, molestiae. Impedit, dolorem? Voluptas, optio voluptatibus!',
    image: 'https://picsum.photos/600/302',
    premium: false,
  },
  {
    title: 'Akad Nikah',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, molestiae. Impedit, dolorem? Voluptas, optio voluptatibus!',
    image: 'https://picsum.photos/601/301',
    premium: false,
  },
  {
    title: 'Akad Nikah',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, molestiae. Impedit, dolorem? Voluptas, optio voluptatibus!',
    image: 'https://picsum.photos/602/301',
    premium: false,
  },
]

const tutorialSteps = [
  {
    link: 'here',
    description:'Register to create your invitation account',
    icon: "bi bi-1-circle",
  },
  {
    link: 'Customize your invitation.',
    description: 'Fill in the Event Profile and upload photos/gallery. ',
    icon: "bi bi-2-circle",
  },
  {
    link: 'See our template list',
    description: 'Select Preset / Template. ',
    icon: "bi bi-3-circle",
  },
  {
    link: '',
    description: 'Activate, and your invitation is ready to be distributed.',
    icon: "bi bi-4-circle",
  },
]
 
import { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
// import '../styles/globals.css'
import Link from 'next/link';;
import React from "react"; 
import FooterDashboard from "./Components/Footer/Footer";
import NavbarDashboard from "./Components/Navbar/Navbar";
import DashboardPage from "./Section/Page/Page"; 
import HeaderView from '@/app/Theme/LuxuryTheme/Section/Header/HeaderView';
import HeaderDashboard from './Components/Header/Header';
import useLayout from '../utils/useLayout';

const DashboardView = () => { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
      < >  
        {/* <NavbarDashboard />  */}
        {/* <HeaderDashboard/>
        <DashboardPage /> 
        <FooterDashboard /> */}
        <div className="tw-bg-gradient-to-tr tw-from-pink-100 tw-to-sky-100">
        {header()}
        <div className="tw-relative tw-isolate tw-px-6 tw-pt-14 lg:tw-px-8">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-center tw-gap-x-6  ">
            {heroDescMain()}
            <div className="tw-p-6 lg:tw-block hidden"></div>
            {imgHero()}
          </div>
        </div> 
        {dataSection()}
        {ourFeatures()}
        {howToCreate()}
        {productList()}
        <div className="tw-p-6"></div> 
      </div>

      <div className="tw-text-white tw-text-center tw-py-3 tw-bg-indigo-500">
        <small className="tw-block">© 2024 Nvite Wedding. All Rights Reserved.</small>
        <small className="tw-block">Design by <a className='tw-text-white tw-no-underline hover:tw-underline' href="https://honeydew-marten-892884.hostingersite.com/">NexDev</a>. </small>
        {/* <small className="tw-block">
          Instagram: <a href="https://www.instagram.com/" className="socmed"><i className="bi bi-instagram" /></a>
        </small> */}
      </div>
      </>
    );

    function heroDescMain() {
      return (
        <div className=" tw-py-24 sm:tw-py-40 lg:tw-py-48">
          <div className="tw-hidden sm:tw-mb-8 sm:tw-flex sm:tw-justify-center">
            <div className="tw-relative tw-rounded-full tw-px-3 tw-py-1 tw-text-md tw-leading-6  tw-ring-1 tw-font-semibold tw-text-indigo-600 ">
              #1 Digital Invitation Platform
            </div>
          </div>
  
          <div className="tw-text-center tw-mx-auto tw-max-w-xl">
            <h1 className="tw-text-balance tw-text-5xl tw-font-semibold tw-tracking-tight tw-text-gray-900 sm:tw-text-7xl">Digital Solutions Dream Wedding</h1>
            <p className="tw-mt-8 tw-text-pretty tw-text-lg tw-font-medium tw-text-gray-500 sm:tw-text-xl/8">Create invitations in minutes, download or share your invitations with online RSVP. We are experts in organizing your wedding guests on your special day.</p>
            <p className="tw-mt-8 tw-text-pretty tw-text-xl tw-font-medium tw-text-amber-400 sm:tw-text-xl/4">Invitations become more modern, cool and efficient</p>
            <div className="tw-mt-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6">
            <a href="/WebApp/daftar" className="tw-rounded-md tw-bg-indigo-600 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm tw-hover:tw-bg-indigo-500 tw-focus-visible:tw-outline tw-focus-visible:tw-outline-2 tw-focus-visible:tw-outline-offset-2 tw-focus-visible:tw-outline-indigo-600">Sign up</a>
        {/* <a href="#" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">Learn more <span aria-hidden="true">→</span></a> */}
            </div>
          </div>
        </div>
      );
    }
  
    function imgHero() {
      return (
        <div
          style={{
            marginTop: -40,
            marginBottom: 40,
            width: '600px'
          }}
          className="justify-content-center"
        // className="justify-content-center tw-border-b tw-border-gray-300 tw-shadow-md  tw-bottom-0"
        >
          <div className="cover-image">
            <div className="">
              <img
                style={{
                  width: useLayout().isTabletScreen || useLayout().isPhoneScreen ? "105%" : "160%",
                }}
                src="/image/background/landingPage/device-bg.gif"
                className=""
                alt="Mac Frame"
              />
              <div className="tw-border-b tw-border-gray-400 tw-rounded-lg tw-shadow-md  tw-inset-x-0 tw-bottom-5" />
  
            </div>
          </div>
        </div>
      );
    }
  
    function productList() {
      return (
        <div id="" className="tw-relative tw-isolate tw-m-10 tw-px-10 tw-pt-14 lg:tw-px-12">
          <div className="tw-row tw-justify-center tw-items-center tw-mx-auto">
            <div className="tw-col-md-8 tw-col-10 tw-py-5 tw-text-center">
              <h2 className="tw-text-balance tw-text-5xl tw-font-semibold tw-tracking-tight tw-text-grey-700 sm:tw-text-7xl">How to use our Product</h2>
              <p className="tw-mt-2 tw-text-pretty tw-text-lg tw-font-medium tw-text-gray-500 sm:tw-text-xl/8">We have a wide variety of digital invitations for all occasions!</p>
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3 tw-gap-6 tw-mx-auto">
  
            {invitationCards.map((invitationCard, index) => (
              <div className="tw-items-center tw-flex tw-justify-center ">
                <div className="tw-w-80 tw-p-2 tw-rounded-xl tw-bg-white tw-shadow-2xl tw-ring-1 tw-ring-slate-700/10">
                  <img className="tw-h-40 tw-object-cover tw-rounded-xl" alt="" src={invitationCard.image} />
                  <div className="tw-p-2">
                    <h2 className="tw-text-lg tw-font-bold tw-text-gray-800">{invitationCard.title}</h2>
                    <p className="tw-text-sm  tw-text-gray-600">{invitationCard.description}</p>
                  </div>
                  <div className="tw-m-2 tw-flex tw-justify-between tw-items-center">
                    <a href="#" role="button" className="hover:tw-shadow-lg tw-text-indigo-500 tw-border-2 tw-border-indigo-500 tw-bg-white-500 tw-px-3 tw-py-1 tw-rounded-lg tw-mx-1">preview</a>
                    <a href="#" role="button" className="hover:tw-shadow-lg tw-text-white tw-border-2 tw-border-indigo-500  tw-bg-indigo-500 tw-px-3 tw-py-1 tw-rounded-lg tw-mx-1">preview</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      );
    }
  
    function ourFeatures() {
      return (      
        <div id="fiture" className="tw-relative tw-isolate tw-m-10 tw-mb-10 tw-px-10 tw-pt-14 lg:tw-px-12 ">
          <div className="tw-row tw-justify-center tw-items-center tw-mx-auto">
            <div className="tw-col-md-8 tw-col-10 tw-py-5 tw-text-center">
              <h2 className="tw-text-balance tw-text-5xl tw-font-semibold tw-tracking-tight tw-text-grey-700 sm:tw-text-7xl">Our Features</h2>
              <p className="tw-mt-2 tw-text-pretty tw-text-lg tw-font-medium tw-text-gray-500 sm:tw-text-xl/8">The Nvite Me Digital Invitation website is accompanied by various features that can make it easier for you to invite the people closest to you to your special event.</p>
            </div>
          </div>
          <div className="tw-max-w-6xl tw-mx-auto tw-gap-6 tw-px-3 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 ">
          {/* <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-6"> */}
            {featuresData.map((feature, index) => ( 
              <div key={index} className="tw-bg-white tw-rounded-lg tw-px-6 tw-py-4 hover:tw-shadow-2xl hover:tw-bg-slate-50 tw-shadow-xl tw-ring-1 tw-ring-slate-700/10">
                <div className="tw-flex tw-items-center tw-mb-4">
                    <div className="tw-bg-indigo-100 tw-rounded-full tw-px-3 tw-py-2">
                        <i className={`${feature.icon} tw-text-indigo-500 tw-text-2xl`}></i>
                    </div>
                    <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-ml-4">{feature.title}</h2>
                </div>
                <p className="tw-text-md tw-text-gray-600">{feature.description}</p>
              </div>
              // <div className="tw-items-center tw-flex tw-justify-center">
              //   <div className="tw-flex tw-items-center tw-h-40 tw-p-2 tw-rounded-xl tw-bg-white hover:tw-shadow-2xl tw-shadow-xl">
              //     <div className='tw-flex-shrink-0'>
              //       <div className='tw-bg-indigo-200 tw-p-6 tw-mx-3 tw-rounded-full tw-text-black'> 
              //         <i className={`${feature.icon} tw-text-indigo-500 tw-text-xl`}></i>
              //       </div>
              //     </div>
              //     <div className="tw-p-2 tw-items-center">
              //       <h4 className="tw-text-xl tw-font-bold tw-text-gray-500">{feature.title}</h4>
              //       <p className="tw-text-sm tw-text-gray-600">{feature.description}</p>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
          <div className="tw-p-10"></div> 
        </div>
      );
    }
  
    function header() {
      return (
        <header className={`tw-fixed tw-inset-x-0 tw-top-0 tw-z-50 ${isScrolled ? 'tw-bg-gradient-to-tr tw-from-pink-100 tw-to-sky-200' : ''}`}>
          <nav className="tw-flex tw-items-center tw-justify-between tw-p-6 lg:tw-px-8" aria-label="Global">
            <div className="tw-flex lg:tw-flex-1">
              <a href="#" className="tw--m-1.5 tw-p-1.5">
                <span className="tw-text-indigo-500 font-mono tw-text-2xl tw-font-bold tw-border-indigo-500 hover:tw-text-amber-400 tw-rounded-md">Nvite-Me</span>
              </a>
            </div>
            <div className="tw-flex md:tw-hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="tw--m-2.5 tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2.5 tw-text-gray-700"
              >
                <span className="tw-sr-only">Open main menu</span>
                <svg className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="tw-hidden lg:tw-flex lg:tw-gap-x-12">
              {['Home','Product', 'Company'].map(item => (
                <a key={item} href="#" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900 tw-hover:shadow-md tw-transition-shadow">{item}</a>
              ))}
            </div>
  
            <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end">
              <a href="#" className="tw-rounded-full tw-mx-3 tw-border-2 tw-border-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-border-solid tw-text-indigo-500 tw-shadow-sm hover:tw-bg-indigo-500 hover:tw-text-indigo-500">Login <span aria-hidden="true">→</span></a>
              <a href="#" className="tw-rounded-full tw-bg-indigo-500 tw-border-2 tw-border-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-border-solid tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 hover:tw-text-indigo-500">Sign Up</a>
            </div>
  
            {isMobileMenuOpen && (
              <div className="tw-absolute tw-top-0 tw-inset-x-0 tw-p-2 tw-z-50 tw-bg-white tw-shadow-md ">
                <div className="tw-flex tw-items-center tw-justify-between tw-p-4">
                  <div className="tw-flex tw-items-center tw-justify-start tw-p-4">
                    <h5 className="tw-text-lg tw-font-bold tw-text-gray-900">Menu</h5> 
                  </div>
                  
                  <button
                    type="button"
                    onClick={toggleMobileMenu}
                    className="tw--m-2.5 tw-inline-flex tw-items-center tw-justify-center tw -rounded-md tw-p-2.5 tw-text-gray-700"
                  >
                    <span className="tw-sr-only">Close main menu</span>
                    <svg className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <ul className="tw-space-y-2 ">
                  {['Home','Product', 'Company'].map(item => (
                    <li key={item} className="tw-flex">
                      {/* <i className="bi bi-record-fill tw-text-indigo-500 tw-text-lg  "></i> */}
                      <a href="#" className="tw-text-md tw-font-semibold tw-leading-6 tw-px-4  tw-text-gray-900 tw-hover:shadow-md tw-transition-shadow">{item}</a>
                    </li>
                  ))}
                  <div className="tw-flex tw-items-center">
                    <a href="#" className="tw-rounded-full tw-w-full tw-text-center tw-border-2 tw-border-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-border-solid tw-text-indigo-500 tw-shadow-sm hover:tw-bg-indigo-500 hover:tw-text-indigo-500">Login <span aria-hidden="true">→</span></a>
                  </div>
                  <div className="tw-flex tw-items-center"> 
                    <a href="#" className="tw-rounded-full tw-w-full tw-text-center tw-bg-indigo-500 tw-border-2 tw-border-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-border-solid tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 hover:tw-text-indigo-500">Sign Up</a>
                  </div> 
                </ul>

              </div>
            )}
          </nav>
        </header>
      );
    }
  
    function howToCreate() {
      return (
        <div id="" className="tw-relative tw-p-5 md:tw-py-16 xl:tw-px-[100px] tw-bg-indigo-500">
          <div className="tw-row tw-justify-center tw-items-center tw-mx-auto">
            <div className="tw-col-md-8 tw-col-10 tw-py-5 tw-text-center">
              <h2 className="tw-text-balance tw-text-5xl tw-font-semibold tw-tracking-tight tw-text-grey-700 sm:tw-text-7xl">How to Create Invitation</h2>
              <p className="tw-mt-2 tw-text-pretty tw-text-lg tw-font-medium tw-text-white sm:tw-text-xl/8">We have a wide variety of digital invitations for all occasions!</p>
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            
            <div className="tw-items-center">
                <h2 className="tw-text-lg tw-font-bold tw-text-center tw-text-white tw-mb-2">Look The Video</h2>
                {/* <p className="tw-text-slate-100 tw-text-center tw-mb-4">(Buat Undangan Dengan Mudah)</p> */}
                <div className="tw-w-full tw-h-64 tw-bg-black tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                    {/* <i className="fas fa-play tw-text-white tw-text-4xl"></i> */}
                    <iframe 
                    
                      // width="300%"
                      height="100%"
                      src="https://s3-figma-videos-production-sig.figma.com/video/1395694106045460061/TEAM/02b0/9b49/-df74-462b-8dbd-c7377d5114fd?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0js8~1ydvRLeyRSgzg8kKfxNGh8PouayheDzLfCr7WpCnprBQYYpmNdrHqECtCkLZiBMk-XVqQuZcwITduA51Ed0rVfLdTSd13GqtyTNaiP~j-huV06Uny-Gl3v5TJH38v-CuQbXBTJgkT24Y6eKb9NfWRpfvQPQy8rs33dfHdfECR2IFE-WB31pPvo2WR8LX7H1YXMGmWdfw5SvbLXJzmQpA9ffYKJ-gF905T98T2U9c091EUuhISFr2nZidFHr-sMqyC3f5qFQtoVaJxWkASKkvJVARhcVTJDdGwPfEUpiB0JgVHmzzzaHSSCjvTCtsUIZ-8Xa-Gv7W26zU8Avw__"
                      title="My Iframe"
                      frameBorder="0"
                      allowFullScreen  
                    ></iframe>
                </div>
            </div>
            <div>
              <p className="tw-text-white tw-text-sm tw-text-center tw-mb-6"> An easy way to make invitations, it only takes <span className="tw-font-bold">5 menit</span>  and your invitations can be distributed. </p>
                    
              <ol className="tw-list-decimal tw-list-inside tw-space-y-4">
              {tutorialSteps.map((tutorialStep, index) => (
                <li className="tw-flex tw-items-start">
                    <div className="tw-bg-white tw-rounded-full tw-px-2.5 tw-py-1">
                        <i className={`${tutorialStep.icon} tw-text-indigo-500 tw-text-lg`}></i>
                    </div>
                    <div className="tw-py-2 tw-text-xs tw-px-2 ">
                        <p className="tw-text-white tw-text-sm">{tutorialStep.description} <a href="#" className="tw-text-amber-500 tw-font-bold">{tutorialStep.link}</a></p>
                    </div>
                </li>
              ))}
              </ol>
            </div>
            {/* <div className="tw-row tw-justify-center tw-items-center tw-mx-auto">
              <div className="tw-col-md-8 tw-col-10 tw-py-5 tw-text-center">
                <iframe
                  width="200%"
                  height="500"
                  src="https://s3-figma-videos-production-sig.figma.com/video/1395694106045460061/TEAM/02b0/9b49/-df74-462b-8dbd-c7377d5114fd?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0js8~1ydvRLeyRSgzg8kKfxNGh8PouayheDzLfCr7WpCnprBQYYpmNdrHqECtCkLZiBMk-XVqQuZcwITduA51Ed0rVfLdTSd13GqtyTNaiP~j-huV06Uny-Gl3v5TJH38v-CuQbXBTJgkT24Y6eKb9NfWRpfvQPQy8rs33dfHdfECR2IFE-WB31pPvo2WR8LX7H1YXMGmWdfw5SvbLXJzmQpA9ffYKJ-gF905T98T2U9c091EUuhISFr2nZidFHr-sMqyC3f5qFQtoVaJxWkASKkvJVARhcVTJDdGwPfEUpiB0JgVHmzzzaHSSCjvTCtsUIZ-8Xa-Gv7W26zU8Avw__"
                  title="My Iframe"
                  frameBorder="0"
                  allowFullScreen // Corrected property name
                ></iframe>
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-1 tw-max-h-3xl tw-m-auto tw-gap-6 tw-p-3">
  
              {tutorialSteps.map((tutorialStep, index) => (
                // <div className="tw-items-center tw-flex tw-justify-center">
                  // <div className="tw-bg-white tw-rounded-lg tw-py-6 tw-px-4 hover:tw-shadow-2xl tw-shadow-xl"  >
                  //   <div className="tw-p-2">
                  //     <h5 className="tw-text-md tw-text-center tw-font-bold tw-text-gray-600">{tutorialStep.title}</h5>
                  //     <p className="tw-text-md tw-text-center tw-text-gray-600">{tutorialStep.description}</p>
                  //   </div>
                  // </div>
                  <div key={index} className="tw-bg-white tw-rounded-lg tw-px-6 tw-py-4 hover:tw-shadow-2xl tw-shadow-xl">
                  <div className="tw-flex tw-items-center tw-mb-4"> 
                      <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-ml-4">{tutorialStep.title}</h2>
                  </div>
                  <p className="tw-text-md tw-text-gray-600">{tutorialStep.description}</p>
                </div>
                // </div>
              ))}
            </div> */}
          </div>
        </div>
      );
    }
  
    function dataSection() {
      return (
        <div className="tw-relative tw-p-5 md:tw-py-16 xl:tw-px-[100px] tw-bg-indigo-500">
          <div className="tw-flex tw-items-center tw-justify-center tw-gap-x-6">
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-5 md:tw-py-0 xl:tw-flex-row tw-text-center">
              <h2 className="tw-text-slate-50 tw-text-[28px] md:tw-text-5xl">
                <span>1K</span> <span className="tw-font-extralight">+</span>
              </h2>
              <h3 className="tw-text-slate-50">
                <p className="tw-text-slate-50 tw-text-sm md:tw-text-base">We Immortalize Happy Weddings with</p>
                <p className="tw-text-slate-50 tw-text-sm md:tw-text-base">Magical Touch and Perfection</p>
              </h3>
            </div>
            <div className="tw-p-6"></div>
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-5 md:tw-py-0 xl:tw-flex-row tw-text-center md:tw-text-left">
              <h2 className="tw-text-slate-50 tw-text-[28px] md:tw-text-5xl">
                <span>200K</span> <span className="tw-font-extralight">+</span>
              </h2>
              <h3 className="tw-text-slate-50">
                <p className="tw-text-slate-50 tw-text-sm md:tw-text-base">Guests share moments of happiness</p>
                <p className="tw-text-slate-50 tw-text-sm md:tw-text-base">offline and virtually through Nvite-me</p>
              </h3>
            </div>
          </div>
          <div className="tw-absolute hidden md:tw-inline tw-top-1/2 tw-left-1/2 tw-transform -translate-x-1/2 -translate-y-1/2 h-10 w-[1px] bg-white md:h-14" />
          <div className="tw-absolute md:tw-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[1px] w-96 bg-[#3A35411F]" />
        </div>
      );
    }

  };
  
  export default DashboardView;