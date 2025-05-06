const Joi=require('joi');
const userSchema=Joi.object({
    Name:Joi.string().required(),
    age:Joi.string().required(),
    isActive:Joi.boolean().default(true)
})

module.exports={userSchema}