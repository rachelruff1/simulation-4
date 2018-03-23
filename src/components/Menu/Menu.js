import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import { getMenu } from "../../ducks/reducer";
import { connect } from "react-redux";
import MenuCard from "../MenuCard/MenuCard";
import './Menu.css';

class Menu extends Component {
  componentDidMount() {
    this.props.getMenu();
  }
  render() {
    const menuItemMap =
      this.props.menu.length > 0 &&
      this.props.menu.map((c, i) => <MenuCard key={i} menu={c} />);
    return (
      <div>
        <SideBar />
        <div className="menu-map">{menuItemMap}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}
export default connect(mapStateToProps, { getMenu })(Menu);
