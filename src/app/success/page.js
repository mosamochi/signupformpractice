import "./success-styles.css"
import Link from "next/link";
import Image from "next/image";

export default function Success() {

  return (
    <>
    <header><h1>Thank you for (fake) joining</h1></header>
    <main>
        
        <section>
        <h2>Your data has not been recorded but you are a rockstar!</h2>
        <p> Thank you for clicking through this far!</p>
        </section>
        
        <Link href='/index.html'><Image className='image-success' src="/signupformpractice/Kitty.jpg"></Image></Link>
    </main>
    </>
   
  );
      }
      