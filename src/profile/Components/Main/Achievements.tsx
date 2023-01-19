import { FaTrophy, FaCalendarAlt } from "react-icons/fa";

interface AchievementsData {
    name: String,
    date: String,
    desc: String

}

const datas: AchievementsData[] = [
    {
        name: "Second Winner of Kanaji Competition",
        date: "2017",
        desc: "At Fesbukan 6, Pusat Studi Bahasa Jepang, Fakultas Ilmu Budaya Universitas Padjadjaran"
    },
];

const EducationItem = (props: any) => {

    return (
    <div className="border-b-2 border-white py-4 my-3">
        <div className="py-2 text-xl">
            { props.data.name }
        </div>
        <div className="flex flex-row items-center py-2 text-teal-600">
            <FaCalendarAlt className="mr-4 text-xl" />
            <div>{ props.data.date }</div>
        </div>
        <div>
            { props.data.desc }
        </div>
    </div>
    )
};

const Achievements = (props: any) => {
    return (
        <div className={ "p-6 text-white " + props.className }>
            <div className="p-2 flex flex-row items-center text-4xl">
                <FaTrophy className="text-teal-700 mr-3 text-5xl" /> Achievements
            </div>
            <div className="flex flex-col">
                { 
                    datas.map((data: AchievementsData, index: Number) => (
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

export default Achievements;