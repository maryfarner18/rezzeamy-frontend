import React, {Component } from 'react'
import EducationForm from './FormParts/EducationForm'
import SkillForm from './FormParts/SkillForm'
import UserInfoForm from './FormParts/UserInfoForm'
import WorkExperienceForm from './FormParts/WorkExperienceForm'
import ProjectForm from './FormParts/ProjectForm'
import UhOh404 from './UhOh404' 

import { Icon, Step } from 'semantic-ui-react'

class Form extends Component {
    
    renderFormPart = () => {
        return 0
    }

    render() {
        return ( 
            this.renderFormPart()
        )
    }
}

export default Form