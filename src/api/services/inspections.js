const ServerError = require('../../lib/error');
const {Inspections} = require('./../../models/inspection');
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.findInspections = async (options) => {
  const where = {};
  const inspections = await Inspections.findAll({
    where
  });

  return {
    status: 200,
    data: inspections.map(c => c.dataValues)
  };
};

module.exports.createInspections = async (options) => {
  const inspections = await Inspections.create(options.inspections);
  return {
    status: 200,
    data: inspections
  };
};

