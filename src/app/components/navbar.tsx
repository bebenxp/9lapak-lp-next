'use client'

import Image from 'next/image';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="https://9lapakjp.fun">
                    <Image src="/logo-9lapak.png" alt="..." className="logo-9lapak"  width={150} height={50} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul    className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Link Alternatif</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="https://9lapak6.fun">9lapak6.fun</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="https://9lapak7.fun">9lapak7.fun</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <a href="https://9lapak.online" className="btn btn-outline-light" type="submit" target="_blank">
                            <i className="bi-cart-fill me-1"></i>
                            Pola RTP Gacor
                        </a>
                    </form>
                </div>
            </div>
        </nav>
    )
}
