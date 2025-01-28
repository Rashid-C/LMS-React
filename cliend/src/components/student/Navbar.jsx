import {assets} from '../../assets/assets'
import {Link, useLocation} from 'react-router-dom'
import {  UserButton,useClerk,useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} =useClerk()
  const {user} =useUser()
 
  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white':'bg-cyan-100/70'}`}>
      <img src={assets.logo} alt="compony logo" className='w-28 lg:w-32 cursor-pointer'/>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          { user &&
           <>
           <button>Become Educator</button>
           | <Link to='/my-enrollments' >My Envirollments</Link>
           </> }
        </div>
       { user? <UserButton/>: <button onClick={()=>openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
}
      </div>
      {/* for phone screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-green-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-sm'>
        { user &&
           <>
           <button>Become Educator</button>
           | <Link to='/my-enrollments' >My Envirollments</Link>
           </> }
        </div>
        {
          user? <UserButton />: <button onClick={()=>openSignIn()}><img src={assets.user_icon} alt="user_icon" /></button>
        }
       
      </div>
    </div>
  )
}

export default Navbar