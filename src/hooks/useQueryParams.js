import {useLocation} from "react-router-dom"


export const useQueryParams = () => {
  return new URLSearchParams(useLocation().search) // Така конструкція дозоляє повернути клас, тобто об'єк
}