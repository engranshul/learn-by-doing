const comments = [
{"name":"anul"},
{"name":"anshl"},
{"name":"shul"},
{"name":"ansh"}
]

// spread a new array using spread operator

const newComments = [

    ...comments.slice(0,2),
    ...comments.splice(3)
]

// removed one element from new array however original array is intact
console.log(newComments);  