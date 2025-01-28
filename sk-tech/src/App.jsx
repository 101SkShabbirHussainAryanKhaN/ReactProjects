import { useState } from 'react'
import './App.css'
import UserCards from './Components/UserCards'
import shabbir from './assets/sk.jpg'
import shakir from './assets/Bismillah.png'
import sabir from './assets/ska.jpg'
import qamar from './assets/skb.jpg'
import sajjad from './assets/skc.jpg'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <aside>SkTech Gamechans</aside>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
          </ul>

        </nav>
      
        <div className="cont">
        <h1>Code Contributors</h1>
        </div>
        <div className="user">
        
        <UserCards name="Shabbir Hussain" desc='Description about SK Shabbir Hussain' image={shabbir}/>
        <UserCards name='Shakir Ali' desc='Description about SK Shakir Ali' image={shakir}/>
        <UserCards name='Sabir Ali' desc='Description about Sabir Ali' image={sabir}/>
        <UserCards name='Qamar Abbas' desc='Description about Qamar Abbas' image={qamar}/>
        <UserCards name='Sajjad Ali' desc='Description about Sajjad Ali' image={sajjad}/>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <div className="foot">
      <Footer />
      </div>
    </>
  )
}

export default App
