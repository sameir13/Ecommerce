import productModel from "../../../models/product";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const singleProduct = await productModel.findOne({
          slug: req.query.slug,
        });
        res.status(201).json({
          success: true,
          message: singleProduct,
        });
      } catch (error) {
        console.log(error);
      }

      break;

    case "DELETE":
      try {
        const singleProduct = await productModel.findOne({
          slug: req.query.slug,
        });
        if (!singleProduct) {
          res.status(404).json({
            success: false,
            message: "Product doesnt exist",
          });
        } else {
          const deleteProduct = await productModel.findByIdAndDelete(
            singleProduct._id
          );
          res.status(201).json({
            success: true,
            message: "Product has been removed",
          });
        }
      } catch (error) {
        console.log(error);
      }

      break;
    case "PUT":
      try {
        const singleProduct = await productModel.findOne({
          slug: req.query.slug,
        });
        if (!singleProduct) {
          res.status(404).json({
            success: false,
            message: "Product doesnt exist",
          });
        } else {
          const updateProduct = await productModel.findByIdAndUpdate(
            singleProduct._id,
            {
              $set: {
                ...req.body,
                slug: req.body.title
                  .trim()
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^\w-]+/g, "")
                  .replace(/--/g, "-"),
              },
            },
            { new: true }
          );
        }
      } catch (error) {
        console.log(error)

      }

      break;

    default:
      break;
  }
}
