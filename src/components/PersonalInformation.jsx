import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

function PersonalInformation({data, onChange}){

    const [name, setName]=useState(data.name||'')
    const [phone, setPhone]=useState(data.phone||'')
    const [email, setEmail]=useState(data.email||'')
    const [social, setSocial]=useState(data.social||'')
    const [isEditing, setIsEditing]=useState(false)

    const toggleEditMode = () => {
      setIsEditing((prevState) => !prevState);
    };


    return (
        <>
            <h2>Personal Information</h2>
            {
                isEditing?(
                    <>
                        <InputField type="text" label="FULL NAME" value={name} onChange={setName} placeHolder="MD.Munna Hasan"/>
                        <InputField type="text" label="PHONE NUMBER" value={phone} onChange={setPhone} placeHolder="+880 13 1234-5678"/>
                        <InputField type="email" label="E-MAIL" value={email} onChange={setEmail} placeHolder="MD.Munna Hasan"/>
                        <InputField type="url" label="SOCIAL LINK" value={social} onChange={setSocial} placeHolder="linkedin.com/in/munnahasan"/>
                        <Button text='Add Information' onClick={()=>{
                            setIsEditing((prevState) => !prevState)
                            onChange({name, phone , email, social})
                          }} 
                        />
                    </>
                ):
                    <>
                        <Button text="Edit" onClick={toggleEditMode} />
                    </>
            }
        </>
    )


}

export default PersonalInformation