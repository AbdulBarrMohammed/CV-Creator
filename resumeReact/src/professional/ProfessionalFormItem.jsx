function ProfessionalFormItem ({id, job, company, proStartDate, proEndDate, description, onDelete}) {
    return (
        <div class="formItem">
            <div class="leftFormItem">
                <h4>{job}</h4>
                <p>{company}</p>
                <p>{description}</p>
                <p>{proStartDate} - {proEndDate}</p>
            </div>
            <div class="rightFormItem">
                <button onClick={() => onDelete(id)}>Delete</button>
                <button>Edit</button>
            </div>
        </div>

    );
}

export default ProfessionalFormItem;
