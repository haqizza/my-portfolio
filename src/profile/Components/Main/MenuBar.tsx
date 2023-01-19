import Educations from "./Education";
import Experiences from "./Experiences";
import Organizations from "./Organization";
import LicensesNCertifications from "./LicensesNCertifications";
import Achievements from "./Achievements";


const MenuBar = (props: any) => {

    const onClick = (screen: any) => {
        props.sendScreen(screen)
    }

    return (
        <div className={ "text-white " + props.className }>
            <div className="w-full flex flex-row flex-wrap ">
                <div onClick={ () => onClick(<Educations/>) } className="grow p-3 text-center bg-teal-700 hover:bg-teal-900 border-t border-r border-black rounded-br-lg">
                    Education
                </div>
                <div onClick={ () => onClick(<Experiences/>) } className="grow p-3 text-center bg-teal-700 hover:bg-teal-900 border-t border-r border-black rounded-b-lg">
                    Experiences
                </div>
                <div onClick={ () => onClick(<LicensesNCertifications/>) } className="grow p-3 text-center bg-teal-700 hover:bg-teal-900 border-t border-r border-black rounded-b-lg">
                    Licenses & Certifications
                </div>
                <div onClick={ () => onClick(<Organizations/>) } className="grow p-3 text-center bg-teal-700 hover:bg-teal-900 border-t border-r border-black rounded-b-lg">
                    Organizations
                </div>
                <div onClick={ () => onClick(<Achievements/>) } className="grow p-3 text-center bg-teal-700 hover:bg-teal-900 border-t border-r border-black rounded-bl-lg">
                    Achievements
                </div>
            </div>
        </div>
    )
}

export default MenuBar;