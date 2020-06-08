export default function({$axios}) {
  $axios.setHeader('Authorization', '123')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}