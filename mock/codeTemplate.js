const path = require('path');
const fse = require('fs-extra');

const basePagePath = path.resolve(__dirname, '../src/pages');
const pagePaths = fse.readdirSync(basePagePath);

const handleGetPage = pagePathParams =>
  pagePathParams.reduce((resolvePath, currentPath) => {
    const currents = fse.readdirSync(path.resolve(basePagePath, currentPath));
    let result = {};
    if (currents.some(current => !current.includes('.'))) {
      result = Object.assign(
        {},
        result,
        handleGetPage(currents.filter(current => !current.includes('.')).map(item => `${currentPath}/${item}`)),
      );
    }
    return Object.assign(
      resolvePath,
      {
        [currentPath]: path.resolve(basePagePath, currentPath, 'index.tsx'),
      },
      result,
    );
  }, {});

const resultPath = handleGetPage(pagePaths);

const result = Object.entries(resultPath).reduce((result, [key, value]) => {
  return Object.assign(result, {
    [`GET /api/code/${key}/`]: { code: fse.readFileSync(value, 'utf-8') },
  });
}, {});

module.exports = result;
