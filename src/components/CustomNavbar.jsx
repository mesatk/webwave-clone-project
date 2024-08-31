import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import "../styles/NavbarStyle.css"; // Stil dosyasını ekleyin

const CustomNavbar = () => {
  const [isDropdownOpenEtkinlikler, setIsDropdownOpenEtkinlikler] =
    useState(false);
  const [isDropdownOpenKomunite, setIsDropdownOpenKomunite] = useState(false);

  const handleMouseEnterEtkinlikler = () => setIsDropdownOpenEtkinlikler(true);
  const handleMouseLeaveEtkinlikler = () => setIsDropdownOpenEtkinlikler(false);

  const handleMouseEnterKomunite = () => setIsDropdownOpenKomunite(true);
  const handleMouseLeaveKomunite = () => setIsDropdownOpenKomunite(false);

  return (
    <Navbar color="light" light expand="md" className="navbar">
      <NavbarBrand href="/">
        <img src="../public/techcareer-logo.svg" alt="Logo" />
      </NavbarBrand>
      <InputGroup className="input-group">
        <InputGroupText>
          <i className="fas fa-search"></i>
        </InputGroupText>
        <Input placeholder="Etkinlik, İş İlanı, Blog Ara" />
      </InputGroup>
      <Nav className="me-auto" navbar>
        <Dropdown
          nav
          isOpen={isDropdownOpenEtkinlikler}
          toggle={() => {}}
          onMouseEnter={handleMouseEnterEtkinlikler}
          onMouseLeave={handleMouseLeaveEtkinlikler}
        >
          <DropdownToggle nav caret>
            Etkinlikler
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Bootcamp</DropdownItem>
            <DropdownItem href="#">Hackaton</DropdownItem>
            <DropdownItem href="#">Hiring Challange</DropdownItem>
            <DropdownItem href="#">Tüm Etkinlikler</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavItem>
          <NavLink href="#">İş İlanları</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">Eğitimler</NavLink>
        </NavItem>

        <Dropdown
          nav
          isOpen={isDropdownOpenKomunite}
          toggle={() => {}}
          onMouseEnter={handleMouseEnterKomunite}
          onMouseLeave={handleMouseLeaveKomunite}
        >
          <DropdownToggle nav caret>
            Komünite
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Komüniteye Katıl</DropdownItem>
            <DropdownItem href="#">TDC</DropdownItem>
            <DropdownItem href="#">Blog</DropdownItem>
            <DropdownItem href="#">Podcast</DropdownItem>
            <DropdownItem href="#">Kariyer Rehberi</DropdownItem>
            <DropdownItem href="#">Teknik Sözlük</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavItem>
          <NavLink href="#">Şirketler</NavLink>
        </NavItem>
      </Nav>
      <Button className="custom-login-button">Giriş / Üye Ol</Button>
    </Navbar>
  );
};

export default CustomNavbar;
