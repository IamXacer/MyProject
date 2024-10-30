import React from "react";
import style from './Skill.module.css'
type ProjectProps = {
    title: string;
    description: string;
}
export const Skill: React.FC<ProjectProps> = ({ title, description }) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3 > {title}</h3>
            <span >{description}</span>
        </div>
    )
}