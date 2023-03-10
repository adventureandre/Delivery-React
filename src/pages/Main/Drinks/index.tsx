import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useEffect, useState } from "react";
import { getDrinks } from "../../../services/api";

export default function Drinks(){
  const [drinks,setDrinks] = useState([])

  useEffect(()=>{
    (async ()=>{
      const drinksRequest = await getDrinks()

      setDrinks(drinksRequest.data)
    })()
  },[])


  return (
    <>
      <Head title="Bebidas" description="Nossos melhores Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}/>
    </>
  )
}
