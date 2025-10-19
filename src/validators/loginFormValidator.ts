import * as Joi from "joi";

export const loginFormValidator=Joi.object({
    username:Joi.string().required().min(1).max(255).pattern(/^[a-zA-Z0-9_-]+$/).messages({
       "string.min": " username is to short",
        "string.max":" username is to big",
        "string.pattern.base":" username is Incorrect",
    }),
    password:Joi.string().min(1).max(100).required().pattern(/^[a-zA-Z0-9_-]+$/).messages({

        "string.min":"password is to short",
        "string.max":"password is to big",
        "strring.pattern.base":"password is incorrect"
    })
})
