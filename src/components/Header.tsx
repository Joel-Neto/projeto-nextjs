import Link from "next/link";
import { ReactNode, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Header(props: {
  children?: ReactNode;
  color: string;
  light: boolean;
  dark: boolean;
  expand: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...props} className="py-4 px-3">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link href="/products" legacyBehavior>
                <a className="nav-link me-2">Produtos</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/cart" legacyBehavior>
                <a className="nav-link me-2">Carrinho</a>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
