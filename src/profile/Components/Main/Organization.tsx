import { FaUsers, FaCalendarAlt, FaUser } from "react-icons/fa";

interface Position {
    name: String,
    start: String,
    end: String,
    desc: String
};

interface OrganizationsData {
    name: String,
    positions: Position[]
};

const datas: OrganizationsData[] = [
    {
        name: "Google Developer Student Clubs Chapter Universitas Pendidikan Indonesia",
        positions: [
            {
                name: "Member",
                start: "October 2021",
                end: "Current",
                desc: ""
            }
        ],
    },
    {
        name: "Kompetegram (Komunitas Pecinta Teknologi Pemrograman)",
        positions: [
            {
                name: "Member of Research Division",
                start: "October 2021",
                end: "Current",
                desc: ""
            }
        ],
    },
    {
        name: "Unit Kegiatan Mahasiswa Belajar Al-Qur’an Intensif (BAQI) Universitas Pendidikan Indonesia",
        positions: [
            {
                name: "Secretary of Department of Information and Communication Center",
                start: "January 2021",
                end: "December 2021",
                desc: "Establish a system for efficiently reporting and managing department tasks."
            }
        ],
    },
    {
        name: "Japanese Club SMKN 2 Bandung",
        positions: [
            {
                name: "Chairman",
                start: "June 2017",
                end: "June 2018",
                desc: "As a chairman, building and manage the team, also teach the members in our field of language."
            }
        ],
    },
];

const OrganizationsItem = (props: any) => {
    return (
        <div className="border-b-2 border-white py-4 my-3">
            <div className="py-2 text-xl">
                { props.data.name }
            </div>
            <div className="flex flex-col items-start">
                {
                    props.data.positions.map((position: Position) => (
                        <div className="p-6 py-3 my-2 border-l-2 border-white rounded-xl">
                            <div className="flex flex-row items-center my-2 text-teal-600">
                                <FaUser className="mr-4 text-xl" />
                                <div>{ position.name }</div>
                            </div>
                            <div className="flex flex-row items-center my-2 text-teal-600">
                                
                                <FaCalendarAlt className="mr-4 text-xl" />
                                <div>{ position.start }</div>
                                <span>&nbsp;—&nbsp;</span>
                                {
                                    position.end === "Current" ? 
                                        <div className="current-tag">{ position.end }</div>
                                        :
                                        <div>{ position.end }</div>
                                }
                            </div>
                            <div className="mt-4">{ position.desc }</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

const Organizations = (props: any) => {
    return (
        <div className={ "p-6 text-white " + props.className }>
            <div className="p-2 flex flex-row items-center text-4xl">
                <FaUsers className="text-teal-700 mr-3 text-5xl" /> Organizations
            </div>
            <div className="flex flex-col">
                { 
                    datas.map((data: OrganizationsData, index: Number) => (
                        <OrganizationsItem
                            key={ index.toString() }
                            data={ data }
                        />
                    )) 
                }
            </div>
        </div>
    )
}

export default Organizations;