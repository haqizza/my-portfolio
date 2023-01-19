import { FaGlobe, FaStar } from 'react-icons/fa';

interface LanguageData {
    name: String,
    native: Boolean
}

const datas: LanguageData[] = [
    { 
        name: "Indonesian",
        native: true
    },
    { 
        name: "Sundanese",
        native: true
    },
    { 
        name: "Arabic",
        native: false
    },
    { 
        name: "English",
        native: false
    },
    { 
        name: "Japanese",
        native: false
    },
]

const Languages = (props:any) => {
    return (
        <div className={ "py-4 border-b-2 border-white " + props.className }>
            <div className="p-2 flex flex-row items-center">
                <FaGlobe className="text-teal-700 mr-3" /> Languages
            </div>
            <div className="flex flex-row flex-wrap justify-start">
                { 
                    datas.map((data: LanguageData) => (
                        data.native ?
                            <div className="flex flex-row py-2 px-3 m-2 bg-teal-700 rounded-xl">{ data.name }<FaStar/></div>
                            :
                            <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">{ data.name }</div>
                    )) 
                }
            </div>
        </div>
    )
}


export default Languages;