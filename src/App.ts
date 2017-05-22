console.log('cannot even')

async function Wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

async function Yolo() : Promise<any> {
  await Wait()
  console.log('swag')
}

Yolo()

export default {
  name: 'app',
  data() {
    return {
      yolo: "swag"
    }
  }
}
