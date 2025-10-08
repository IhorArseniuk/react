import Joi from "joi";

export const carValidator=Joi.object({
id:Joi.number().required().min(1).messages({
    "number.min":"id is to short"
}),
    brand:Joi.string().required().minLength(1).maxLength(30).pattern(/(A-Z)\w+/).messages({
        "string.min":"name of brand is to short",
        "string.max":"name of brand is to long",
    }),
    price:Joi.number().required().min(1000).max(9999999).messages({
        "number.min":"price is to small",
        "number.max":"price is to big",
    }),
    year:Joi.number().required().min(1870).max(2025).messages({
        "number.min":"year is incorrect",
        "number.max":"year is unreal",
    })

    });
