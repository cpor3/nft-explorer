import React, { useContext, useEffect } from "react";
import { nftsContext } from "../context/NftsContext";
import { BiSearch } from "react-icons/bi";
import "../styles/Header.css";

export default function Header() {
    const {updateAddress} = useContext(nftsContext);

    function onEnterPressed(e) {
        if (e.key === 'Enter')
            updateAddress();
    };

    useEffect(() => {
        const addressInput = document.getElementById('address-input');
        addressInput.addEventListener('keypress', onEnterPressed);

        return () => {
            addressInput.removeEventListener('keypress', onEnterPressed);
        };
    }, []);

    return (
        <header>
            <img src="opensea.svg" alt="NFTs explorer" className="header--logo"/>
            <h1 className="header--title">NFTs explorer</h1>
            <input id="address-input" type="text" className="header--search" placeholder="enter address"></input>
            <BiSearch className="header--button" onClick={updateAddress}/>
        </header>
    )
}