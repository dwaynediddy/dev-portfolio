import Link from 'next/link'
import { AiFillLinkedin, AiFillTwitterSquare, AiFillCodepenSquare } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="nav-socials-footer">
          <Link href='/'>
            <AiFillLinkedin className='nav-links-footer'>
            </AiFillLinkedin>  
          </Link>
          <Link href='/'>
            <AiFillTwitterSquare className='nav-links-footer' />     
          </Link>
          <Link href='/'>
            <FaGithubSquare className='nav-links-footer' /> 
          </Link>  
          <Link href='/'>
            <AiFillCodepenSquare className="nav-links-footer" />
          </Link>  
        </div>
    </div>
  )
}

export default Footer