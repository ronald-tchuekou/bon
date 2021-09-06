import React, { useEffect } from 'react'
import { ExpandableList } from '../base-components'

export default function Admin () {

    useEffect(() => {
    }, [])

    const content = {
        padding: '30px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '100vh',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.25)'
    }

    const OBJECT = {
        title: 'Title',
        hasChild: 0,
        subList: [
            {title: 'Sub Title 1', hasChild: 0, subList: []},
            {title: 'Sub Title 2', hasChild: 0, subList: []},
            {title: 'Sub Title 3', hasChild: 0, subList: [
                {title: 'Sub Title 3', hasChild: 0, subList: []},
                {title: 'Sub Title 4', hasChild: 0, subList: []},
                {title: 'Sub Title 5', hasChild: 0, subList: [
                    {title: 'Sub Title 1', hasChild: 0, subList: []},
                    {title: 'Sub Title 2', hasChild: 0, subList: []},
                    {title: 'Sub Title 3', hasChild: 0, subList: [
                        {title: 'Sub Title 3', hasChild: 0, subList: []},
                        {title: 'Sub Title 4', hasChild: 0, subList: []},
                        {title: 'Sub Title 5', hasChild: 0, subList: []},
                    ]},
                    {title: 'Sub Title 4', hasChild: 0, subList: []},
                    {title: 'Sub Title 5', hasChild: 0, subList: []},
                ]},
            ]},
            {title: 'Sub Title 4', hasChild: 0, subList: []},
            {title: 'Sub Title 5', hasChild: 0, subList: []},
        ]
    }

    return (
        <div style={content}>
            <ExpandableList
                object={OBJECT}
                handleClick={(item) => console.log('Item clicking', item)}
                handleDelete={(item) => console.log('Item deleting', item)}
                handleEdit={(item) => console.log('Item editing', item)}
            />
        </div>
    );

}
