import { AppBar,Toolbar,Typography } from "@mui/material";
import React from "react";
export default function Header()
{
    return(
        <AppBar>
            <Toolbar>
                <Typography>My Store</Typography>
            </Toolbar>
        </AppBar>
    )
}