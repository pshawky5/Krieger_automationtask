module.exports = function(json) {
  return JSON.stringify(JSON.parse("" + json), null, 2);
};
