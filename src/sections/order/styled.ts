import { Box, Stack, styled, Typography } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    padding: '32px 0 95px 0',
    width: '100%',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        maxWidth: '992px',
    },
}));

export const StyledLogo = styled(Typography)(({ theme }) => ({
    position: 'unset',
    margin: '81px 0 0 27px',
    [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        top: '40px',
        left: '56px',
        margin: 0,
    },
}));

export const StyledWrapperStepper = styled(Stack)(({ theme }) => ({
    width: '100%',
    margin: '0 auto 120px auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '900px',
        marginBottom: "136px"
    }
}));

export const ResponsiveBox = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: "376px",
    margin: "0 auto",
    [theme.breakpoints.up('sm')]: {
        width: '100%',
        maxWidth: "auto",
        minWidth:"488px"
    }
}))