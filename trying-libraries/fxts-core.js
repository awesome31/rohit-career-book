
const {pipe, map, toArray } = require("@fxts/core")

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          doctors: [{
            name: 'Dr. A',
            age: 30
          }]
        }
      })
    }, 1000)
  })
}

const extractDoctors = (res) => res.data.doctors
const extractName = (doctor) => doctor.name

const names = pipe(
  someAsyncOperation(),
  extractDoctors,
  map(extractName),
  toArray
)

names.then(console.log) // ['Dr. A']
