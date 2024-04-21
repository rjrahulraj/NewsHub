import './App.css'
import Head from './components/Head'
import Navbar from './components/Navbar'
import {Routes ,Route} from 'react-router-dom'
import Newspage from './components/Newspage'
import Technewspage from './components/page-components/Technewspage'
import Busnewspage from './components/page-components/Busnewspage'
import Healthnewspage from './components/page-components/Healthnewspage'
import Sportnewspage from './components/page-components/Sportnewspage'


function App() {
  return (
    <div className='body'>
      <Navbar></Navbar>
      <Head></Head>
      <Routes>
          <Route path='/' element={<Newspage></Newspage>}></Route>
          <Route path='/technology' element={<Technewspage></Technewspage>}> </Route>  
          <Route path='/business' element={<Busnewspage></Busnewspage>}> </Route>  
          <Route path='/health' element={<Healthnewspage></Healthnewspage>}> </Route>  
          <Route path='/sport' element={<Sportnewspage></Sportnewspage>}> </Route>  
      </Routes>
    </div>
  )
}

export default App
