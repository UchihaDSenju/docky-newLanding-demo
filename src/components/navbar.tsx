import Logo from '../assets/docky 1.png'
import Search from '../assets/search.png'
import '../styles/demo.css'
function Navbar() {
  return (
    <>
        <div className="flex justify-between items-center ">
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className="w-1/3">
                <ul className="flex justify-between">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className="flex items-center space-x-5">
                <a href=""><img src={Search} alt="" /></a>
                <button className="">Sign In</button>
                <button className="green-btn">Sign Up</button>
            </div>
        </div>
    </>
  )
}

export default Navbar