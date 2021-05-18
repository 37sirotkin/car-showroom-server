const ServerError = require('../../lib/error');
const {TestDrive} = require('./../../models/test-drive');
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.findTestDrives = async (options) => {
  const where = {};
  const testDrive = await TestDrive.findAll({
    where
  });

  return {
    status: 200,
    data: testDrive.map(c => c.dataValues)
  };
};

/**
 * @param {Object} options
 * @param {Object} options.testDrive Test drive to create
 * @throws {Error}
 * @return {Promise}
 */
module.exports.createTestDrive = async (options) => {
  console.log(options.testDrive);
  const testDrive = await TestDrive.create(options.testDrive);
  console.log(testDrive);
  return {
    status: 200,
    data: testDrive
  };
};

