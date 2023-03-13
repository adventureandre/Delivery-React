import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useEffect, useState } from "react";
import { getIceCreams } from "../../../services/api";

export default function IceCreams(){
  const [iceCreams,setIceCreams] = useState([])

  useEffect(()=>{
    (async ()=>{
      const iceCreamsRequest = await getIceCreams()

      setIceCreams(iceCreamsRequest.data)
    })()
  },[])

  return (
    <>
      <Head title="Sorvertes" description="Nossos melhores Sorvertes" />
      <SnackTitle>Sorvertes</SnackTitle>
      <Snacks snacks={iceCreams}/>
    </>
  )
}
