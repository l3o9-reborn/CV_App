import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";


function PersonalInformation({data, onChange}){

    const [school, setSchool]=useState(data.school||'')
    const [degree, setDegree]=useState(data.degree||'')
    const [startDate, setStartDate]=useState(data.startDate||'')
    const [endDate, setEndDate]=useState(data.endDate||'')
    const [isEditing, setIsEditing]=useState(true)

    const toggleEditMode = () => {
      setIsEditing((prevState) => !prevState);
  };
  


    return (
        <>
            <h2>Educational Experience</h2>
            {
                isEditing?(
                    <>
                        <InputField type="text" label="SCHOOL NAME" value={school} onChange={setSchool} />
                        <InputField type="text" label="DEGREE" value={degree} onChange={setDegree} />
                        <InputField type="date" label="START DATE" value={startDate} onChange={setStartDate} placeHolder="MM/DD/YYYY"/>
                        <InputField type="date" label="END DATE" value={endDate} onChange={setEndDate} placeHolder="MM/DD/YYYY"/>
                        <Button text='ADD Experience' onClick={() =>
                            {
                                setIsEditing((prevState) => !prevState)
                                onChange({ school, degree, startDate, endDate })}
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