import '../styles/demo.css'
import woman from '../assets/woman-wearing-apron-sits-desk-front-window-smiling copy 1.png'
function Description() {
  return (
    <>
        <div className="desc-container justify-center items-center">
            <div className="flex justify-center items-center bg-slate-700 h-[200px] rounded-l-[45px]">First card</div>
            <div className="bg-slate-400 h-[308px] rounded-[45px]">
              <img src={woman} alt="" />
            </div>
        </div>
    </>
  )
}

export default Description