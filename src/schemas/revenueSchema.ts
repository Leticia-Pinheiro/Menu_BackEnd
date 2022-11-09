import joi from 'joi'

const revenueSchema = joi.object({
    title: joi.string().required(),
    ingredients: joi.string().required(),
    preparation: joi.string().required(),
    imageUrl: joi.string().pattern(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).required()
});

export default revenueSchema