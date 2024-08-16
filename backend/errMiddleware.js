exports.errMiddleware = (err, req, res, next) => {
  if (err.name === "CastError") {
    return res
      .status(400)
      .json({ sucess: false, message: "Invalid Id or Bad Request" });
  }
  if (err.message === "Please provide a valid todo") {
    return res.status(400).json({ sucess: false, message: err.message });
  }
  res.status(500).json({ sucess: false, message: err.message });
};

exports.catchAsyncError = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
