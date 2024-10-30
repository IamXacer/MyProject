import React from "react";
import style from './MyWork.module.css'
import styleContainer from "./../components/styles/Container.module.css";
import {Project} from "./project/Project";


export const MyWork = () => {
    return(
        <div className={style.MyWorkBlock}>
            <div className={`${styleContainer.container} ${style.MyWorkContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.work}>
                    <Project title={'Project name'} description={'Short Description'}/>
                    <Project title={'Project name'} description={'Short Description'}/>

                </div>
            </div>

        </div>
    )
}