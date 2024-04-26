import React from 'react'
import './Right.css'
import Jobs from "../../Api/jobApi";
import save from '../../../src/assets/Vectorsave.png'

const Right = () => {
    return (
        <>
            <div className='Right_body'>
                <div className="mainrdiv">
                    <h4>Jobs (44)</h4>
                    {Jobs.map((ele) => {
                        return (
                            <div key={ele.id}>

                                <div className="rightDiv">
                                    <div className="rightDiv1">
                                        <div className="rightDiv3">
                                            <div className="rightDiv5">

                                                <div className="rightDiv7"><img src={ele.logo} alt="logo" /></div>
                                                <div className="rightDiv8">
                                                    <div className="rightDiv9 "><h6>{ele.title}</h6></div>
                                                    <div className="rightDiv10"><p>{ele.company} <b>.</b></p>
                                                        <button className='b1'>{ele.skills.one}</button>
                                                        <button className='b2'>{ele.skills.two}</button>
                                                        <button className='b3'>{ele.skills.three}</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rightDiv6"><p>{ele.experience}</p><hr /><p>{ele.jobType}</p><hr /><p><span>Posted on: </span>{ele.postedOn}</p><hr /></div>
                                        </div>
                                        <div className="rightDiv4">
                                            <li>{ele.description}</li>
                                            <li>{ele.description1}</li>
                                        </div>
                                    </div>
                                    <div className="rightDiv2">
                                        <div className="rightDiv11">
                                            <button className='b4'>Apply Now</button>
                                            <button className='b5'>
                                                <img src={save} alt="" />
                                                Save</button>
                                        </div>
                                        <div className="rightDiv12">
                                            <img src={ele.scoreImg} alt="scoreImg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Right