import axios from 'axios'
import { URL_REGISTER_GARAGE } from '../../constants/URL'

const PATCHGarage = props => {
  const salida = JSON.stringify(props);
  console.log(salida);
  axios.post((URL_REGISTER_GARAGE), JSON.stringify(props), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        alert("El garage se guardó con éxito");
      }
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.status !== 500) {
          alert(err.response.data.message);
        } else {
          alert("No se puede conectar con la base de datos")
        }
      }
    })
}

export default PATCHGarage;