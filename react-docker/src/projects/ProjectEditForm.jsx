import FormEdit from "../form/FormEdit";

function ProjectEditForm ({title, setTitle, tools, setTools, projectDescription, setProjectDescription, dateCompleted, setDateCompleted}) {
    return (
        <>
            <FormEdit
                label="Project title"
                type = 'text'
                placeholder="Enter Project Title"
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <FormEdit
                label="Project tools"
                type="text"
                placeholder="Enter Project tools / languages"
                value={tools}
                onChange={(e) => setTools(e.target.value)}
            />


            <FormEdit
                label="Completed Date"
                type="date"
                placeholder=""
                value={dateCompleted}
                onChange={(e) => setDateCompleted(e.target.value)}
            />

            <div class="label-container">
                <label>Description</label>
                <textarea className="description h-40"
                    placeholder="Enter each description seperated by ;"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}>
                </textarea>
            </div>

            <div class="btn-container">
                <button>Save Edit</button>
            </div>
        </>

    );
}

export default ProjectEditForm;
