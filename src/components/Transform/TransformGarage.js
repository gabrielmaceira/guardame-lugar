import { cookieName } from '../../constants/Cookie'
import Cookies from 'universal-cookie'

const TransformGarage = formData => {
  const cookies = new Cookies();
  const cookie = cookies.get(cookieName);

  const user_id = cookie.user_id;
  const coordenadas = "0";

  const transformedForm = {
    "user_id": user_id,
    "nombre_garage": formData.nombre_garage,
    "direccion": formData.direccion_garage, 
    "coordenadas": coordenadas, 
    "localidad_garage": parseInt(formData.localidad_garage,10), 
    "telefono": formData.telefono_garage, 
    "lugar_autos": parseInt(formData.lugar_autos,10), 
    "lugar_motos": parseInt(formData.lugar_motos,10), 
    "lugar_camionetas": parseInt(formData.lugar_camionetas,10), 
    "lugar_bicicletas": parseInt(formData.lugar_bicicletas,10), 
    "altura_maxima": parseInt(formData.altura_maxima,10), 
  }
  return transformedForm;
}

export default TransformGarage;