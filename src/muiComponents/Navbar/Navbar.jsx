import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Link,
  ListItemText
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const MuiMenu = () => {
  const [isDraweropem, setDrawerOpen] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box width={{ sm: "80%", xs: "100%" }} sx={{ marginLeft: "auto", marginRight: "auto" }}>

      <AppBar position='static'>
        <Toolbar sx={{backgroundColor:"#0c0d2a", color:"#8799cf",}}>
          <Box display={{ sm: "none", xs: "flex" }}  >

            <IconButton
              size='large'
              edge="start"
              sx={{ color: "white" }}
              aria-label='meniIcon'
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor='left' open={isDraweropem} onClose={() => setDrawerOpen(false)} PaperProps={{
              sx: {
                backgroundColor: "#0c0d2a",
              }
            }} >
              <Stack >
                <IconButton
                  size='large'
                  // edge= "end"
                  color='primary.main'
                  aria-label='meniIcon'
                  onClick={() => setDrawerOpen(false)}
                  sx={{ marginLeft: "auto", marginRight: 0.5 }}
                >
                  <CloseIcon htmlColor='#b1bbd9' />
                </IconButton>

              </Stack>
              <Box width="330px" height={"100%"} role="presentation" >
                <List>
                  <ListItem disablePadding sx={{ paddingY: "3px" }} >
                    <ListItemButton>

                      <Link href='#' underline="none" variant='body2' sx={{
                        fontSize: 17, color: "#8799cf", "&:hover": {
                          color: '#b1bbd9'
                        }
                      }} >Home</Link>
                      {/* <ListItemText primary="helo" /> */}
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ paddingY: "3px" }}>
                    <ListItemButton>
                      {/* <ListItemIcon>
                        <SendIcon htmlColor='blue' />
                      </ListItemIcon> */}
                      <Link href='#' underline="none" variant='body2' sx={{
                        fontSize: 17, color: "#8799cf", "&:hover": {
                          color: '#b1bbd9'
                        }
                      }} >Archive</Link>
                      {/* <ListItemText primary="helo" /> */}
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ paddingY: "3px" }}>
                    <ListItemButton>
                      {/* <ListItemIcon>
                        <StarRateIcon htmlColor='blue' />
                      </ListItemIcon> */}
                      <Link href='#' underline="none" variant='body2' sx={{
                        fontSize: 17, color: "#8799cf", "&:hover": {
                          color: '#b1bbd9'
                        }
                      }}  >Blog</Link>
                      {/* <ListItemText primary="helo" /> */}
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ paddingY: "3px" }}>
                    <ListItemButton>
                      {/* <ListItemIcon>
                        <StarRateIcon htmlColor='blue' />
                      </ListItemIcon> */}
                      <Link href='#' underline="none" variant='body2' sx={{
                        fontSize: 17, color: "#8799cf", "&:hover": {
                          color: '#b1bbd9'
                        }
                      }}  >Contact</Link>
                      {/* <ListItemText primary="helo" /> */}
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ paddingY: "3px" }}>
                    <ListItemButton>
                      {/* <ListItemIcon>
                        <StarRateIcon htmlColor='blue' />
                      </ListItemIcon> */}
                      <Link href='#' underline="none" variant='body2' sx={{
                        fontSize: 17, color: "#8799cf", "&:hover": {
                          color: '#b1bbd9'
                        }
                      }}  >Store</Link>
                      {/* <ListItemText primary="helo" /> */}
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ paddingY: "3px" }}>
                    <ListItemButton>
                      {/* <ListItemIcon>
                        <DraftsIcon htmlColor='blue' />
                      </ListItemIcon> */}
                      <Link href='#' underline="none" variant='body2' sx={{
                        fontSize: 20, fontWeight: "bold", color: "#b1bbd9", "&:hover": {
                          color: '#b1bbd9'
                        }
                      }}  >Comics</Link>

                    </ListItemButton>
                  </ListItem>
                  <Link 
                  />
                  <Stack direction={"column"} marginLeft={3}  >

                  <Link href='#' underline="none" variant='body2' sx={{
                    // marginBottom:0.3,
                        fontSize: 17, color: "#8799cf", "&:hover": {
                          color: '#b1bbd9',
                          textDecorationLine:"underline"
                        }
                      }}  >Maid Chronicles</Link>
                  <Link href='#' underline="none" variant='body2' sx={{
                    // marginLeft:1,
                    fontSize: 17, color: "#8799cf", "&:hover": {
                      color: '#b1bbd9',
                      textDecorationLine:"underline"

                    }
                  }}  >Crescent Fire</Link>
                  <Link href='#' underline="none" variant='body2' sx={{
                    // marginLeft:1,
                    fontSize: 17, color: "#8799cf", "&:hover": {
                      color: '#b1bbd9',
                      textDecorationLine:"underline"

                    }
                  }}  >Crescent Tales</Link>
                  </Stack>
        
                </List>
              </Box>

            </Drawer>


          </Box>
          <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto", }}  >

            {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemonIcon />
        </IconButton> */}
            {/* <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography> */}
            <Stack direction='row' width={"100%"} justifyContent={"center"} alignItems={"center"} display={{ xs: "none", sm: "flex" }} spacing={4} >
              <Button color='inherit' sx={{fontWeight:"bold"}}>Home</Button>
              <Button color='inherit' sx={{fontWeight:"bold"}}>Archive</Button>
              {/* <Button color='inherit'>About</Button> */}
              <Button color='inherit' sx={{fontWeight:"bold"}}>Blog</Button>
              <Button color='inherit' sx={{fontWeight:"bold"}}>Contact</Button>
              <Button color='inherit' sx={{fontWeight:"bold"}}>Store</Button>

              <Button
                color='inherit'
                id='resources-button'
                sx={{fontWeight:"bold"}}
                aria-controls={open ? 'resources-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleClick}>
                comics
              </Button>
              {/* <Button color='inherit'>Login</Button> */}
            </Stack>
            <Stack width={"100%"} justifyContent={"center"} alignItems={"center"} display={{ xs: "flex", sm: "none" }} >
              <h3>Lorem ipsum</h3>
            </Stack>
              
            
            <Menu
              id='resources-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
              MenuListProps={{
                'aria-labelledby': 'resources-button',
                 sx: { py: 0 , border:"1px solid #8799cf"  } 
              }}
              >
            <Box sx={{backgroundColor:"#0c0d2a", color:"#8799cf",}}>  
              <MenuItem onClick={handleClose} > Maid Chronicles</MenuItem>
              <MenuItem onClick={handleClose}>Crescent Fire</MenuItem>
              <MenuItem onClick={handleClose}>Crescent Tales</MenuItem>
              <MenuItem onClick={handleClose}>in Future</MenuItem>
          </Box>
            </Menu>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>


  )
}
export default MuiMenu