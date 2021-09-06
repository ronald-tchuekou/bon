/**
 * Expandable list component.
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { SlideAnimations } from "mirajs/dist/js"

const _OBJ = {
    title: 'Title',
    subList: [],
}

export const ExpandableList = props => {

    let {object, handleClick, handleEdit, handleDelete, parentExpanded} = props

    const slide_ref = useRef(null)

    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if(!parentExpanded){
            SlideAnimations.slideUp(slide_ref.current, 500)
            setExpanded(false)
        }
    }, [parentExpanded])

    function expand(){
        setExpanded(state => !state)
        if(!expanded)
            SlideAnimations.slideDown(slide_ref.current, 500)
        else
            SlideAnimations.slideUp(slide_ref.current, 500)
    }

    return (
        <div className={`expandable-list__wrapper ${expanded ? 'expanded' : ''}`}>
            
            <ExpandableListItem
                visibled
                item={object}
                expand={expand}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleClick={handleClick}/>
            
            <div ref={slide_ref} className={"expandable-list__sub"}>
                {object.subList.map((item, i) => <ExpandableListItem
                    key={i}
                    visibled={false}
                    item={item}
                    expanded={expanded}
                    expand={() => {}}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleClick={handleClick}
                />)}
            </div>

        </div>
    )
}
ExpandableList.propTypes = {
    object: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
    parentExpanded: PropTypes.bool,
}
ExpandableList.defaultProps = {
    object: _OBJ,
    handleClick: () => {},
    handleEdit: undefined,
    handleDelete: undefined,
    parentExpanded: false,
}

export const ExpandableListItem = props => {
    let {handleClick, handleDelete, handleEdit, visibled, item, expanded, expand} = props
    return (
        <>
        {!visibled && (item.subList.length > 0) ? 
            <ExpandableList
                handleClick={handleClick}
                handleDelete={handleDelete}
                handleEdit={handleEdit} 
                parentExpanded={expanded} 
                object={item}/> : 
            <div className={`expandable-list__item `}>
                {item.subList.length > 0 ? 
                    <div className={`expandable-list__item-icon expandable-list__itme-state`} onClick={() => expand()}>
                        <i className={"DGfi-keyboard_arrow_down"}></i>
                    </div> : 
                <></>}
                <div className={"expandable-list__item-title"} onClick={() => {
                    expand()
                    handleClick(item)
                }}>{item.title}</div>
                <div className={"expandable-list__options"}>
                    {handleEdit ? 
                        <div className={"expandable-list__item-icon expandable-list__itme-option"} onClick={() => handleEdit(item)}>
                            <i className={"DGfi-createmode_editedit"}></i>
                        </div>  : 
                    <></>}
                    {handleDelete ? 
                        <div className={"expandable-list__item-icon expandable-list__itme-option"} onClick={() => handleDelete(item)}>
                            <i className={"DGfi-delete"}></i>
                        </div>  : 
                    <></>}
                </div>
            </div>
        }
        </>
    )
}
ExpandableListItem.propTypes = {
    expand: PropTypes.func,
    handleClick: PropTypes.func,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
    visibled: PropTypes.bool,
    expanded: PropTypes.bool,
}
ExpandableListItem.defaultProps = {
    expand: undefined,
    handleClick: () => {},
    handleEdit: undefined,
    handleDelete: undefined,
    visibled: false,
    expanded: false,
}