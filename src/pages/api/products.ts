import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../lib/dbConnect"; // Ensure this file contains your MongoDB connection logic
import Product from "../../app/models/Product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase(); // Connect to MongoDB

  if (req.method === "GET") {
    try {
      const { id, category } = req.query;

      if (id) {
        // Fetch product by ID from the database
        const product = await Product.findOne({ id: Number(id) });

        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product retrieved successfully", product });
      } else if (category) {
        const formattedCategory = Array.isArray(category) ? category[0].replace(/-/g, " ").toLowerCase().trim() : category.replace(/-/g, " ").toLowerCase().trim();
        if (formattedCategory === "all") {
          const products = await Product.find();
          res.status(200).json({ message: "All products retrieved successfully", products });
        } else {
          const products = await Product.find({ category: { $regex: new RegExp(formattedCategory, "i") } });
          res.status(200).json({ message: "Products retrieved successfully", products });
        }
      } else {
        // Fetch all products from the database if no ID or category is provided
        const products = await Product.find();
        res.status(200).json({ message: "Products retrieved successfully", products });
      }
    } catch (error) {
      res.status(500).json({ message: "Error retrieving products", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
