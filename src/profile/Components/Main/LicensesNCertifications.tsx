import { FaCalendarAlt, FaCertificate } from "react-icons/fa";


interface LicensesNCertificationsData {
    name: String,
    issued: String,
    institution: String,
    exp: String,
    certUrl: String
};

const datas: LicensesNCertificationsData[] = [
    {
        name: "Belajar Jaringan Komputer untuk Pemula",
        institution: "Dicoding Indonesia",
        issued: "January 7, 2023",
        exp: "January 7, 2026",
        certUrl: "https://www.dicoding.com/certificates/JLX1L9JMGX72"
    },
    {
        name: "Belajar Dasar-Dasar DevOps",
        institution: "Dicoding Indonesia",
        issued: "January 7, 2023",
        exp: "January 7, 2026",
        certUrl: "https://www.dicoding.com/certificates/N9ZO490MDZG5"
    },
    {
        name: "Microsoft Certified: Azure Data Fundamentals",
        institution: "Microsoft",
        issued: "January 2022",
        exp: "No Expiration Date",
        certUrl: "https://www.credly.com/badges/18b9cb9a-6e0a-4bfe-8364-83f95ee08487"
    },
    {
        name: "Microsoft Certified: Power Platform Fundamentals",
        institution: "Microsoft",
        issued: "December 2021",
        exp: "No Expiration Date",
        certUrl: "https://www.credly.com/badges/5014d77a-73d6-4afb-b602-7f0ccde3f7d1"
    },
    {
        
        name: "Microsoft Certified: Azure AI Fundamentals",
        institution: "Microsoft",
        issued: "October 2021",
        exp: "No Expiration Date",
        certUrl: "https://www.credly.com/badges/e37faf8c-2bd3-49a7-8956-5a2e7c4a5115"
    },
    {
        
        name: "Belajar Machine Learning untuk Pemula",
        institution: "Microsoft",
        issued: "July 2, 2021",
        exp: "July 2, 2021",
        certUrl: "https://www.dicoding.com/certificates/QLZ98JLL2X5D"
    },
    {
        
        name: "Belajar Dasar Visualisasi Data",
        institution: "Microsoft",
        issued: "June 10, 2021",
        exp: "June 10, 2024",
        certUrl: "https://www.dicoding.com/certificates/QLZ98JLL2X5D"
    },
    {
        name: "Japanese-Language Proficiency (N4)",
        institution: "",
        issued: "December 2019",
        exp: "December 2024",
        certUrl: ""
    },
];

const LicensesNCertificationsItem = (props: any) => {
    return (
        <div className="border-b-2 border-white py-4 my-3">
            <div className="py-2 text-xl">
                {
                    props.data.certUrl === "" ?
                        props.data.name
                        :
                        <a href={ props.data.certUrl } target="blank" className="underline underline-offset-4">
                            { props.data.name }
                        </a>
                }
            </div>
            <div className="flex flex-col items-start">
                <div className="flex flex-row items-center my-2 text-teal-600">
                    
                    <FaCalendarAlt className="mr-4 text-xl" />
                    <div>{ props.data.issued }</div>
                    <span>&nbsp;—&nbsp;</span>
                    {
                        props.data.exp === "Current" ? 
                            <div className="current-tag">{ props.data.exp }</div>
                            :
                            <div>{ props.data.exp }</div>
                    }
                </div>
            </div>
        </div>
    )
};

const LicensesNCertifications = (props: any) => {
    return (
        <div className={ "p-6 text-white " + props.className }>
            <div className="p-2 flex flex-row items-center text-4xl">
                <FaCertificate className="text-teal-700 mr-3 text-5xl" /> Licenses & Certifications
            </div>
            <div className="flex flex-col">
                { 
                    datas.map((data: LicensesNCertificationsData, index: Number) => (
                        <LicensesNCertificationsItem
                            key={ index.toString() }
                            data={ data }
                        />
                    )) 
                }
            </div>
        </div>
    )
}

export default LicensesNCertifications;