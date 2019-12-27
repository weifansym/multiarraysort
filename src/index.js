/**
 * 具体排序逻辑
 *
 * @param {*} a
 * @param {*} b
 * @param {*} attr
 * @param {*} asc
 */
function sortAction(a, b, attr, asc) {
  let result = 0;
  if (!a[attr]) {
    throw new Error(`${attr} attr not found`);
  }
  if (!Number(a[attr])) {
    throw new Error(`${attr} must be number`);
  }
  if (typeof asc !== 'boolean') {
    throw new Error('asc must be boolean');
  }
  // 升序
  if (asc) {
    result = Number(a[attr]) - Number(b[attr]);
  } else {
    result = Number(b[attr]) - Number(a[attr]);
  }
  return result;
}

/**
 * 数组排序
 *
 * @param {*} array
 * @param {*} sortLists
 *
 * example sortLists: [{attr: '', asc: true}]
 * 其中attr：需要排序的属性，asc: true-升序,false-降序
 */
function sortUtil(array, sortLists) {
  if (!array) {
    throw new Error('param must can not be null');
  } if (!Array.isArray(array)) {
    throw new Error('param must be array');
  } if (array.length === 0) {
    return [];
  }
  if (!sortLists) {
    return array;
  } if (!Array.isArray(sortLists)) {
    throw new Error('param must be array');
  } if (sortLists.length === 0) {
    return [];
  }
  const arrParams = JSON.parse(JSON.stringify(array));
  // 通过一定封装可以扩展到多值，不同条件排序
  arrParams.sort((a, b) => {
    let result = 0;
    const firstSort = sortLists[0];
    result = sortAction(a, b, firstSort.attr, firstSort.asc);
    if (result !== 0) {
      return result;
    }
    const secondSort = sortLists[1];
    if (!secondSort) {
      return result;
    }
    result = sortAction(a, b, secondSort.attr, secondSort.asc);
    return result;
  });
  return arrParams;
}

exports.sortUtil = sortUtil;