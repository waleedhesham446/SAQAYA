const crypto = require('crypto');

module.exports.generateHash = (plain) => {

  const data = plain + process.env.EMAIL_HASH_SALT;
  
  const hash = crypto.createHash('sha1');

  hash.update(data);

  const hashedData = hash.digest('hex');

  return hashedData;
}