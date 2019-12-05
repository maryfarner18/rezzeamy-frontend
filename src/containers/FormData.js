
const LABELS = {
    user: {
        id: {hide: true},
        "user_slug": {hide: true},
        password: {label: "Create A Password", type: "password"},
        first_name: {label: "First Name", type:"text"}, 
        last_name: {label: "Last Name", type:"text"}, 
        email: {label: "Email", type:"email"},  
        phone: {label: "Phone [000-000-0000]", type:"tel", pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}"}, 
        resume: {label: "Resume", type:"file"}, 
        profile_image: {label: "Profile Pic", type:"file"}
    },
    educations: {
        id: {hide: true},
        university: {label: "University", type:"text"}, 
        degree: {label: "Degree", type:"text"},
        concentration: {label: "Concentration", type:"text"}, 
        start: {label: "Start", type:"text"},
        end: {label: "End", type:"text"}
    },
    websites: {
        id: {hide: true},
        link: {label: "Link [http://www.linkedin.com]", type:"url"},
    },
    skills: {
        id: {hide: true},
        name: {label: "Skill", type:"text"},
        proficiency: {label: "Proficiency", type:"text"},
    },
    projects: {
        id: {hide: true},
        title: {label:  "Project Title", type:"text"}, 
        link: {label: "Link [http://www.linkedin.com]", type:"url"},
    },
    work_experiences: {
        id: {hide: true},
        company: {label: "Company", type:"text"},
        title: {label: "Title", type:"text"},
        description: {label: "Description", type:"text"}, 
        start: {label: "Start", type:"text"},
        end: {label: "End", type:"text"},
        city: {label: "City", type:"text"},
        state: {label: "State", type:"text"},
    },
    addresses: {
        id: {hide: true},
        street1: {label: "Street", type:"text"},
        street2: {label: "Apt / Floor / Unit", type:"text"},
        city: {label: "City", type:"text"},
        state: {label: "State", type:"text"},
        zip: {label: "Zip", type:"text"},
        country: {label: "Country", type:"text"},
    }
}

const FIELD_OBJ = {
    user: {id: "", user_slug: "", email: "", password:"", first_name: "", last_name: "", phone: "", resume: "", profile_image: ""},
    educations: {id: "", university: "", degree: "", concentration: "", start: "", end: ""},
    websites: {id: "", link: ""},
    skills: {id: "", name: "", proficiency: ""},
    projects: {id: "", title: "", link: ""},
    work_experiences: {id: "", company: "", title: "", description: "", start: "", end:"", city:"", state:""},
    addresses: {id: "", street1: "", street2: "", city: "", state: "", zip: "", country: ""}
}

export {FIELD_OBJ, LABELS} 
