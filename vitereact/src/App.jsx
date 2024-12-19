
import Chai from './chai'
function App() {
  
//either <div></div> or <>empty tags </> can be used to return multi elemnts.
  return (//h1 tag me jo {} hai ,usme sirf evaluated value hi likh sakte hain,javascript ka koi statement ya code nhi likh sakte.
   <>
   <h1>hello react with vite| ashu</h1>
   <Chai/>
    <h2> i m h2 tag.</h2>
    <p>Lorem, ipsum dolor.</p>
  </>
  )
// <Chai/>//is Chai function ko chai.jsx file se import kiya ja raha hai, aur fir is poore App.jsx ko main.jsx me export kiya aega.yani multiple exports of the same file ho raha hai.
}

export default App

