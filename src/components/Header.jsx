import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from './container/Container'
import Logo from './Logo'
import LogoutBtn from './LogoutBtn'
function Header() {

  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: true
    },
    {
      name: "Signup",
      slug: "/signup",
      active: true
    },
    {
      name: "All Posts",
      slug: "/allPosts",
      active: true
    },
    {
      name: "Add Post",
      slug: "/addPost",
      active: true
    }
  ]
  
  return (
    <header>
      <Container> 
        <nav>
          <div>
            <Link>
              <Logo/>
            </Link>
          </div>
        
          <ul>
            {
              navItem.map((item)=>{
                item.active && <li key={item.name}><button onClick={()=>navigate(item.slug)}>{item.name}</button></li>
              })
            }
            {
              authStatus && (<li> <LogoutBtn/> </li>)
            }
          </ul>

        </nav>
        
      </Container>
    </header>
  )
}

export default Header