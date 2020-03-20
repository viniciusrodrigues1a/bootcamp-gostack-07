import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { MdShoppingBasket } from 'react-icons/md';

import { Cart, Container } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <span>Meu carrinho</span>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number,
};

Header.defaultProps = {
  cartSize: 0,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
