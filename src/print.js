import {getStudent} from './request'
export default function printMe() {
  console.log('I get called from print.js! ')

  getStudent().then(res=>{
    console.log('学生数据', res)
  })
 
}
console.log(12344544)
