function ProjectFormItem ({id, title, tools, projectDescription, dateCompleted, onDelete, onEdit}) {
    return (

        <div>

            <div class="flex gap-3 items-center justify-between">
                <div class="leftFormItem">
                    <h4>{title}</h4>
                    <p>{tools}</p>
                    <p>{dateCompleted}</p>
                </div>
                <div class="rightFormItem">
                    <button className="rounded-3xl hover:bg-[#00c6ff] transition-all duration-300 ease-in-out'" onClick={() => onDelete(id)}>Delete</button>
                    <button className="rounded-3xl hover:bg-[#00c6ff] transition-all duration-300 ease-in-out'" onClick={() => onEdit(id)}>Edit</button>
                </div>
            </div>

            <hr className="border-black my-1"/>

        </div>


    );
}

export default ProjectFormItem;
