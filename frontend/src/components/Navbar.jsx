import {Link} from 'react-router';


export default function Navbar() {
  return (
    <div className="max-w-[1200px] mx-auto py-3 px-6 bg-neutral-500 flex justify-between items-center rounded-lg">
        <div className="logo">ↁ</div>
        <div className="nav-links">
            <ul className="flex items-center gap-8">
                <Link to='/'>Home</Link>
                <Link to='/allprojects'>All Projects</Link>
                <Link to='/connect'>Connect</Link>
            </ul>
        </div>
    </div>
  )
}
