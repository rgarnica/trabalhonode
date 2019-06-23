import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";


class MenuBar extends React.Component {
  
    state = {
        open: false
    }

    toggleDrawer(open) {
        this.setState({open: open})
    }
    
    render() {
        const classes = makeStyles({
            list: {
              width: 300,
            },
        });

        const barClasses = makeStyles(theme => ({
            root: {
              flexGrow: 1,
            },
            menuButton: {
              marginRight: theme.spacing(2),
            },
            title: {
              flexGrow: 1,
            },
        }));

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={barClasses.menuButton} color="inherit" aria-label="Menu" onClick={(e) => this.toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={barClasses.flex}>
                            Trabalho - P2 - Sistemas de Informação ITE
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} onClose={(e) => this.toggleDrawer(false)}>
                   <div
                    className={classes.list}
                    role="presentation"
                    onClick={(e) => this.toggleDrawer(false)}
                    onKeyDown={(e) => this.toggleDrawer(false)}
                    >
                        <List>
                            <ListItem>
                                <Link to="/customers">
                                    <ListItemText primary="Consultar" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/customers/new">
                                    <ListItemText primary="Incluir" />
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
  
}

export default MenuBar