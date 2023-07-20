import Acccordian from "./faq-accordian"
import { accordianData } from "./jsonData/data"
// import {useState} from 'react'

// const[open, setOpen] = useState(0);

// const toggle = (index: number) => {
//   if(open != index) return false
//   else{
//     setOpen(index)
//     return true
//   }
// }

function Faq() {
  return (
    <>
        <div className="mt-5">

          <h1 className="text-center text-5xl font-bold text-green-300">FAQ in Home Page</h1>
          
            {accordianData.map((data, index) => {
                return(
                    <Acccordian isAccordianOpened={false} question={data.question} answer={data.answer} key={index} />
                )
            })}
        </div>
    </>
  )
}

export default Faq