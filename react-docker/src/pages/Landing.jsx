import '../App.css'

export function Landing() {

    return (
        <>
            <div className='flex flex-col items-center justify-center py-20'>
                <div className='flex flex-col text-7xl font-semibold text-center leading-tight'>
                    <h1>Create Resumes</h1>
                    <h1 className='blue-gradient_text'>Quickly, Easy And Free</h1>
                    <h1>For Any Job, For Any Industry</h1>
                    <div className='font-normal text-2xl text-center px-52 pt-10 gap-5'>
                        <p className='text-slate-500'>Create a professional resume quickly, easy and free that are ATS-friendly with no unnecessary styling, and be able to quickly download
                            it as a pdf, with no fees or hidden fees, with no need
                            to create accounts.
                        </p>
                        <button className='bg-[#2356F6] rounded-full text-white px-7 py-3 text-center mt-7'>Create Resume</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center py-10 bg-slate-100">
                <h1 className='font-semibold text-2xl'>How We Can Help</h1>
                <div className='flex gap-20 text-lg py-20 px-10'>
                    <div className='flex gap-3'>
                        <img className='h-20' src={'../../src/assets/badge.png'}/>
                        <div>
                            <h1 className='font-bold'>Professional Layout</h1>
                            <p>We offer you a way to professional resume layout that is ats-friendly </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>

                        <img className='h-20' src={'../../src/assets/running.png'}/>
                        <div>
                            <h1 className='font-bold'>Quickness</h1>
                            <p>We offer you a way to quickly build a resume for any job or industry, no need to create an
                                account or provide unnecessary informtation </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                    <img className='h-20' src={'../../src/assets/free-2.png'}/>
                        <div>
                            <h1 className='font-bold'>Free</h1>
                            <p>We offer you a free way to make a resume, no fees or hidden fees, no need to enter a credit card</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className='flex flex-col items-center'>
                <h1>How It Works</h1>
                <div className='flex flex-col gap-5 text-center text-2xl px-10'>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold'>Enter your Education, Experience, and Personal Information</h1>
                        <p className='w-1/2'>Enter your professional information that include name, phone number and email, your school and education stats, and any professional work experience that you have </p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold'>Watch in real time as your resume is being built as you enter each information</h1>
                        <p className='w-1/2'>As you enter each information you can see in real time how your resume is being built. You can also delete and edit each entry as you please</p>
                    </div>

                    <div>
                        <h1>Once finished click the download button and quickly recieve your resume as a pdf</h1>
                    </div>

                </div>
            </div>
        </>

    )

}
