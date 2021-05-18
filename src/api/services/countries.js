const ServerError = require('../../lib/error');
const {Country} = require('./../../models/country');
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.findCountry = async (options) => {
  const where = {};
  const countries = await Country.findAll({
    where
  });

  return {
    status: 200,
    data: countries.map(c => c.dataValues)
  };
};

