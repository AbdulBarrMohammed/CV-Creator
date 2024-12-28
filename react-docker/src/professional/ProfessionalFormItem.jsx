function ProfessionalFormItem ({id, job, company, location, proStartDate, proEndDate, description, onDelete, onEdit}) {
    return (

        <div>
            <div class="flex gap-5 items-center justify-between">
                <div class="leftFormItem">
                    <h4>{job}</h4>
                    <p>{location}</p>
                    <p>{company}</p>
                    <p>{proStartDate} - {proEndDate}</p>
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

export default ProfessionalFormItem;
