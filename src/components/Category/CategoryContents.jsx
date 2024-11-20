"use client"
import { fetchData } from '@/db/lib/api'
import React, { useEffect, useState } from 'react'
import CategoryContentCard from './CategoryContentCard'

export default  function CategoryContents() {
  // const url = 'http://localhost:3000/api/categories'
  // const getData = await fetchData(url)
  
  const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:3000/api/categories');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures it runs only once

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  

  return (
    <div className='border w-full  '>
      <CategoryContentCard getData={getData}/>
    </div>
  )
}
