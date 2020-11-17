// import _ from 'lodash';
if(module.hot){ // 是否开启了热更新
  module.hot.accept() // 接受热更新
}
import byteDance from './byteDance.png'
import printMe from './print.js';
import styles from './style.less';
import './index.less'

console.log(1, styles)

console.log('byteDance', byteDance)
console.log('test')

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console and query student';
  btn.onclick = printMe;


  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = 'hello webpack';
  element.classList.add('hello');

     // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = byteDance;

  element.appendChild(btn);
  element.appendChild(myIcon);



  return element;
}
console.log(222)
document.body.appendChild(component());
