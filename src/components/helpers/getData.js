import axios from 'axios'

const url = 'http://api.invent.mx/v1/actitudfem/node.json/22360f3a2e03f847acf5339695e42e5b??limit=9&sort=created:DESC&fields=id%7Ctitle%7Csummary%7Curl%7Cimages%7Ctype'

const Axios = {
  getData : () => {
    axios.get(url,{})
      .then( (res) => console.log(res))
      .catch( (err) => console.log(err))
  }
}

export default Axios
