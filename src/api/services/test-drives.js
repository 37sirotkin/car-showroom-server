const ServerError = require('../../lib/error');
const {TestDrive} = require('./../../models/test-drive');

module.exports.findTestDrives = async () => {
  const testDrive = await TestDrive.findAll();
  return {
    status: 200,
    data: testDrive.map(c => c.dataValues)
  };
};

module.exports.createTestDrive = async (options) => {
  const testDrive = await TestDrive.create(options.testDrive);
  return {
    status: 200,
    data: testDrive
  };
};





