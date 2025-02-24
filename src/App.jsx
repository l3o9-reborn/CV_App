import PersonalInformation from "./components/PersonalInformation"
import EducationalExperience from './components/EducationalExperience'
import ProfessionalExperience from './components/ProfessionalExperience'
import './App.css'
import { useState } from "react"

function App() {

  const [personalInformation, setPersonalInformation]=useState({})
  const [educationalExperience, setEducationalExperience]=useState({})
  const [professionalExperience, setProfessionalExperience]=useState({})

  return (
    <div className='CV'>

        <div className="inputSection">
          <PersonalInformation data={personalInformation} onChange={setPersonalInformation}/>
          <EducationalExperience data={educationalExperience} onChange={setEducationalExperience} />
          <ProfessionalExperience data={professionalExperience} onChange={setProfessionalExperience}/>
        </div>


        <div className="cvCard">
          <div className="personalInformation">
              <h3> {personalInformation.name || 'Not provided'}</h3>
              <div className="contact">
                <p> {personalInformation.phone || 'Not provided'}</p>
                <p> {personalInformation.email || 'Not provided'}</p>
                <p> {personalInformation.social || 'Not provided'}</p>
              </div>

          </div>
          <div className="educationalExperience">
              <h2>Educational Experience</h2>
              <h3>{educationalExperience.school || 'Not provided'}</h3>
              <h5>{educationalExperience.degree || 'Not provided'}</h5>
              <div className="date">
                <p>{educationalExperience.startDate || 'Not provided'}</p>
                <p>{educationalExperience.endDate || 'Not provided'}</p>
              </div>
          </div>
          <div className="professionalExprience">
          <h2>Professional Experience</h2>
              <h3>{professionalExperience.company || 'Not provided'}</h3>
              <h5>{professionalExperience.position || 'Not provided'}</h5>
              <p>{professionalExperience.details || 'Not provided'}</p>
              <div className="date">
                <p>{professionalExperience.startDate || 'Not provided'}</p>
                <p>{professionalExperience.endDate || 'Not provided'}</p>
              </div>
          </div>
              
             

             
        </div>


    </div>
  )
}

export default App
