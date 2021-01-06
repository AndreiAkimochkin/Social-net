import React, {useEffect, useState} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const ProfileStatusWithHooks =(props:any)=> {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        status(props.status)
    }, [props.status])

    const activateEditMode =()=> {
        setEditMode(true)
    };

    const deactivateEditMode =()=> {
        setEditMode(false)
        props.updateStatus(status)
    };

    const onStatusChange =(e: { currentTarget: { value: any; }; })=> {
        setStatus({status:  e.currentTarget.value})
    };
    return (
        <div>
            {!editMode &&
            <div>
                <span onClick={activateEditMode}>{props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}


