import img from '../images/profile.jpeg';
import tw from '../images/twitter.png'
import fb from '../images/facebook.png'
import insta from '../images/insta.png'
import li from '../images/linkedin.png'
import git from '../images/github.png'
import email from '../images/email.png'

export default function Card() {
    return (
        <div className="card">
            <img src={img} className="img"/>

            <div className="info">
                <div className="name">Pragnya Deshpande</div>
                <div className="student">Student</div>
            </div>
            
            <div className="email">
                <img src={email} className="emim"/>
                pragnya.deshpande@yahoo.com
            </div>

            <div className="content">
                <div className="about">About</div>
                I am a Student at Manipal Institute of Technology and have interned at Fidelity investments.
                I have been a part of ADG (Apple Developers Group) in my college which is an app dev club for 
                iOS products. Being a student allows one to explore various other courses which are not a part 
                of the main curriculum which led me to completing around six courses with an average of around 
                90% in each course, on coursera, a platform for 
                learning new subjects. These are a few of my accomplishments in the past years.
                <div className="interests">Interests</div>
                I happen to have a great deal of interest in developement as well as data science. Although 
                I still am trying to find my career path, my interest leans more towards development and I am looking 
                forward to the exciting new opportunities that life presents me with. 
            </div>

            <div className='footer'>
                <a href="https://twitter.com/PragnyaDesh">
                    <img src={tw} />
                </a>
                <a href="https://www.facebook.com/pragnya.deshpande">
                    <img src={fb}/>
                </a>
                <a href="https://www.instagram.com/_pragnyadesh_/">
                    <img src={insta}/>
                </a>
                <a href="https://www.linkedin.com/in/pragnya-deshpande-00a9b41a9/">
                    <img src={li}/>
                </a>
                <a href="https://github.com/PragnyaDesh">
                    <img src={git}/>
                </a>
            </div>
        </div>
    )
}