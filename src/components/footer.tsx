import '../styles/demo.css'
import footerWoman from '../assets/footer woman.png'
import Logo from '../assets/docky 1.png'


function Footer() {
  return (
    <>
        <footer className="my-3 bg-black text-white">
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
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">Linkedin</a>
                </div>
            </div>
            <div><img src={footerWoman} alt="" /></div>
        </footer>
    </>
  )
}

export default Footer