import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Code2, Menu as MenuIcon, X } from 'lucide-react';
import Logo from './logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCoursesMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCoursesMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ['Home', 'About Us', 'Courses', 'Contact'];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item} component="a" href={`#${item.toLowerCase()}`}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
      <ListItem>
        <Button variant="contained" fullWidth>
          Login
        </Button>
      </ListItem>
    </List>
  );

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img style={{ width: 180, height: 100 }} src={Logo} alt="Logo" />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  href={`#${item.toLowerCase()}`}
                  onClick={item === 'Courses' ? handleCoursesMenuOpen : undefined}
                  endIcon={item === 'Courses' ? <KeyboardArrowDownIcon /> : null}
                >
                  {item}
                </Button>
              ))}
              <Menu
                id="courses-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCoursesMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'courses-button',
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem component="a" href="#course1" onClick={handleCoursesMenuClose}>
                 Full Stack Developer Course
                </MenuItem>
                <MenuItem component="a" href="#course2" onClick={handleCoursesMenuClose}>
                  AWS Cloud Practitioner
                </MenuItem>
                <MenuItem component="a" href="#course3" onClick={handleCoursesMenuClose}>
                  DevOps Bootcamp
                </MenuItem>
              </Menu>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              {mobileOpen ? <X /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}