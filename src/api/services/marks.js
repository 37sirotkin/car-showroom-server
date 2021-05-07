const ServerError = require('../../lib/error');
const {Mark} = require('./../../models/mark');
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.findMarks = async (options) => {
  const where = {};
  const marks = await Mark.findAll({
    where
  });

  return {
    status: 200,
    data: marks.map(c => c.dataValues)
  };
};

