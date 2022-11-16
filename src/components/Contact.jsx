import React from "react";
import style from "../css/Contact.module.css"

import Form from "./Form";

export default function Contact(){
    return (
        <div className={style.container} id='contact'>
        <Form/>
        </div>
    )
}