import Link from 'next/link'
import { AiFillLinkedin, AiFillTwitterSquare, AiFillCodepenSquare } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="nav-socials-footer">
          <Link href='/'>
            <AiFillLinkedin className='nav-links' />  
          </Link>
          <Link href='/'>
            <AiFillTwitterSquare className='nav-links' />     
          </Link>
          <Link href='/'>
            <FaGithubSquare className='nav-links' /> 
          </Link>  
          <Link href='/'>
            <AiFillCodepenSquare className="nav-links" />
          </Link>  
        </div>
    </div>
  )
}

export default Footer