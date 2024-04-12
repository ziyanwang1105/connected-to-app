import linkedInImage from '../assets/linkedin.svg';
import githubImage from '../assets/github.svg';
import './LGLinks.css';

const LGLinks = () =>{

    return(
        <>
            <div className='links'>
                <a href="https://github.com/ziyanwang1105/full-stack-project-linkedin-clone" class="github" target="_blank">
                    <img src={githubImage} alt="github" class = "click_icon" />
                </a>
                <a href="https://www.linkedin.com/in/zwang01/" class="linkedin" target="_blank">
                    <img src={linkedInImage} alt="linkedin" class="click_icon" />
                </a>
            </div>
        </>
    );
};

export default LGLinks;
