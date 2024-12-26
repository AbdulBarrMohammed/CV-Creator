function ProjectFormItem ({id, title, tools, projectDescription, dateCompleted, onDelete, onEdit}) {
    return (
        <div class="flex flex-col gap-4">
            <div class="leftFormItem">
                <h4>{title}</h4>
                <p>{tools}</p>
                <p>{projectDescription}</p>
                <p>{dateCompleted}</p>
            </div>
            <div class="rightFormItem">
                <button onClick={() => onDelete(id)}>Delete</button>
                <button onClick={() => onEdit(id)}>Edit</button>
            </div>
        </div>

    );
}

export default ProjectFormItem;
