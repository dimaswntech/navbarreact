import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Drawer_com = () => {
    const styles = {
        menuIcon: {
            color: 'white'
        }
    }
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleClose = (event) => {
        setOpenDrawer(false)
    }
    return (
        <>
            <Drawer anchor="right" open={openDrawer} onClose={handleClose}>
                <List>
                    <ListItem divider>
                        <ListItemIcon><ListItemText>Menu1</ListItemText></ListItemIcon>
                    </ListItem>
                    <ListItem divider>
                        <ListItemIcon><ListItemText>Menu2</ListItemText></ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon style={styles.menuIcon} />
            </IconButton>
        </>
    );
}
export default Drawer_com;