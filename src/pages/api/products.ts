import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Product from "../../app/models/Product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("📩 Incoming request:", req.method, req.query);

  try {
    console.log("🔌 Connecting to MongoDB...");
    await dbConnect();
    console.log("✅ MongoDB connected successfully");

    if (req.method === "GET") {
      const { id, category, subcategory } = req.query;
      console.log("📌 Query params -> id:", id, "category:", category, "subcategory:", subcategory);

      if (id) {
        console.log("🔍 Searching for product with id:", id);
        const product = await Product.findOne({ id: Number(id) });
        console.log("📦 Product result:", product);

        if (!product) {
          console.warn("⚠️ Product not found for id:", id);
          return res.status(404).json({ message: "Product not found" });
        }

        console.log("✅ Product found, sending response");
        return res.status(200).json({ message: "Product retrieved successfully", product });
      }

      if (category) {
        const formattedCategory = Array.isArray(category)
          ? category[0].replace(/-/g, " ").toLowerCase().trim()
          : category.replace(/-/g, " ").toLowerCase().trim();

        console.log("📂 Searching for products in category:", formattedCategory);

        // Build query object
        const query: any = {
          category: { $regex: new RegExp(formattedCategory, "i") },
        };

        // Add subcategory filter if provided
        if (subcategory) {
          const formattedSubcategory = Array.isArray(subcategory)
            ? subcategory[0].replace(/-/g, " ").toLowerCase().trim()
            : subcategory.replace(/-/g, " ").toLowerCase().trim();
          
          // Fix: Use $in operator to match any value in the subcategory array
          query.subcategory = { $in: [new RegExp(formattedSubcategory, "i")] };
          console.log("🔍 Filtering by subcategory:", formattedSubcategory);
        }

        const products = await Product.find(query);
        console.log(`✅ Retrieved ${products.length} products for category:`, formattedCategory);
        return res.status(200).json({ message: "Products retrieved successfully", products });
      }

      console.log("📂 Fetching all products (no id/category provided)");
      const products = await Product.find();
      console.log(`✅ Retrieved ${products.length} total products`);
      return res.status(200).json({ message: "Products retrieved successfully", products });
    }

    console.warn("🚫 Method not allowed:", req.method);
    return res.status(405).json({ message: "Method not allowed" });
  } catch (error: any) {
    console.error("❌ Error in /api/products:", error.message);
    res.status(500).json({
      message: "Error retrieving products",
      error: error.message,
    });
  }
}