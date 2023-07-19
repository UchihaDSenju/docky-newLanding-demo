import '../styles/demo.css'
import footerWoman from '../assets/footer woman.png'
function Footer() {
  return (
    <>
        <footer className="my-3 bg-black text-white">
            <div className="grid grid-cols-3">
                <div className="logo">
                    <div>logo</div>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy and Policy</a>
                    <a href="#">Copyright</a>
                </div>
                <div className="menu">
                    <h4>Menu</h4>
                    <p>Product</p>
                    <p>Feature</p>
                    <p>Pricing</p>
                    <p>About Us</p>
                </div>
                <div className="social">
                    <h1>Social</h1>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                </div>
            </div>
            <div><img src={footerWoman} alt="" /></div>
        </footer>
    </>
  )
}

export default Footer