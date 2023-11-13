const jwt = require('jsonwebtoken');

module.exports.verify = (req, res, next) => {
  try {
    const [type, token] = req.headers.authorization.split(' ');
    if (type !== 'Bearer') {
      return res.status(401).json({
        message: 'Invalid Token Type'
      });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (decoded.id !== req.params.id) {
      return res.status(401).json({
        message: 'Unauthorized'
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  }
}