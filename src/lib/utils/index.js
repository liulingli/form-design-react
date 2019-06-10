/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器-公共方法
 */
let Utils = {
  isOwnOrParentHasClassName: function (event, className) {
    let target = event.target;
    if (!target) return false;
    if ((target.className || '').toLowerCase().indexOf(className.toLowerCase()) > -1) {
      return true;
    }
    while (target.parentNode) {
      target = target.parentNode;
      if ((target.className || '').toLowerCase().indexOf(className.toLowerCase()) > -1) {
        return true;
      }
    }

    return false;
  },
  isOwnOrParentHasId: function (event, id) {
    let target = event.target;
    if (!target) return false;
    if ((target.id || '').toLowerCase().indexOf(id.toLowerCase()) > -1) {
      return true;
    }
    while (target.parentNode) {
      target = target.parentNode;
      if ((target.id || '').toLowerCase().indexOf(id.toLowerCase()) > -1) {
        return true;
      }
    }

    return false;
  },
  findParentTarget: function (target, tagName) {
    if (!target) return null;
    if ((target.tagName || '').toLowerCase() === tagName.toLowerCase()) {
      return target;
    }
    while (target.parentNode) {
      target = target.parentNode;
      if ((target.tagName || '').toLowerCase() === tagName.toLowerCase()) {
        return target;
      }
    }
    return null;
  },
  findParentClassName: function (target, className) {
    if (!target) return null;
    if ((target.className || '').toLowerCase().indexOf(className.toLowerCase()) > -1) {
      return target;
    }
    while (target.parentNode) {
      target = target.parentNode;
      if ((target.className || '').toLowerCase().indexOf(className.toLowerCase()) > -1) {
        return target;
      }
    }
    return null;
  },
  findParentById: function (target, id) {
    if (!target) return null;
    if ((target.id || '').toLowerCase().indexOf(id.toLowerCase()) > -1) {
      return target;
    }
    while (target.parentNode) {
      target = target.parentNode;
      if ((target.id || '').toLowerCase().indexOf(id.toLowerCase()) > -1) {
        return target;
      }
    }
    return null;
  },
  getPosition: function (target) {
    if(!target){
      return {
        top: 0,
        left: 0
      }
    }
    let top = target.offsetTop;
    let left = target.offsetLeft;
    let parent = target.offsetParent;
    while(parent!=null){
      top += parent.offsetTop;
      left += parent.offsetLeft;
      parent = parent.offsetParent;
    }

    return {top, left};
  },
  getStyle: function (element, attr) {
    if (element.currentStyle) {
      return element.currentStyle[attr];
    }
    else {
      return document.defaultView.getComputedStyle(element, null)[attr];
    }
  },
  colorRGBtoJson: function (rgbColor) {
    let rgb = rgbColor.split(',');
    let r = parseInt(rgb[0].split('(')[1], 10);
    let g = parseInt(rgb[1], 10);
    let b = parseInt(rgb[2].split(')')[0], 10);
    let a = parseInt(rgb[3].split(')')[0], 10);
    return {r, g, b, a};
  },
  /**
   * 深度克隆对象，将source的属性克隆到target对象， 会覆盖target重名的属性。
   * @method clone
   * @param { Object } initalObj 源对象
   * @param { Object } finalObj 目标对象
   * @return { Object } 附加了source对象所有属性的target对象
   */
  deepClone: function (initalObj, finalObj) {
    let obj = finalObj || {};
    for (let i in initalObj) {
      let prop = initalObj[i]; // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
      if (prop === obj) {
        continue;
      }
      // 当为null/undefined/节点对象时停止循环
      if (typeof prop === 'object' && prop !== null && prop !== undefined && !prop.nodeType) {
        obj[i] = (prop.constructor === Array) ? [] : {};
        Utils.deepClone(prop, obj[i]);
      } else {
        obj[i] = prop;
      }
    }
    return obj;
  },
  isObj: function (object) {
    return object && typeof (object) === 'object' && Object.prototype.toString.call(object).toLowerCase() === "[object object]";
  },
  isArray: function (object) {
    return object && typeof (object) === 'object' && object.constructor === Array;
  },
  getLength: function (object) {
    let count = 0;
    for (let i in object) count++;
    return count;
  },
  compare: function (objA, objB) {
    let isNotObj = !Utils.isObj(objA) || !Utils.isObj(objB);
    let isNotArray = !Utils.isArray(objA) || !Utils.isArray(objB);
    if (isNotObj && isNotArray) return false;
    if (Utils.getLength(objA) !== Utils.getLength(objB)) return false; //判断长度是否一致
    return Utils.compareObj(objA, objB, true);//默认为true
  },
  compareObj: function (objA, objB, flag) {
    for (let key in objA) {
      if (!flag) //跳出整个循环
        break;
      if (!objB.hasOwnProperty(key)) {
        flag = false;
        break;
      }
      if (!Utils.isArray(objA[key])) { //子级不是数组时,比较属性值
        if(Utils.isObj(objA[key]) && Utils.isObj(objB[key])){
          flag = Utils.compareObj(objA[key], objB[key], flag);
        }else{
          if (objB[key] !== objA[key]) {
            flag = false;
            break;
          }
        }
      } else {
        if (!Utils.isArray(objB[key])) {
          flag = false;
          break;
        }
        let oA = objA[key], oB = objB[key];
        if (oA.length !== oB.length) {
          flag = false;
          break;
        }
        for (let k in oA) {
          if (!flag) //这里跳出循环是为了不让递归继续
            break;
          flag = Utils.compareObj(oA[k], oB[k], flag);
        }
      }
    }
    return flag;
  }
};

export default Utils
