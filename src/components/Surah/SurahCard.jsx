"use client";
import { useEffect, useState } from "react";
import { useDuaContext } from "./ContextProvider";
import DuaCard from "./DuaCard";

export default function SurahCard() {
    const { subcategoryId,setSectionTitle } = useDuaContext();
    const [duas, setDuas] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("SurahCard Rendered with subcategoryId:", subcategoryId);

    useEffect(() => {

        const fetchDuas = async () => {
            setLoading(true);
            try {
                const response = await fetch(subcategoryId ? `http://localhost:3000/api/duas?subcategoryId=${subcategoryId}` : `http://localhost:3000/api/duas?subcategoryId=${1}`);
                const data = await response.json();
                setSectionTitle(data[1]?.dua_name_en
                )
                setDuas(data);
            } catch (error) {
                console.error("Error fetching duas:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDuas();
    }, [subcategoryId]);
    
    return (
        <div className="w-full p-6 bg-gray-50">

            {loading ? (
                <p>Loading...</p>
            ) : (
                <DuaCard duas={duas} />
            )}
        </div>
    );
}
