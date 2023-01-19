import { FaCog } from 'react-icons/fa';

const datas: String[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "Vue.js",
    "Nuxt",
    "React",
    "PHP",
    "Laravel",
    "Tailwind CSS",
    "C/C++",
    "Python",
    "Machine Learning",
]
const Skills = (props:any) => {

    return (
        <div className={ "py-4 border-b-2 border-white " + props.className }>
            <div className="p-2 flex flex-row items-center">
                <FaCog className="text-teal-700 mr-3" /> Skills
            </div>
            <div className="flex flex-row flex-wrap justify-start">
                { 
                    datas.map((data: String) => (
                        <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">{ data }</div>
                    )) 
                }
            </div>
        </div>
    )
}


export default Skills;