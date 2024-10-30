import React from "react";
import style from './Project.module.css'
import styleContainer from "../../components/styles/Container.module.css";


type ProjectProps = {
    title: string;
    description: string;
}

export const Project: React.FC<ProjectProps> = ({ title, description }) => {
    return (
        <div className={style.project}>
            <div className={`${styleContainer.container} ${style.IMG}`}>IMG</div>
            <div className={style.icon}>Watch</div>
            <h3>{title}</h3>

        </div>
    );
}
