var capitalize = require('capitalize')

module.exports = {
  async validate(data, entity, statusCode = null) {
    if (data === null) {
      var data = {
        statusCode: 404,
        data: data,
        message: `${capitalize(entity)} not found`,
        entity: entity,
        code: `ITEM_NOT_FOUND`
      }
      throw new Error(JSON.stringify(data));
    } else if (data.length === 0) {
      var data = {
        statusCode: 404,
        data: data,
        message: `${capitalize(entity)} is empty`,
        entity: entity,
        code: `ITEM_IS_EMPTY`
      }
      throw new Error(JSON.stringify(data));
    } else {
      var data = {
        statusCode: 200,
        data: data,
        message: `${capitalize(entity)} found`,
        entity: entity,
        code: `FOUND`
      }
    }
    return data;
  },
};
