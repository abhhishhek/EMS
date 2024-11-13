import './App.css'
import Navbar from '../src/components/Navbar';
import Sidebar from './components/Sidebar';
import Herosection from './components/Herosection';

function App() {

  return (
    <navbar>
      <div>
        <Navbar/>
        <div className='w-1/3 min-h-[440px] border-[2px] mt-2  bg-slate-400'>
          <Sidebar/>
        </div>
        <div className='w-2/3 min-h-[440px] border-[2px] '>
          <Herosection/>
        </div>
      </div>
    </navbar>
  )
}

export default App
