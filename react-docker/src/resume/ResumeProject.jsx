import { useEffect, useState } from "react";

function ResumeProject ({id, title, tools, projectDescription, dateCompleted}) {

    const [desc, setDesc] = useState([]);
    const descArray = projectDescription.split(';')


    useEffect(() => {
        setDesc(descArray)
    }, [projectDescription])


    return (
        <div className="flex justify-between pt-1 mb-5">
            <div className="flex flex-col">
                <div className="flex gap-1">
                    <p><span class="wordBold font-times">{title}</span></p>
                    <p>|</p>
                    <p className="font-times">{tools}</p>
                </div>
                <ul className="list-disc ml-7">
                    {desc.map((d, index) => (
                        <li key={index} className="w-96 font-times">
                            {d}
                        </li>
                    ))}
                </ul>


            </div>
            <div class="font-times">
                <p className="font-bold font-times">{dateCompleted}</p>

            </div>
        </div>

    );
}

export default ResumeProject;
