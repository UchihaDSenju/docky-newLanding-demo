import {Collapse} from 'react-collapse'
import Chevron from '../assets/chevron-down.png'

type Props = {
    question: string,
    answer: string,
    isAccordianOpened: boolean
}

function Acccordian(props: Props) {
  return (
    <>
        <div className="accordian text-center w-[55%] ml-auto mr-auto pt-5 border-b-orange-300">
            <div className="flex justify-between items-center border-b-orange-300">
              <div className="text-lg font-semibold">{props.question}</div>
              <span><a href="#"><img src={Chevron} alt="Chevron" /></a></span>
            </div>
            <Collapse isOpened = {false}>
              {props.answer}
            </Collapse>
        </div>
    </>
  )
}

export default Acccordian