// 功能1: 全选反选功能
// 思路: 先给所有的按钮, 添加点击事件, 点击的时候, 切换类 checked

;(function() {

  // 拿到所有的按钮
  var all = document.querySelectorAll(".jd_checkbox");
  // 全选反选按钮
  var selectAll = document.querySelector(".goods_title .jd_checkbox");
  // 下面的所有按钮
  var checkBoxs = document.querySelectorAll(".goods_wrapper .jd_checkbox");

  // 给每一个按钮, 都要添加点击事件
  all.forEach(function( v, i ) {
    v.addEventListener("click", function() {
      // 切换当前元素的类
      this.classList.toggle("checked");
    });
  });

  // 全选反选按钮, 被点击时, 要让下面的所有按钮, 进行同步状态
  selectAll.addEventListener("click", function() {

    if ( this.classList.contains("checked") ) {
      // 让下面的所有按钮, 都加上 checked 类
      checkBoxs.forEach(function( v, i ) {
        v.classList.add("checked");
      });
    }
    else {
      checkBoxs.forEach(function( v, i ) {
        v.classList.remove("checked");
      })
    }

  })

})();



// 功能2: 点击垃圾桶显示模态框
;(function() {

  // 获取所有的垃圾桶
  var deleteBoxs = document.querySelectorAll(".delete_box");
  var modal = document.querySelector(".jd_modal");
  var cancel = document.querySelector(".jd_modal .cancel");

  var currentBox;

  // 每个都要注册点击事件
  deleteBoxs.forEach(function( v, i ) {
    v.addEventListener("click", function() {

      // 1. 显示模态框
      modal.style.display = "block";

      // 2. 垃圾盖飞起来, 给垃圾桶添加 current 类即可
      this.classList.add("current");

      // 3. 记录下来, 哪个垃圾桶被点击了
      currentBox = this;
    });
  });


  // 点击取消, 关闭模态框, 让垃圾桶盖起来
  cancel.addEventListener("click", function() {
    // 1. 关闭模态框
    modal.style.display = "none";

    // 2. 盖上垃圾桶
    currentBox.classList.remove("current");
  });


})();