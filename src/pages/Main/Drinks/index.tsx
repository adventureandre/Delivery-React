import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";

export default function Drinks(){
  const data = [
    {
      id: 1,
      snack: "drink",
      name: "Coca-Cola 2L",
      description:
        "A tradicional Coca-Cola  que a famíla brasileira adora.",
      price: 12,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: "drink",
      name: "Guaraná Antartica",
      description:
        "O irresistível e saboroso Guaraná Antartica em sua versão de latinha.",
      price: 6.5,
      image: 'https://i.imgur.com/hOBrOIm.jpg',
    },
    {
      id: 3,
      snack: "drink",
      name: "Suco de Abacaxi",
      description:
        "Suco natural de abacaxi com leves incrementos de algumas hortaliças para fortificar sua saúde.",
      price: 8,
      image: 'https://i.imgur.com/VV9qTMh.jpg',
    }
  ];


  return (
    <>
      <Head title="Bebidas" description="Nossos melhores Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}/>
    </>
  )
}
