const addToLocals = (req, res, next) => {
  res.locals.userId = req.session?.userId;
  res.locals.userEmale = req.session?.userEmale;
  res.locals.userName = req.session?.userName;
  next();
};

module.exports = { addToLocals };
