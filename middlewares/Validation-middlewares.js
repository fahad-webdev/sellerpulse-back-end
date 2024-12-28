
const Validate = (schema) => async (req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Error:"; //errors is an array that generate through zod validation and we only want the first error message thats why used [0] index
        const extraDetail = err.errors[0].message;//this message is from auth-validator

        const error = {//the error object that we creat will pass in next to the error-middlewares.js
            status ,
            message,
            extraDetail,
        }
        next(error);
    }
}
module.exports = Validate;