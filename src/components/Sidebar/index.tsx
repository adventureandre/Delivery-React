import { Container } from "./styles";
import {ReactComponent as BurgerIcon} from '../../assets/burger.svg'

export function Sidebar(){
  return <Container>
    <button>x</button>
    <nav>
      <ul>
        <li>
          <a href="#">
            <BurgerIcon/>
            <span>Hamburgueres</span>
          </a>
        </li>
      </ul>
    </nav>
  </Container>
}
