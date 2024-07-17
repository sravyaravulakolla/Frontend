import React,{useState} from 'react';
const formConfig=[
    {id:1, type:"text", name:"firstName", placeholder="First Name"},
    {id:2, type:"text", name:"lastName", placeholder:"Last Name"},
    {id:3, type:"email", name:"email", placeholder:"Email"},
    {id:4, type:"textarea", name:"message", placeholder:"Message"},
],
function InputField({type,name,placeholder,value,onChange}){
    if(type=="textarea"){
        return(
            <textarea className="form-textarea" name={name} placeholder={placeholder} value={value} onChange={onChange} required/>
        );
    }
    return(
        <input className="form-input" type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required/>
    );
}
function EmailForm(){
    const [formData, setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        message:''
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(prevData)=>({
            ...
        })
    }
}