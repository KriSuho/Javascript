//表单验证

  // 1 验证QQ号
  var txtQQ = document.getElementById('txtQQ');
  // 当光标离开文本框的时候
  txtQQ.onblur = function () {
    // 验证用户的输入是否是QQ号
    var reg = /^\d{5,12}$/;
    var span = this.nextElementSibling;
    // 检测用户输入的文本是否匹配指定的模式（正则表达式）
    if (!reg.test(this.value)) {
      // 不匹配  在文本框后面的span中进行相应的提示
      span.innerText = '请输入正确的QQ格式';
      span.style.color = 'red';
    } else {
      // 匹配
      span.innerText = '';
      span.style.color = '';
    }
  }