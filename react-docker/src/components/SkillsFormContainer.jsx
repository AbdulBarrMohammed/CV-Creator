import Form from "../form/Form";
export function SkillsFormContainer({skills, setSkills}) {
    return (
        <>
            <Form
                label="Skills"
                type = 'text'
                placeholder="Enter skills seperated by commas"
                value = {skills}
                onChange={(e) => setSkills(e.target.value)}
            />
        </>
    )
}
