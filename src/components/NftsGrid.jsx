import React, { useEffect, useContext, useState } from "react";
import { nftsContext } from "../context/NftsContext";
import NftCard from "./NftCard";
import "../styles/NftsGrid.css";
import { getNfts } from "../api/getNfts";

export default function NftsGrid({onClick}) {
    const {address, nfts, setNfts} = useContext(nftsContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (address === '') return;

        setIsLoading(true);   
        getNfts(address)
            .then(nfts => nfts.filter((nft) => nft.media[0]?.gateway && nft.description.length && nft.title.length))
            .then(nfts => {
                console.log(nfts);
                setNfts(nfts);
                setIsLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setIsLoading(false);
                setNfts([]);
            });
    }, [address]);

    const nftsElements = nfts.map((nft) => {
        return <NftCard key={nft.id} nft={nft} onClick={() => onClick(nft.id)} />            
    });

    return (
        <div className="nfts-grid--container">
            { isLoading ? 
                <h2>Loading...</h2> :
                nftsElements.length > 0 ? 
                    <div className="nfts-grid--grid">
                        {nftsElements}
                    </div> :
                    address === '' ?
                        <h2>Enter an address</h2> :
                        <h2>The specified address doesn't have any NFT</h2>
            }
        </div>
    )
}