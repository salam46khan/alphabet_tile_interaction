import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', ,'r', 's', 't', 'u' ,'v', 'w', 'x', 'y', 'z']
  const [clicked, setClicked] = useState([])

  const handleClick = (letter) => {

    if (clicked.length >= 2) {
      const sameValueCheck = clicked.slice(-3);

      if (sameValueCheck[0] === sameValueCheck[0] && sameValueCheck[1] === sameValueCheck[0] && sameValueCheck[2] === sameValueCheck[0]) {
        setClicked(clicked.splice(clicked.length - 3, 3, '_'))
      }
    }
    setClicked([...clicked, letter]);

  };

  console.log('letter:', clicked);
  return (
    <div className='min-h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500 py-10'>
      <div className='py-5'>
        <p className='text-center font-bold text-2xl'>Alphabet Tile Interaction</p>
      </div>
      <div className='w-full md:w-1/2 bg-slate-900/20 shadow-lg shadow-white/20 mx-auto rounded-lg p-5'>
        <div className='bg-slate-200 p-4 rounded-md overflow-hidden'>
          {
            clicked?.map((click, index) =>
              <p className='inline-block' key={index}>{click.toUpperCase()}</p>
            )
          }
        </div>
        <div className='mt-5'>
          <div className='flex flex-wrap gap-2'>
            {
              alphabet?.map((alpha, index) => <button key={index} className='bg-slate-200 shadow-inner py-2 px-6 min-w-[70px] shadow-black rounded' onClick={() => handleClick(alpha, index)}>{alpha.toUpperCase()}</button>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
