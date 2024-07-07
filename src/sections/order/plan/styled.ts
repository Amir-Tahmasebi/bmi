import { Box, Button, styled } from "@mui/material";

export const StyledCard = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '328px',
    width: '376px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: '32px',
    margin: "0 auto",
    [theme.breakpoints.up('sm')]: {
        width: '320px',
    }
}));

export const StyledCardContent = styled(Box)(() => ({
    height: '280px',
    borderRadius: '32px',
    padding: '32px',
    width: '100%',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    display: "none",
    background: '#87C210',
    color: '#072C50',
    fontWeight: 400,
    fontSize: '16px',
    width: '432px',
    height: '56px',
    margin: '0 auto',
    borderRadius: '32px',
    marginTop: "64px",
    [theme.breakpoints.up('sm')]: {
        width: '320px',
        display: "block"
    }
}))