import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const MainApp = () => {
    return(
        <div className="flex flex-col justify-items-center items-center">
            <div className="p-2 my-8 font-base text-center text-4xl font-medium">
                Main Page is Under Construction
            </div>
            <h3 className="text-xl">Active Pages</h3>
            <ul className="list-disc">
                <li>
                    <NavLink to="movie-app/" className="text-blue-600">
                        Movie App
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MainApp;