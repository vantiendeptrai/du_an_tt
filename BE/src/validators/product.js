import joi from "joi";
import { errorMessages } from "./component/function";

export const productSchema = joi
  .object({
    name: joi.string().required().messages(errorMessages("Tên")),
    price: joi.number().min(0).required().messages(errorMessages("Giá")),
    original_price: joi
      .number()
      .min(0)
      .required()
      .messages(errorMessages("Giá gốc")),
    inventory: joi
      .number()
      .min(0)
      .required()
      .messages(errorMessages("Số lượng")),
    description: joi.string().required().messages(errorMessages("Mô tả")),
    category: joi.string().required().messages(errorMessages("Danh mục")),
    images: joi
      .array()
      .min(1)
      .required()
      .items(
        joi.object({
          status: joi.string().required().messages(errorMessages("Trạng thái")),
          name: joi.string().required().messages(errorMessages("Tên")),
          uid: joi.string().required().messages(errorMessages("Uid")),
          url: joi.string().required().messages(errorMessages("Đường dẫn")),
        })
      )
      .messages(errorMessages("Ảnh")),
  })
  .unknown(true);
