function ResumeHeader ({id, name, email, phone, cityProv}) {
    if (name==='') {
        return (
            <>

            </>
        )
    }
    return (
        <div class="flex flex-col gap-1 items-center mb-5">
              <h2 className="font-bold text-xl">{name}</h2>
              <p> <span>{email}</span> | {phone} | {cityProv}</p>
        </div>

    );
}

export default ResumeHeader;
