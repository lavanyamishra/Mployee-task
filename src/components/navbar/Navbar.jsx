import React from 'react';
import logo from '../../assets/Mask groupnav3.png';
import New from '../../assets/Frame 14nav1.png';
import Photo from '../../assets/image 8nav2.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="navbar-right">
                <div className="div1">
                    <p>Resume Scan</p>
                    <img src={New} alt="" className='New' />
                </div>
                <div className="div2">
                    <p>Resume Keywords</p>

                </div>
                <div className="div3">
                    <p>Resume Services</p>

                </div>
                <div className="div4">
                    <p>Carrier Blogs</p>

                </div>
                <div className="div5">
                    <p>About Us</p>

                </div>
                <div className="div6">
                    <img src={Photo} alt="" className='photo' />
                    <select>
                        <option>
                            Divyanshu
                        </option>
                        <option>
                            ^
                        </option>
                    </select>

                </div>


            </div>
        </div>
    )
}

export default Navbar