import '../App.css'
import { useNavigate } from 'react-router-dom'

export function Landing() {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/home')
    }


    return (
        <>
            <div className='flex flex-col items-center justify-center py-24'>
                <div className='flex flex-col text-7xl font-semibold text-center leading-tight'>
                    <h1>Create Resumes</h1>
                    <h1 className='blue-gradient_text'>Quickly, Easy And Free</h1>
                    <h1>For Any Job, For Any Industry</h1>
                    <div className='font-normal text-2xl text-center px-52 pt-10 gap-5'>
                        <p className='text-slate-500'>Create a professional resume quickly, easy and free that are ATS-friendly with no unnecessary styling, and be able to quickly download
                            it as a pdf, with no fees or hidden fees, with no need
                            to create accounts.
                        </p>
                        <button onClick={handleClick}className='bg-[#2356F6] rounded-full text-white px-7 py-3 text-center mt-7 hover:bg-[#00c6ff] transition-all duration-300 ease-in-out'>Create Resume</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center py-10 bg-slate-100">
                <h1 className='font-semibold text-3xl'>How We Can Help</h1>
                <div className='flex gap-20 text-lg py-20 px-10'>
                    <div className='flex gap-3'>
                        <img className='h-20' src={'../../src/assets/badge.png'}/>
                        <div>
                            <h1 className='font-semibold'>Professional Layout</h1>
                            <p>We offer you a way to professional resume layout that is ats-friendly </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>

                        <img className='h-20' src={'../../src/assets/running.png'}/>
                        <div>
                            <h1 className='font-semibold'>Quickness</h1>
                            <p>We offer you a way to quickly build a resume for any job or industry, no need to create an
                                account or provide unnecessary informtation </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                    <img className='h-20' src={'../../src/assets/free-2.png'}/>
                        <div>
                            <h1 className='font-semibold'>Free</h1>
                            <p>We offer you a free way to make a resume, no fees or hidden fees, no need to enter a credit card</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className='flex flex-col items-center gap-5 py-10'>
                <h1 className='font-semibold text-3xl'>How It Works</h1>
                <div className='flex flex-col gap-10 text-2xl px-10 items-center justify-end' >

                    <div className='flex items-center gap-10'>
                    <img src={'../../src/assets/architect.png'} className='h-80'/>
                        <div className='bg-slate-100 p-10 rounded-2xl'>
                            <h1 className='font-semibold'>Enter Education, Experience, and Personal Information</h1>
                            <p className='w-96'>Enter your professional information that include name, phone number and email, your school and education stats, and any professional work experience that you have </p>
                        </div>

                    </div>

                    <div className='flex items-center gap-10'>
                        <div className='bg-slate-100 p-10 rounded-2xl'>
                            <h1 className='font-semibold'>Watch in real time as your resume is being built</h1>
                            <p className='w-96'>As you enter each information you can see in real time how your resume is being built. You can also delete and edit each entry as you please</p>
                        </div>
                        <img src={'../../src/assets/barrier.png'} className='h-80'/>

                    </div>

                    <div className='flex items-center gap-10'>
                        <img src={'../../src/assets/project.png'} className='h-80'/>
                        <div className='bg-slate-100 p-10 rounded-2xl'>
                            <h1 className='font-semibold'>Download your resume as a pdf</h1>
                            <p className='w-96'>Once you enter all the information you want on your resume, hit the download button so that you can recieve your new resume as a pdf</p>
                        </div>

                    </div>


                </div>
            </div>

            <footer className='bg-[#191919] text-white p-10'>
                <div> © 2024 Resume Swift</div>
            </footer>
        </>

    )

}
