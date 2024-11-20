"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDuaContext } from '../Surah/ContextProvider';

export default function CategoryContentCard({ getData }) {
  const { setSubcategoryId } = useDuaContext();
  const [subcategories, setSubcategories] = useState([]);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  // Automatically expand the first category on initial render
  useEffect(() => {
    if (getData.length > 0) {
      setExpandedCategoryId(getData[0].cat_id); // Set the first category as expanded initially
      handleGetSubData(getData[0].cat_id); // Fetch subcategories for the first category
    }
  }, [getData]);

  // Function to fetch subcategories based on category ID
  const handleGetSubData = async (categoryId) => {
    if (expandedCategoryId === categoryId) {
      // If clicked category is already expanded, collapse it
      setExpandedCategoryId(null);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/subcategories?categoryId=${categoryId}`);
      const data = await response.json();
      setSubcategories(data);  // Store fetched subcategories in the state
      setExpandedCategoryId(categoryId);  // Set the clicked category as expanded
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  return (
    <div className="overflow-y-auto lg:max-h-[70vh]">
      {getData.map((category) => (
        <div key={category.id} className="p-4">
          <div className='flex justify-between  cursor-pointer'
            onClick={() => handleGetSubData(category.cat_id)}  // Pass the category ID on click

          >
            <div
              className="flex gap-x-3"
            >
              <Image src={'/icons/profile.svg'} width={40} height={40} alt="category icon" />
              <div>
                <h2>{category.cat_name_en}</h2>
                <h2>Subcategory: {category.no_of_subcat}</h2>
              </div>
            </div>
            <div className="text-center border-l-2">
              <p className="px-4">{category.no_of_dua} <br /> dua</p>
            </div>
          </div>

          {/* Show the subcategories directly below the clicked category */}
          {expandedCategoryId === category.cat_id && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
              <ul className="mt-2 list-decimal pl-4">
                {subcategories.length > 0 ? (
                  subcategories.map((subcat) => (
                    <li
                      onClick={() => setSubcategoryId(subcat.subcat_id)} // Set the clicked subcategory
                      key={subcat.subcat_id} className="p-2 border-b"
                    >
                      <button>{subcat.subcat_name_en}</button>
                    </li>
                  ))
                ) : (
                  <p>No subcategories available.</p>
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
