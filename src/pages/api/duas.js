import { getDatabase } from "@/db/lib/db";

export default async function handler(req, res) {
  const db = await getDatabase();

  try {
    // Get subcategory_id from the query string
    const subcategoryId = req.query.subcategoryId;

    // Make sure subcategoryId is provided
    if (!subcategoryId) {
      return res.status(400).json({ message: 'Subcategory ID is required' });
    }

    // Query to fetch duas based on subcategory_id
    const duas = await db.all(
      'SELECT * FROM dua WHERE subcat_id = ?',
      [subcategoryId]
    );

    // Return the duas data
    res.status(200).json(duas);
  } catch (error) {
    console.error('Error fetching duas:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
