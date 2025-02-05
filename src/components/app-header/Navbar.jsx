import { CgProfile } from "react-icons/cg";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import List from "@mui/material/List";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState();

  const menuOptions = [
    {
      text: "Recipes",
      icon: <RestaurantMenuIcon />,
    },
    {
      text: "Menu",
      icon: <MenuBookIcon />,
    },
    {
      text: "Shopping list",
      icon: <ShoppingBasketIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src="./logo.png" alt="logo" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/recipes">Recipes</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/shopping-list">Shopping list</Link>
        <Link to="/about">About</Link>
        <button className="primary-button">
          <CgProfile className="navbar-profile-icon" />
          <p className="my-menu">My Menu</p> 
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}



export default Navbar;
