const ServerError = require('../../lib/error');
const {User} = require('./../../models/user');
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.findUsers = async (options) => {
  const where = {};
  const users = await User.findAll({
    where
  });

  return {
    status: 200,
    data: users.map(c => c.dataValues)
  };
};

