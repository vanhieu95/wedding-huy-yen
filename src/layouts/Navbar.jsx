import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import useScroll from '@/hooks/useScroll'

function Navbar({ section, sectionRef, bride, groom }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { navbarColor } = useScroll()

  const scrollIntoView = (ref, i) => {
    if (ref != null && ref.current != null && ref.current[i] != null) {
      ref.current[i].scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        {section.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => scrollIntoView(sectionRef, i)}
            >
              <span className="w-full font-shantell">{item.name}</span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div className="flex font-shantell">
      <AppBar
        component="nav"
        sx={{ backgroundColor: navbarColor, color: 'black' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: { xs: 'center', sm: 'left' },
              transform: {
                xs: 'translateX(-20px)',
                sm: 'translateX(0)',
              },
              fontFamily: 'Shantell Sans',
            }}
          >
            {`${groom} & ${bride}`}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {section.map((item, i) => (
              <Button
                sx={{
                  color: 'black',
                  fontFamily: 'Shantell Sans',
                  marginLeft: '1rem',
                }}
                onClick={() => scrollIntoView(sectionRef, i)}
                key={i}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  )
}

export default Navbar
