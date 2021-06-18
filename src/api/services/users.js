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

module.exports.findUser = async (userQuery) => {
  const user =  await User.findOne({ where: userQuery });
  return user && user.dataValues;
};

module.exports.createUser = async () => {
  const user = await User.create(options.user);
  return {
    status: 200,
    data: user
  };
}

