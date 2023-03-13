import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useEffect, useState } from "react";
import { getBurgers } from "../../../services/api";

export default function Burgers() {
  const [burgers,setBurgers] = useState([])

  useEffect(()=>{
    ;(async ()=>{
      const burgerRequest = await getBurgers()

      setBurgers(burgerRequest.data)
    })()
  },[])

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores Burguers" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  );

}
