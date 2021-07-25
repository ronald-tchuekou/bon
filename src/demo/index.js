/*
 * Copyright (c) 25/07/2021 16:24
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

import React, { useEffect } from 'react'
import { Button, Fab, IconButton } from '../base-components'
import { InitRipple } from '../utils/js/init'


export default function Demo () {

    useEffect(() => {
        InitRipple();
    }, [])

    const content = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100vw',
        overflowX: 'hidden',
        flexDirection: 'column',
        background: 'rgba(0, 0, 0, 0.023)',
    }
    const content1 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '30px'
    }
    const content2 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 10px'
    }

    return (
        <div style={content}>
            <div style={content1}>
                <div style={content2}>
                    <Button>Default button</Button>
                    <Button disabled>Disabled button</Button>
                    <Button color={"primary"}>Primary button</Button>
                    <Button color={"accent"}>Accent button</Button>
                    <Button color={"red"}>Red button</Button>
                </div>
                <div style={content2}>
                    <Button variante={"outlined"}>Default button</Button>
                    <Button variante={"outlined"} disabled>Disabled button</Button>
                    <Button variante={"outlined"} color={"primary"}>Primary button</Button>
                    <Button variante={"outlined"} color={"accent"}>Accent button</Button>
                    <Button variante={"outlined"} color={"red"}>Red button</Button>
                </div>
                <div style={content2}>
                    <Button variante={"contained"}>Default button</Button>
                    <Button variante={"contained"} disabled>Disabled button</Button>
                    <Button variante={"contained"} color={"primary"}>Primary button</Button>
                    <Button variante={"contained"} color={"accent"}>Accent button</Button>
                    <Button variante={"contained"} color={"red"}>Red button</Button>
                </div>
            </div>
            <div style={content1}>
                <div style={content2}>
                    <IconButton><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton disabled><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton color={"primary"}><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton color={"accent"}><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton color={"red"}><i className={"DGfi-delete"}></i></IconButton>
                </div>
                <div style={content2}>
                    <IconButton variante={"outlined"}><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton variante={"outlined"} disabled><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton variante={"outlined"} color={"primary"}><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton variante={"outlined"} color={"accent"}><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton variante={"outlined"} color={"red"}><i className={"DGfi-delete"}></i></IconButton>
                </div>
                <div style={content2}>
                    <IconButton variante={"contained"}><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton variante={"contained"} disabled><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton variante={"contained"} color={"primary"}><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton variante={"contained"} color={"accent"}><i className={"DGfi-delete"}></i></IconButton>
                    <IconButton variante={"contained"} color={"red"}><i className={"DGfi-delete"}></i></IconButton>
                </div>
            </div>
            <div style={content1}>
                <Fab icon={"DGfi-remove"}/>
                <Fab icon={"DGfi-note"} color={"primary"}/>
                <Fab icon={"DGfi-twitter"} color={"accent"}/>
                <Fab icon={"DGfi-facebook"} color={"red"}/>
                <Fab icon={"DGfi-pen"} disabled/>
            </div>
        </div>
    );

}
