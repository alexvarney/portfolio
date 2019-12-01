import React from 'react'
import styles from './Page3.module.css'
import classNames from 'classnames'
import ContactForm from '../ContactForm'
import GithubSvg from '../../assets/github.svg'
import LinkedinSvg from '../../assets/linkedin.svg'

export default function Page3() {
    return (
        <div id="about" className={styles.page}>
            <div className="container">
                <h1>About Me</h1>
                <div className="row">
                    <div className={classNames("col-md-7", styles.aboutText)}>
                        <p>
                            I’m Alexander Varney, a full-stack web developer currently living in Waterloo, ON, Canada. I’m currently learning React and the rest of the MERN stack to build interactive full-stack applications.  
                        </p>
                        <p>
                            I’m a lover of learning and passionate about technology. I’ve been writing code for almost 10 years and have been casually making websites for nearly 5. When I’m not working I like to play games, take photos and attend indie-rock shows.
                        </p>
                    </div>
                    <div id="contact" className="col-md-5">
                        <ContactForm />
                    </div>
                </div>
                <div className="row">
                    <div className={classNames("col-md-7", styles.aboutText)}>
                        <h2>Skills</h2>
                        <h3>Frontend:</h3>
                        <ul>
                            <li>Responsive design with HTML5, CSS3, Javascript</li>
                            <li>React with state management using Redux</li>
                            <li>Working knowledge of Bootstrap & jQuery</li>
                        </ul>
                        <h3>Backend:</h3>
                        <ul>
                            <li>Node, Express, Mongoose</li>
                            <li>Hosting with AWS, Heroku, and Docker</li>
                        </ul>
                        <h3>Misc:</h3>
                        <ul>
                            <li>Git, Photoshop, Figma</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h2>Links</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/varneyalex/">
                                        <img src={LinkedinSvg} alt="Linkedin logo"/>
                                    </a>
                                </div>
                                <div target="_blank" rel="noopener noreferrer" className="col-4">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexvarney">
                                        <img src={GithubSvg} alt="Github logo" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=14R9QL9GyZVMHm4k1XASP-VzfDoEDMUyr">View my resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
