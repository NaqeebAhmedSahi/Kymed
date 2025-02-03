import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true }, // Assuming 'id' is unique for each product
    title: { type: String, required: true },
    category: { type: String, required: true },
    srcUrl: { type: String, required: true },
    gallery: { type: [String], required: true },
    description: { type: String, required: true }, 
    rating: { type: Number, required: true },
    link: { type: String, required: true }, // Assuming 'link' is always provided
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
