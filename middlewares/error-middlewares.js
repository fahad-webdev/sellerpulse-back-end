const ErrorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetail = err.extraDetail || "This is backend logical error ";

  return res.status(status).json({ message, extraDetail });
};
module.exports = ErrorMiddleware;
