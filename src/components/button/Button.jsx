import { ButtonSryled } from './Button.styled';

const Button = ({ children, type = "submit" }) => {
    return <ButtonSryled type={type}>{ children}</ButtonSryled>
}

export default Button;