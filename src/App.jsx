import React from 'react'
import Nav from './components/nav/Nav'
import FirstSec from './components/firstSec/FirstSec'
import FirstSec2 from './components/firstSec2/FirstSec2'
import WhyChoose from './components/whyChoose/WhyChoose'
import Articles from './components/articles/Articles'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <div className=' h-100v bg-articlebg'>
      <Nav />
      <div className="flex flex-col">
        <FirstSec />
        <FirstSec2 />
      </div>
      <WhyChoose />
      <Articles />
      <Footer />
    </div>
  )
}

export default App