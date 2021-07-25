import React, { useState } from "react";
import Styled from "styled-components";

export default function Loing () {


    const Button = Styled.a`
        display: inline-block;
        padding: 5px 10px;
        text-decoration: none;
        color: white;
        background: #ae6f7f;
        margin: 5px 7px;
        border-radius: 5px;
        line-height: 25px;
    `

    return (
        <div className="APP">
            <h1>This is the login page !</h1>
            <Button href="/admin">go to admin page</Button>
            <Button href="/user">go to user page</Button>
        </div>
    );

}
