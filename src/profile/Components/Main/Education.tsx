import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

interface EducationData {
    name: String,
    start: String,
    end: String
}

const datas: EducationData[] = [
    {
        name: "Universitas Pendidikan Indonesia [Computer Science]",
        start: "June 2016",
        end: "Current"
    },
    {
        name: "Sekolah Menengah Kejuruan Negeri 2 Bandung [Software Engineering]",
        start: "July 2019",
        end: "July 2019"
    }
];

const EducationItem = (props: any) => {

    return (
    <div className="border-b-2 border-white py-4 my-3">
        <div className="py-2 text-xl">
            { props.data.name }
        </div>
        <div className="flex flex-row items-center py-2 text-teal-600">
            <FaCalendarAlt className="mr-4 text-xl" />
            <div>{ props.data.start }</div>
            <span>&nbsp;—&nbsp;</span>
            {
                props.data.end === "Current" ? 
                    <div className="py-1 px-2 bg-teal-600 text-white rounded-md">{ props.data.end }</div>
                    :
                    <div>{ props.data.end }</div>
            }
        </div>
    </div>
    )
};

const Educations = (props: any) => {
    return (
        <div className={ "p-6 text-white " + props.className }>
            <div className="p-2 flex flex-row items-center text-4xl">
                <FaGraduationCap className="text-teal-700 mr-3 text-5xl" /> Education
            </div>
            <div className="flex flex-col">
                { 
                    datas.map((data: EducationData, index: Number) => (
                        <EducationItem
                            key={ index.toString() }
                            data={ data }
                        />
                    )) 
                }
            </div>
        </div>
    )
}

export default Educations;