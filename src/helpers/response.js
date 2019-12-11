var capitalize = require('capitalize')

module.exports = {
  async sendResponse(data, res, entity) {
    if (data === null) {
      var data = {
        statusCode: 404,
        message: `${capitalize(entity)} not found`,
        entity: entity,
        code: `ITEM_NOT_FOUND`
      }
    } else {
      var data = {
        statusCode: 200,
        data: data,
        entity: entity,
      }
    }
    res.status(data.statusCode);
    return res.json(data);
  },
};
