export default function printMe() {
  console.log('I get called from print.js! ')

  const url = `/api/student/findAll?appkey=demo13_1545210570249`
  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(22, resp)
    })
}
console.log(1234458)
