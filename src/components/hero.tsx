import Doctor from '../assets/man-with-stethoscope-his-shirt-is-standing-front-brown-door copy 1.png'
import '../styles/demo.css'
function Hero() {
  return (
    <>
        <div className="grid grid-cols-2">
            <div><img src={Doctor} alt="man with stethoscope" /></div>
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl blue-text font-bold">Effortless Management</h1>
              <h1 className="text-5xl text-green-400 font-bold">For Exceptional Healthcare Experiences</h1>
              <br />
              <p>DOCKY can help you streamline and automate various aspects of healthcare administration — right from patient registration, database management, lab reporting, electronic health records, clinic management and more.</p>
            </div>
        </div>
    </>
  )
}

export default Hero