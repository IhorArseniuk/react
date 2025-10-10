import Joi from "joi";

export const carValidator=Joi.object({
id:Joi.number().min(1).messages({
    "number.min":"id is to short"
}),
    brand:Joi.string().required().min(1).max(30).pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).messages({
        "string.min":"name of brand is to short",
        "string.max":"name of brand is to long",
    }),
    price:Joi.number().required().min(1000).max(1000000).messages({
        "number.min":"price is to small",
        "number.max":"price is to big",
    }),
    year:Joi.number().required().min(1990).max(2025).messages({
        "number.min":"year is incorrect",
        "number.max":"year is unreal",
    })

    });
