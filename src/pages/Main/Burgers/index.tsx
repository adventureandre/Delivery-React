import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: "burger",
      name: "Mega",
      description:
        "O artesanal tamanho família recheado com três carnes suculentas, queijo e Bacon.",
      price: 25.50,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: "burger",
      name: "Extra Bacon",
      description:
        "Criado para os amantes de bacon, possui em todas as suas camadas de bacon bem assado e ainda queijo e carne.",
      price: 23.50,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ];

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores Burguers" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  );

}
