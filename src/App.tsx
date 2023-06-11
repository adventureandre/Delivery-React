import {createContext, useEffect, useState} from "react";
import {BrowserRouter} from 'react-router-dom'

import {AppRoutes} from './routes'

import {Theme} from './styles/Theme'
import {GlobalStyle} from './styles/global'
import {Normalize} from 'styled-normalize'
import {SnackData} from "./interfaces/SnackData";
import {getBurgers, getDrinks, getIceCreams, getPizzas} from "./services/api";


interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

export const SnackContext = createContext({} as SnackContextProps)
export default function App() {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const drinksRequest = await getDrinks()
        const iceCreamsRequest = await getIceCreams()

        const requests = [burgerRequest, pizzaRequest, drinksRequest, iceCreamsRequest];

        const [
          {data: burgerResponse},
          {data: pizzaResponse},
          {data: drinksResponse},
          {data: iceCreamsResponse}
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinksResponse)
        setIceCreams(iceCreamsResponse)
      } catch (error) {
        console.log(error)
      }

    })()
  }, [])

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value={{burgers,pizzas,drinks,iceCreams}}>
          <AppRoutes/>
          <GlobalStyle/>
          <Normalize/>
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}
