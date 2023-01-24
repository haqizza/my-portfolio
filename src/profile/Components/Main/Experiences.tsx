import { FaCalendarAlt, FaBriefcase, FaUserTie } from "react-icons/fa";

interface Position {
    name: String,
    start: String,
    end: String,
    desc: String[]
};

interface ExperienceData {
    name: String,
    positions: Position[]
};

const datas: ExperienceData[] = [
    {
        name: "Direktorat Sistem dan Teknologi Informasi Universitas Pendidikan Indonesia",
        positions: [
            {
                name: "Web Developer",
                start: "November 2022",
                end: "January 2023",
                desc: [
                    "Developed Trace Study statistical dashboard of alumnus of Universitas Pendidikan Indonesia",
                    "Developed monolithic organization membership application with Laravel and MySQL",
                    "Leveraged knowledge in Laravel, PHP, MySQL, Tailwind CSS, HTML/CSS, and Git."
                ]
            }
        ]
    },
    {
        name: "Sinar Karya Nusa Profile Website and CMS",
        positions: [
            {
                name: "Front-End Web Developer",
                start: "March 2022",
                end: "May 2022",
                desc: [
                    "Project to create a profile website and a CMS to customized it’s content for Sinar Karya Nusa.",
                    "Leveraged knowledge in Nuxt.js, Vue.js, JavaScript, Node.js, REST API, Tailwind CSS, HTML/CSS, and Git."
                ]
            }
        ]
    },
    {
        name: "Pusat Unggulan Pelatihan dan Penelitian Kreativitas melalui Sains, Teknologi, Rekayasa, Dan Matematika (Center of Excelence in Creativity Training and Research Center on STEM/CTR-STEM) Universitas Pendidikan Indonesia",
        positions: [
            {
                name: "Web Developer",
                start: "March 2020",
                end: "Current",
                desc: [
                    "Built STEM Education Center’s WordPress website."
                ]
            },
            {
                name: "Instructor",
                start: "July 2020",
                end: "Current",
                desc: [
                    "As an instructor to educate STEM education to the student at various levels of education."
                ]
            }
        ]
    },
    {
        name: "Tarbiyah Sunnah Learning",
        positions: [
            {
                name: "Web Developer",
                start: "December 2019",
                end: "Current",
                desc: [
                    "Build Tarbiyah Sunnah Learning website with NuxtJS and Strapi. (2021)",
                    "Leveraged knowledge in Nuxt.js, Strapi, Vue.js, JavaScript, Node.js, HTML/CSS, and Git."
                ]
            }
        ]
    },
    {
        name: "Collaborative Problem-Solving Web Application (Joint Research UPI and IPB)",
        positions: [
            {
                name: "Front-End Web Developer",
                start: "August 2019",
                end: "October 2019",
                desc: [
                    `The project is to create a web application to test some unique questions for Collaborative Problem-Solving type
                    questions for middle-high school and high school, and it is automatically graded a student's cognitive and
                    collaborative ability based on Natural Language Processing.`,
                    "Leveraged knowledge in Vue.js, JavaScript, Node.js, Bootstrap, HTML/CSS, and Git."
                ]
            }
        ]
    },
];

const ExperienceItem = (props: any) => {

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
                            <FaUserTie className="mr-4 text-xl" />
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
                        <ul className="list-disc mt-4">
                            {
                                position.desc.map((item: String) => (
                                    <li className="my-1">{ item }</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </div>
    )
};


const Experiences = (props: any) => {
    return (
        <div className={ "p-6 text-white " + props.className }>
            <div className="p-2 flex flex-row items-center text-4xl">
                <FaBriefcase className="text-teal-700 mr-3 text-5xl" /> Experiences
            </div>
            <div className="flex flex-col">
                { 
                    datas.map((data: ExperienceData, index: Number) => (
                        <ExperienceItem
                            key={ index.toString() }
                            data={ data }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Experiences;