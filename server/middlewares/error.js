//creation for error
const createError = (status, message) => {
    const err = new Error(message);
    err.status = status;
    return err;
};

//middleware for error
const errorMiddleware = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).send({ status: errorStatus, message: errorMessage })
}


module.exports = { createError, errorMiddleware }