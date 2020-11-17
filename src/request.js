const url = `/api/student/findAll?appkey=demo13_1545210570249`

export function getStudent() {
 return fetch(url)
    .then((resp) => resp.json())
}
