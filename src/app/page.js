'use client'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import Button from './components/Button/button-big'
import SignUpForm from './components/Form/signup-form'
import styles from './page.module.css'

export default function Home() {
  const openLink=()=>{
    console.log("link")
  }


  return (
    <main >
      <div id="main-text-block">
        <h1 className='bold-text'>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable. </p>
      </div>
      <div id='signup-block'>
        <Link href="/plan-info"><Button text='Try it free 7 days then $20/mo. thereafter' color='purple' handleClick={openLink} type='button'></Button> </Link>
      
        <SignUpForm className="signup-form-block" ></SignUpForm>
      </div>
    </main>
  )
}
