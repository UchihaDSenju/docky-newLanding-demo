
import Doctor from '../assets/man-with-stethoscope-his-shirt-is-standing-front-brown-door copy 1.png'

function Hero() {
  return (
    <>
        <div className="grid grid-cols-2">
            <div><img src={Doctor} alt="man with stethoscope" /></div>
            <div>Content 2</div>
        </div>
    </>
  )
}

export default Hero