import React, { useState } from "react";
import NftsGrid from "../components/NftsGrid";
import NftDetailsModal from "../components/NftDetailsModal";
import "../styles/Home.css";

export default function Home() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="home">
            <NftsGrid onClick={setShowDetails} />
            <NftDetailsModal isVisible={showDetails} setVisible={setShowDetails} />
        </div>
    )
}