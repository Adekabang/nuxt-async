export default function({$axios}) {
  $axios.setHeader('Authorization', 'abc123')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}