import React from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Languages from './Languages';



const Sidebar = (props: any) => {

    return (
        <div className={ "card text-white p-6 " + props.className}>
            <Profile />
            <Skills />
            <Languages />
        </div>
    )
}

export default Sidebar;