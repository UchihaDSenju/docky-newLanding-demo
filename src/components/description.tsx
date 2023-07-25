import '../styles/demo.css'
import woman from '../assets/woman-wearing-apron-sits-desk-front-window-smiling copy 1.png'
function Description() {
  return (
    <>
        <div className="desc-container justify-center items-center my-8">
            <div className="justify-center items-center bg-slate-100 rounded-l-[45px] p-10 text-center">
              <h1 className="text-5xl  font-bold blue-text">Streamline Your Hospital <br></br> Management with Docky</h1>
              <p className="text-[#434343] text-lg mt-4">As a hospital owner, you know how challenging it can be to manage everything from patient records to scheduling staff. A comprehensive solution that simplifies and automates many of the tasks</p>
            </div>
            <div className="bg-slate-400 h-[450px] rounded-[45px]">
              <img className="rounded-[45px] h-full" src={woman} alt="woman" />
            </div>
        </div>
    </>
  )
}

export default Description