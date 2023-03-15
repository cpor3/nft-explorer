import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import useAddress from "../hooks/useAddress";
import "../styles/Header.css";

export default function HeaderLayout() {
    const [address, updateAddress] = useAddress();

    return (
        <section>
            <Header address={address} updateAddress={updateAddress} />
            <Outlet context={address} />
        </section>
    )
}
