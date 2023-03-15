import { useState } from "react";

export default function useAddress() {
    const [address, setAddress] = useState('');

    function updateAddress() {
        setAddress(document.getElementById('address-input').value);
    }

    return [
        address,
        updateAddress
    ]
}
