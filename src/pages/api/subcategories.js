import { getDatabase } from "@/db/lib/db";

export default async function handler(req, res) {
  const db = await getDatabase();

  try {
    // Get category_id from the query string
    const categoryId = req.query.categoryId; 

    // Make sure categoryId is provided
    if (!categoryId) {
      return res.status(400).json({ message: 'Category ID is required' });
    }

    // Query to fetch subcategories based on category_id
    const subcategories = await db.all(
      'SELECT * FROM sub_category WHERE cat_id = ?',
      [categoryId]
    );

    // Return subcategory data as a response
    res.status(200).json(subcategories);
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
