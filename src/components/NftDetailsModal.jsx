import React, { useContext } from "react";
import { nftsContext } from "../context/NftsContext";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { trimString } from "../utils/FormatStrings";
import "../styles/NftDetailsModal.css";

export default function NftDetailsModal({isVisible, setVisible}) {
    const {address, currentNft} = useContext(nftsContext);

    return (
        isVisible && 

        ReactDOM.createPortal(
            <div className="nft-details-modal">
                <div className="rectangle">
                    <IoClose className="close-button" onClick={() => setVisible(false)}/>
                    <img className="nft-image" src={currentNft.media[0].gateway} alt="" />
                    <div className="details">
                        <h1 className="details--title">{trimString(currentNft.title, 30)}</h1>
                        <div className="details--property">
                            <h3 className="details--property-name">Description</h3>
                            <h3>{trimString(currentNft.description, 300)}</h3>
                        </div>
                        <div className="details--property">
                            <h3 className="details--property-name">Token Id</h3>
                            <h3>{trimString(currentNft.tokenId, 20)}</h3>
                        </div>
                        <div className="details--property">
                            <h3 className="details--property-name">Collection</h3>
                            <h3>{trimString(currentNft.contract.address, 20)}</h3>
                        </div>
                        <div className="details--property">
                            <h3 className="details--property-name">Owner</h3>
                            <h3>{trimString(address, 20)}</h3>
                        </div>
                        <a 
                            className="details--button" 
                            href={`http://www.opensea.com/assets/ethereum/${currentNft.contract.address}/${currentNft.tokenId}`}
                            target="_blank"
                        >
                            Buy on OpenSea
                        </a>
                    </div>
                </div>
            </div>,
            document.getElementById("portal")
        )
    )
}