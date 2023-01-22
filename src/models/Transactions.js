import joi from "joi";

export const transactionsSchema = joi.object({
  value: joi.number().required(),
  description: joi.string().required().min(3),
  type: joi.string().required().valid("entrada", "saida"),
  user: joi.object().required(),
  createdAt: joi.string().required(),
});