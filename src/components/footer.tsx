import '../styles/demo.css'
import footerWoman from '../assets/footer woman.png'
import Logo from '../assets/docky 1.png'
import Instagram from '../assets/footer_link_logo/basil_instagram-solid.png'
import Twitter from '../assets/footer_link_logo/formkit_twitter.png'
import Facebook from '../assets/footer_link_logo/ic_baseline-facebook.png'
import Linkedin from '../assets/footer_link_logo/icon-park-solid_instagram-one.png'


function Footer() {
  return (
    <>
        <footer className="mt-3 bg-black text-white">
            <div className="grid grid-cols-3 mt-5 p-10">
                <div className="logo">
                    <div><img src={Logo} alt="" /></div>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy and Policy</a>
                    <a href="#">Copyright</a>
                </div>
                <div className="menu">
                    <h1 className="text-2xl font-bold">Menu</h1>
                    <a href="#">Product</a>
                    <a href="#">Feature</a>
                    <a href="#">Pricing</a>
                    <a href="#">About Us</a>
                </div>
                <div className="social">
                    <h1 className="text-2xl font-bold">Social</h1>
                    <a className='social-lnk' href="#"><img src={Facebook} alt="" /> <div>Facebook</div> </a>
                    <a className='social-lnk' href="#"><img src={Twitter} alt="" /> <div>Twitter</div> </a>
                    <a className='social-lnk' href="#"><img src={Instagram} alt="" /> <div>Instagram</div> </a>
                    <a className='social-lnk' href="#"><img src={Linkedin} alt="" /> <div>Linkedin</div> </a>
                </div>
            </div>
            <div><img src={footerWoman} alt="Woman here" /></div>
        </footer>
    </>
  )
}

export default Footer