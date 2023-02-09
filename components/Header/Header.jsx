import { useState } from 'react';
import Image from 'next/image';
import logo from "../../styles/assets/shared/logo.svg"
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/router"
const Header = () => {
    const [displaystate, setDisplaySate] = useState(null)

    const route = useRouter()
    return (
        <header>
            <div className="logo">< Image src={logo} alt='logo' /></div>
            <div className='hr' />
            <FaBars onClick={() => setDisplaySate("block")} className='openMenu' />
            <nav style={{ display: displaystate }} >
                <RxCross1 onClick={() => setDisplaySate('none')} className='cross' />
                <ul>
                    <li className={route.pathname == '/' ? "active" : ""}>
                        <Link href='/'><span className='nbr'>00</span>Home</Link>
                    </li>
                    <li className={route.pathname == '/destination' ? "active" : ""}>
                        <Link href='/destination'><span className='nbr'>01</span>Destination</Link>
                    </li>
                    <li className={route.pathname == '/crew' ? "active" : ""}>
                        <Link href='/crew'><span className='nbr'>02</span>Crew</Link>
                    </li>
                    <li className={route.pathname == '/technology' ? "active" : ""}>
                        <Link href='/technology'><span className='nbr'>03</span>Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}





export default Header;
