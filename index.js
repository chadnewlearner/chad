/**
 * Created by chad on 2016/10/29.
 */
function aStyle(){
  var num=0;
  var oldDiv=null;
  var oldA=null;
  var alist = document.querySelectorAll("div.dropdown-menu div.affix>ul>li.product a");
  var divs=document.querySelectorAll("div.dropdown-menu>div.right-body>div");
  //divs[num].className="select";
  alist[num].className="current";
  oldDiv=divs[num];
  oldA=alist[num];
  for (var i = 0; i < alist.length; i++) {
    alist[i].index=i;
    alist[i].onmouseenter = function () {
      //清空current样式
      for(var i=0;i<alist.length;i++){
        alist[i].className="";
      }
      oldDiv.className="";
      oldDiv=divs[this.index];
      divs[this.index].className="select"
      this.className = "active";
    }
    alist[i].onmouseleave = function () {
      this.className = "current";
      //下拉菜单中二级菜单的第一个选项始终为block;
      var dropDownMenu=document.querySelectorAll("div.dropdown-menu div.right-body");
      for(var i=0;i<dropDownMenu.length;i++){
        dropDownMenu[i].children[num].className="select";
      }
    }
  }
}
aStyle();
/*弹出框*/
function popMenu(){
  var aList=document.getElementsByClassName("dropdown");
  for(var i=0;i<aList.length;i++){
    aList[i].onmouseover=function(){
      this.children[1].style.display='block';
    }
    aList[i].onmouseout=function(){
      this.children[1].style.display='none';
    }
  }
}
popMenu();
//点击下拉菜单中的收起按钮时，下拉菜单同样会消失
var btnHide=document.querySelector('i.hide-icon');
btnHide.onclick=function(){
  this.parentNode.style.display='none';
}

//顶部连接按钮
window.onscroll=function(){
  var toplink=document.getElementById('back-to-top');
  toplink.className=(document.body.scrollTop>=500)?"fade-in":"fade-out";
  //toplink.style.display=(document.body.scrollTop>=500)?"block":"none";
}
