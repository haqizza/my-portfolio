import photo from '../../assets/photo.jpg';
import { FaBriefcase, FaEnvelope, FaHome, FaLinkedin } from 'react-icons/fa';

const Profile = (props:any) => {
    return (
        <div className={ props.className }>
            <div className="py-4 border-b-2 border-white">
                <div id="prof" className="">
                    <img src={ photo } alt="Avatar" className="w-1/2 mx-auto" />
                </div>
                <div>
                    <h3 className="p-2 text-center font-medium">Muhammad Izzatul Haq</h3>
                    <div className="p-2 flex flex-row items-center">
                        <FaBriefcase className="text-teal-700 mr-3" /> Student
                    </div>
                    <div className="p-2 flex flex-row items-center">
                        <FaHome className="text-teal-700 mr-3" /> Bandung, Indonesia
                    </div>
                    <a href="mailto:haqizza@gmail.com" target="blank" >
                        <div className="p-2 flex flex-row items-center">
                            <FaEnvelope className="text-teal-700 mr-3" /> haqizza@gmail.com
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/haqizza/">
                        <div className="p-2 flex flex-row items-center">
                            <FaLinkedin className="text-teal-700 mr-3" /> linkedin.com/in/haqizza
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Profile;