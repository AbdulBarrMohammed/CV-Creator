function ResumeHeader ({id, name, email, phone, cityProv}) {
    if (name==='') {
        return (
            <>

            </>
        )
    }
    return (
        <div class="flex flex-col gap-1 items-center mb-5 font-times">
              <h2 className="font-bold text-xl font-times">{name}</h2>
              <p className="font-times"> <span>{email}</span> | {phone} | {cityProv}</p>
        </div>

    );
}

export default ResumeHeader;
