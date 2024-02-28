import React from 'react'
import Head from './Components/Newassign/Head'
import Body from './Components/Newassign/Body'
import Content from './Components/Newassign/Content'
import Connect from './Components/Newassign/Connect'
import Footer from './Components/Newassign/Footer'
import Top from './Components/Newassign/Top'

const App = () => {
  return (
    <div>
      <Top/>
      <Head/>
      <Body/>
      <Content/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default App