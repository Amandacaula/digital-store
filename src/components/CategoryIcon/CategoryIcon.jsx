import { Link } from "react-router-dom";
import { CapIcon, HeadphonesIcon, PantsIcon, SneakerIcon, TShirtIcon } from "../Icons/Icons";
import "./CategoryIcon.css";


// Relaciona o nome do ícone (vindo dos dados) com o componente do ícone
const icons = {
  tshirt: TShirtIcon,
  pants: PantsIcon,
  cap: CapIcon,
  headphones: HeadphonesIcon,
  sneaker: SneakerIcon,
};

function CategoryIcon({ name, icon, link }) {
  // Componentes precisam começar com letra maiúscula para o React reconhecê-los
  const Icon = icons[icon];


  return (
    <Link to={link} className="category-icon">
      <span className="category-icon__circle">
        <Icon />
      </span>
      <span className="category-icon__name">{name}</span>
    </Link>
  );
}


export default CategoryIcon;

