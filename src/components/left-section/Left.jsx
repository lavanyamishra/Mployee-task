import React from 'react'
import s1 from '../../../src/assets/grid-5s1.png'
import s2 from '../../../src/assets/task-squares2.png'
import s3 from '../../../src/assets/receipt-adds3.png'
import s4 from '../../../src/assets/Ellipse 12s4.png'
import s5 from '../../../src/assets/Ellipse 12s5.png'
import s6 from '../../../src/assets/dollar-squares6.png'
import s7 from '../../../src/assets/peoples7.png'
import img12 from '../../../src/assets/Frameimg12.png'
import img13 from '../../../src/assets/Vector 587img13.png'
import settings from '../../../src/assets/Settingssettings.png'
import help from '../../../src/assets/help, questionhelp.png'
import './Left.css'
const Left = () => {
    return (
        <div className='left_body'>
            <div className="divs1">
                <div className="line1">
                    <img src={s1} alt="" className='s1' />
                    <p>Job Recommendation Tool</p>
                </div>
                <div className="line1">
                    <img src={s2} alt="" className='s2' />
                    <p>History</p>
                </div>
                <div className="line2" >
                    <img src={s3} alt="" className='s3' />
                    <p>Saved Jobs</p>
                    <p>^</p>
                </div>
                <div className="line3">
                    <img src={s4} alt="" className='s4' />
                    <p>UI/UX Designer</p>
                </div>
                <div className="line1">
                    <img src={s5} alt="" className='s5' />
                    <p>Web Developer</p>
                </div>
                <div className="line1">
                    <img src={s5} alt="" className='s5' />
                    <p>Analyst</p>
                </div>
                <div className="line1">
                    <img src={s5} alt="" className='s5' />
                    <p>Lorem lpsum</p>
                </div>
                <div className="line1">
                    <img src={s6} alt="" className='s6' />
                    <p>Plans(Current)</p>
                </div>
                <div className="line1">
                    <img src={s7} alt="" className='s7' />
                    <p>Manage Profiles</p>
                </div>
            </div>
            <div className="divs2">
                <div className="line7">
                    <p>Help & Support</p>
                    <div className="line8">
                        <img src={settings} alt="" className='s1' />
                        <p>Settings</p>
                    </div>
                    <div className="line9">
                        <img src={help} alt="" className='s1' />
                        <p>Help Center</p>
                    </div>
                </div>
                <div className="div10">
                    <h4>Current Plan: Free</h4>
                </div>
                <div className="div11">
                    <div className="img"><img src={img12} alt="" /></div>
                    <div className="text"><h4>UpGrade to Pro</h4><p>Get all features </p></div>
                    <div className="symbol"><img src={img13} alt="" /></div>
                </div>

            </div>

        </div>
    )
}

export default Left