import { useState } from "react";
import Educations from "./Education";
import MenuBar from "./MenuBar";


const Main = (props: any) => {

    const [screen, setScreen] = useState([<Educations/>]);

    const sendScreen = (data: any) => {
        setScreen(data)
      }

    return (
        <div className={ "w-full card text-white" + props.className }>
            <MenuBar sendScreen={sendScreen} />
            { screen }
        </div>
    )
}

export default Main;