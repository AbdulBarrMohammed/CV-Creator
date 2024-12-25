function ProfessionalFormItem ({id, job, company, proStartDate, proEndDate, description, onDelete, onEdit}) {
    return (
        <div class="flex flex-col gap-4">
            <div class="leftFormItem">
                <h4>{job}</h4>
                <p>{company}</p>
                <p class="description">{description}</p>
                <p>{proStartDate} - {proEndDate}</p>
            </div>
            <div class="rightFormItem">
                <button onClick={() => onDelete(id)}>Delete</button>
                <button onClick={() => onEdit(id)}>Edit</button>
            </div>
        </div>

    );
}

export default ProfessionalFormItem;
