import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name"],
      unique: true,
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Please enter the product description"],
    },
    slug: {
      type: String,
      required: [true, "Slug is Required!"],
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please enter the product price"],
    },

    images: [
      {
        public_id: {
          type: String,
        },

        url: {
          type: String,
        },
      },
    ],

    category: {
      type: String,
      required: [true, "Please enter the category"],
      enum: {
        values: [
          "Electronics",
          "Cameras",
          "Laptops",
          "Accessories",
          "Headphones",
          "Sports",
        ],
        message: "Please select the correct category",
      },
    },

    seller: {
      type: String,
      required: [true, "Please enter product seller"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
    },
    ratings: {
      type: Number,
      default: 0,
    },

    reviews: [
      {
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Product ||
  mongoose?.model("Product", productSchema);
