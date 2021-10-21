import React from 'react';
import { AppBar, IconButton, MenuItem, Toolbar, Menu } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function KtAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleMenuClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                >
                    <Link to="/">
                        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                    </Link>
                    <Link to="/trading">
                        <MenuItem onClick={handleMenuClose}>Trading</MenuItem>
                    </Link>
                    <Link to="/projects">
                        <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
                    </Link>
                    <Link to="/about">
                        <MenuItem onClick={handleMenuClose}>About</MenuItem>
                    </Link>
                </Menu>
            </Toolbar>
        </AppBar >
    );
}
