import React, { createContext, useState } from 'react';

export const apiContext = createContext();

export default function Context({ children }) {
    const [category, setCategory] = useState(0);
    const [searchData, setSearchData] = useState("");

    const valueConvertor = (value) => {
        if (value > 1000000) {
            return Math.floor(value / 1000000) + "M";
        } else if (value > 1000) {
            return Math.floor(value / 1000) + "K";
        } else {
            return value;
        }
    };

    return (
        <apiContext.Provider value={{ category, setCategory, valueConvertor, setSearchData, searchData }}>
            {children}
        </apiContext.Provider>
    );
}
