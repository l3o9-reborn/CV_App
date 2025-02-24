import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";


function PersonalInformation({data, onChange}){

    const [company, setCompany]=useState(data.company||'')
    const [position, setPosition]=useState(data.positon||'')
    const [details, setDetails]=useState(data.details||'')
    const [startDate, setStartDate]=useState(data.startDate||'')
    const [endDate, setEndDate]=useState(data.endDate||'')
    const [isEditing, setIsEditing]=useState(true)

    const toggleEditMode = () => {
      setIsEditing((prevState) => !prevState)
    }
  


    return (
        <>
            <h2>Professional Experience</h2>
            {
                isEditing?(
                    <>
                        <InputField type="text" label="COMPANY" value={company} onChange={setCompany} />
                        <InputField type="text" label="POSITION" value={position} onChange={setPosition} />
                        <InputField type="text-field" label="DETAILS" value={details} onChange={setDetails} />
                        <InputField type="date" label="START DATE" value={startDate} onChange={setStartDate} placeHolder="MM/DD/YYYY"/>
                        <InputField type="date" label="END DATE" value={endDate} onChange={setEndDate} placeHolder="MM/DD/YYYY"/>
                        <Button text='ADD Experience' onClick={() =>{
                            setIsEditing((prevState) => !prevState)
                            onChange({ company, position, details, startDate, endDate })}
                            } 
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