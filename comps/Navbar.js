import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/toy-story-41209.png" width={128} height={97} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/friends"><a>Friends Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;