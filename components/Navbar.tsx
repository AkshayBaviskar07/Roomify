import React from 'react'
import {Box} from "lucide-react";
import Button from "./ui/Button";

const Navbar = () => {
    const isSignedIn = false;
    const username = 'akshay';

    const handleAuthClick = async () =>{};

    return (
        <header className={"navbar"}>
            <nav className={"inner"}>
                <div className={"left"}>
                    <div className={"brand"}>
                        <Box className={"logo"} />
                        <span className={"name"}>Roomify</span>
                    </div>

                    <ul className="links">
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                    </ul>
                </div>

                <div className={"actions"}>
                    {isSignedIn ? (
                        <>
                            <span>
                                {username ? `Hi, ${username}` : 'Signed In'}
                            </span>
                            <Button size="sm" className={"btn"} onClick={handleAuthClick}>
                                Log Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleAuthClick} size={"sm"} variant={"ghost"}>
                                Log In
                            </Button>
                            <a href={"#upload"} className={"cta"}>
                                Get Started
                            </a>
                        </>
                    )}

                </div>
            </nav>
        </header>
    )
}
export default Navbar
