import { useState,useCallback,useEffect ,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberallowed,setnumberallowed]=useState(false);
  const [charallowed,setcharallowed]=useState(false) 
  const [password,setpassword]=useState("")
  
   // useRef  hook
   const passwordref=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charallowed)  str+="!@#$%^&*()[]{}`~"

    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1)//random index generate karega.

      pass +=str.charAt(char)
    }

    setpassword(pass)
  }
    
  ,[length,
  numberallowed,charallowed,setpassword])//yahan par dependencies ka matlab hai,to uss method  ko optimise karo.memeoise karne ke liye.setpassword dene ka matlab hai cache me rakho.yahan par function ko run karna goal nahi hai,bas function ko memeory le jana hai.. wo useEffect me hoga.
  
    const copypasswordtoclipboard=useCallback(()=>{
      passwordref.current?.select()
     // passwordref.current?.setSelectionRange(0,5)//ye 0yth index se 5th index tak chars ko select karega.
      window.navigator.clipboard.writeText(password)// ye window object hai.window object ke ye sari functionalities hotui hain.bas itna likhne se hi copy ho jaega clipboard me.
    }
  ,[password])//yahan par yahi ek dependy leni hai kynki ultimately password yahi save hai.s

    useEffect(()=> {
      passwordGenerator()
    } ,[length,numberallowed,charallowed,passwordGenerator])//yahan par dependencies ka matlab hai,agar kuchh bhi ched chad ho to function ko dobara se run kar do.

  return (   
    <>                 
      <div className='w-full max-w-md mx-auto shadow-md  
      rounded-lg px-20 my-15 text-violet-500 bg-red-900
      '>
        <h1 className='text-4xl text-center
     text-white my-4'>Password Generator</h1>
       <div className='className="flex shadow
       rounded-lg overflow-hidden mb-4"'>
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordref}


        />
         <button onClick={copypasswordtoclipboard}
          className='outline-none bg-blue-700 text-white
         px-3 py-0.5 shrink-0' > copy </button>


         </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}

            />
            <label>Length:{length} </label>
          </div>

           <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={numberallowed}
            id="numberinput"
            onChange={()=>{
              setnumberallowed((prev)=>!prev);

            }}
            />
            <label htmlfor="numberinput">Numbers</label>
           </div>

           <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={charallowed}
            id="charinput"
            onChange={()=>{
              setnumberallowed((prev)=>!prev);

            }}
            />
            <label htmlfor="charinput">characters</label>
           </div>


        </div>

      </div>
    </>            
  )                                  
}
  
export default App       









