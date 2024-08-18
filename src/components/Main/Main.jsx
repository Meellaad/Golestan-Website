import React from 'react'

import Banner from '../Banner/Banner'
import Introduction from '../Introduction/Introduction'
import Rice from '../Rice/Rice'
import Tea from '../Tea/Tea'
import Pistachio from '../Pistachio/Pistachio'
import Magazine from '../Magazine/Magazine'
import Media from '../Media/Media'
import Social from '../Social/Social'

import './Main.css'

const Main = () => {
  return (
    <main>
      <Banner />
      <Introduction />
      <Rice />
      <Tea />
      <Pistachio />
      <Magazine />
      <Media />
      <Social />
    </main>
  )
}

export default Main