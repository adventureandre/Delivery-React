import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useEffect, useState } from "react";
import { getPizzas } from "../../../services/api";

export default function Pizzas(){
  const [pizzas,setPizzas] = useState([])

  useEffect(()=>{
    (async ()=>{
      const pizzasRequest = await getPizzas()

      setPizzas(pizzasRequest.data)
    })()
  },[])

  return (
    <>
      <Head title="Pizzas"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}/>
    </>
  )
}
