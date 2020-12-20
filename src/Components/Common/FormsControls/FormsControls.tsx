import React from "react";
import style from './FormsControls.module.css'

const FormControl = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : " ")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const TextArea = (props: any) => {
    const {input, meta, child, ...RestProps} = props;
return <FormControl {...props} ><textarea  {...input}  {...RestProps}/></FormControl>
 }

export const Input = (props: any) => {
    const {input, meta, child, ...RestProps} = props;
    return <FormControl {...props}> <input  {...input}  {...RestProps}/></FormControl>
}