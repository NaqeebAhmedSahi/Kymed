import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true }, 
    title: { type: String, required: true },
    category: { type: String, required: true },
    srcUrl: { type: String, required: true },
    gallery: { type: [String], required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    link: { type: String, required: true },
  },
  { 
    timestamps: true,
    collection: "products" // Explicitly set the collection name
  }
);

// Check if model already exists to prevent recompilation
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;