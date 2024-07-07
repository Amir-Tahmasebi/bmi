import { Box, Grid, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    width: '100%',
    borderRadius: '32px',
    border: '1px solid #F0F4F7',
    padding: '32px',
    // overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
        height: '408px',
    },
}));

export const StyledContainer = styled(Grid)(({ theme }) => ({
    margin: '88px auto 0 auto',
    width: "100%",
    maxWidth: "376px",
    [theme.breakpoints.up('sm')]: {
        marginTop: '97px',
        maxWidth: "992px",
    },
}));

export const Line = styled(Box)(({ theme }) => ({
    width: '6px',
    borderRadius: '12px',
    background: '#9BD625',
    color: '#9BD625',
    marginRight: '12px',
    [theme.breakpoints.up('sm')]: {
        width: '8px',
        marginRight: '17px',

    }
}))
