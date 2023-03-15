import { createContext, useState } from "react";
import useAddress from "../hooks/useAddress";

export const nftsContext = createContext();

export default function NftsContext({children}) {
    const [address, updateAddress] = useAddress();
    const [nfts, setNfts] = useState([]);
    const [currentNft, setCurrentNft] = useState({});

    return (
        <nftsContext.Provider value={{
            address, 
            updateAddress, 
            nfts, 
            setNfts,
            currentNft,
            setCurrentNft
        }}>
            {children}
        </nftsContext.Provider>
    )
}
