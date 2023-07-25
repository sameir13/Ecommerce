import productModel from "../../../models/product";
import dbConnect from "../../../config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  try {
    const findProduct = await productModel.find();
    res.status(201).json({
      success: true,
      message: findProduct,
    });
  } catch (error) {
    console.log(error);
  }
}
