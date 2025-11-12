// PhoneInput.jsx
import React from "react";
import { IMaskInput } from "react-imask";

export default function PhoneInput({ name, value, onChange }) {
    // digits после +7
    const digits = value.replace(/\D/g, "").slice(1);
    const isValid = digits.length === 10;

    return (
        <IMaskInput
            mask="+{7}(000)000-00-00"
            value={value}
            name={name}
            onAccept={onChange}
            placeholder="+7(___)___-__-__"
            className="bg-white rounded-[20px] px-3 py-4 w-full focus:outline-none focus:ring-0 z-500"
            required
        />
    );
}
