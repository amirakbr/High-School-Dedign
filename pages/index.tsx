import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from './Components/Header/Header'
import { Fragment } from 'react'
import Hero from './Components/Hero/Hero'
import OurRecords from './Components/OurRecords/OurRecords'
import WhyUs from './Components/WhyUs/WhyUs'
import OurSuccess from './Components/OurSuccess/OurSuccess'
import JoinUs from './Components/JoinUs/JoinUs'
import FeedBacks from './Components/FeedBacks/FeedBacks'
import AdditionalClasses from './Components/AdditionalClasses/AdditionalClasses'
import BookNextYear from './Components/BookNextYear/BookNextYear'
import Footer from './Components/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })
import init from './KK'
init(5) ;
export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Hero />      
      <OurRecords />
      <JoinUs />
      <WhyUs />
      <OurSuccess />
      <FeedBacks />
      <AdditionalClasses />
      <BookNextYear />
      <Footer />
    </div>
  )
}