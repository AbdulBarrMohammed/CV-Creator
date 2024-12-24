

export function Navbar() {
    return (
       <>
            <div className="flex items-center justify-between p-2 pl-4 border border-b">
                <div className="flex gap-5 items-center">
                    <h1 className="text-2xl font-semibold">ResumeSwift</h1>
                    <p>About</p>
                </div>
                <div className="flex">
                    <button className='bg-[#2356F6] rounded-full text-white px-7 py-2 text-center'>Create</button>
                </div>
            </div>

       </>
    )
}
