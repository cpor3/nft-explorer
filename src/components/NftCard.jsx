import React, { useContext } from "react";
import { nftsContext } from "../context/NftsContext";
import "../styles/NftCard.css";

export default function NftCard({nft, onClick}) {
    const {currentNft, setCurrentNft} = useContext(nftsContext);

    function showNftDetails(onClick) {
        setCurrentNft(nft);
        onClick();
    }

    return (
        <div className="nft-card" onClick={() => showNftDetails(onClick)}>
            <div className="nft-card--image">
                <img src={nft.media[0].gateway} alt="" />
            </div>
            <div className="nft-card--details">
                <h3 className="nft-card--name">{nft.title}</h3>
                <h4 className="nft-card--description">{nft.contract.openSea?.collectionName}</h4>
            </div>
        </div>
    )
}
