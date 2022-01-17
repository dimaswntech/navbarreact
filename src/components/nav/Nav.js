import React, { useState } from "react";
import { AppBar, Button, Menu, MenuItem, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Drawer_com from "../drawer/Drawer_com";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

const Nav = () => {
    const styles = {

        sizeIcon: {
            width: 20,
            height: 20,
        },
        font: {
            color: 'white'
        },
        sizeIconNav: {
            width: 40,
            height: 40,
        },

    };

    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClickTab = (event, newValue) => {
        setValue(newValue);
    }
    const handleOpenMenu = (event) => {
        setAnchorEl(event.target);
    }
    const handleCloseMenu = (event) => {
        setAnchorEl(null)
    }

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div>
            <AppBar color='primary'>
                <Toolbar>
                    <Typography>
                        <AirplaneTicketIcon style={styles.sizeIconNav} />
                    </Typography>
                    {isMatch ? <Drawer_com /> : (
                        <>
                            <Tabs onChange={handleClickTab} value={value} indicatorColor="secondary">
                                <Tab style={styles.font} icon={<AccountBalanceIcon style={styles.sizeIcon} />} label="Tab 1"></Tab>
                                <Tab style={styles.font} icon={<AccountBalanceIcon style={styles.sizeIcon} />} label="Tab 2"></Tab>
                                <Tab style={styles.font} icon={<AccountBalanceIcon style={styles.sizeIcon} />} label="Tab 3"></Tab>
                            </Tabs>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={handleOpenMenu}
                                aria-controls="menu"
                            >
                                Profile
                            </Button>
                        </>
                    )}

                </Toolbar>
            </AppBar>
            <Menu id="menu" anchorEl={anchorEl} onClose={handleCloseMenu} open={Boolean(anchorEl)}>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Setting</MenuItem>
            </Menu>
        </div>
    );
}
export default Nav;