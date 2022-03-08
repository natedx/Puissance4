const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(sinonChai)
chai.use(chaiAsPromised)

const expect = chai.expect
const assert = chai.assert

module.exports = {
  sinon,
  expect,
  assert,
}