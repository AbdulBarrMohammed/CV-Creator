function ResumeSkills ({skills}) {
    if (!skills) {
        return (
            <>

            </>
        )
    }
    return (

        <>
            <div className="flex justify-center">
                <h3 className='pb-2 font-bold text-lg'>Skills</h3>
            </div>
                <div class="line"></div>
            <h2 className="font-times">{skills}</h2>
        </>



    );
}

export default ResumeSkills;
