/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器-公共方法
 */
let Utils = {
  getUuid: function() {
    return (Math.random() * 10000000).toString(16)
      .substr(0, 4) + '' + (new Date()).getTime() + '' + Math.random()
      .toString()
      .substr(2, 5);
  }
};

export default Utils
