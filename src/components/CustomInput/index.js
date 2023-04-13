import React from "react";

const CustomInput =({label,id,placeholder,onChange,value})=>{
    return (
        <div>
            <label htmlFor={id} className={'mb-2'}>{label}</label>
            <input
                type="text"
                className={'form-control'}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}
export default CustomInput