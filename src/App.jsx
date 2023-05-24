import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  //let a = 90

  let [num, setNum] = useState(90)
  // write variable and name of variable with Set
  // useState is the funtion which return variable name and returned function which update the value.
  let handleIncrement = ()=>{
      //if(num>=100)return;
      setNum(num+1)
      // document.getElementById('a').innerText = a     Manully updating in actual DOM
  }
  let handleDecrement = ()=>{
    //if(num>=80)return;
    setNum(num-1)
    // document.getElementById('a').innerText = a     Manully updating in actual DOM
}
  // comparing virtual and actual DOM and then comparing both, after that change in the actual DOM from virtual DOM is called reconsilation.
  return (
    <>
    {/* <Header/>
    <Main/>
    <Footer/> */}

  <div>
    <p>{num}</p>

    <button disabled={num>=100? true:false} onClick={handleIncrement}>+</button> 
    <br></br>
    <button disabled={num<=80? true:false} onClick={handleDecrement}>-</button>
    </div>
    </>  
 /* num>100? console.log('The number is greated than 100') : console.log('The number is less than 100') ... 
        we can use this statement instead of if else statement*/
    
  );

  
}

export default App;
// JSX stand for JavaScript XML
/*XML = markup language 
RULES:
1. Every Tag Must have closing tag or it must be self-closing tag
2. in XML you can define your own tags (Custom Tags) 
3. We can have custom attributes and their custom values

*/

// <></> These empty tags are called as react fagment tags