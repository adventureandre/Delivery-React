import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";
import { currencyFormat } from "../../Helpers/currencyFormat";

interface SnacksProps {
  snacks: any[];
}

export function Snacks({ snacks }: SnacksProps) {
  return (
    <Container>
      {snacks.map((snack)=>(
        <div key={snack.id} className='snack'>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <strong>{currencyFormat(snack.price)}</strong>
            <button type='button'><FiPlus/></button>
          </div>
        </div>
      ))}
    </Container>
  );
}
