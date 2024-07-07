import { Box, Grid, Stack, Button, styled } from "@mui/material";


export const StyledImage = styled("img")(({ theme }) => ({
    width: '100px',
    height: '150px',
    [theme.breakpoints.up('sm')]: {
        width: '156px',
        height: '300px',
    }
}))

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    maxWidth: "388px",
    margin: "0 auto",
    [theme.breakpoints.up('sm')]: {
        maxWidth: '992px'
    }
}))

export const StyledContainer = styled(Box)(({ theme }) => ({
    marginTop: '80px',
    [theme.breakpoints.up('sm')]: {
        marginTop: '120px'
    }
}))

export const StyledBox = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '184px',
    height: "240px",
    borderRadius: '32px',
    backgroundColor: '#F0F4F7',
    paddingTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '488px',
        height: '380px',
    }
}));

export const StyledCenterButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    left: 'calc(50% + 7px)',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '56px',
    height: '56px',
    minWidth: '56px',
    background: '#C9D6E2',
    borderRadius: '50%',
    [theme.breakpoints.up('sm')]: {
        width: '96px',
        height: '96px',
    }
}));

export const StyledButton = styled(Button)(() => ({
    width: '152px',
    height: '56px',
    borderRadius: '28px',
    padding: '24px',
    background: '#fff',
    color: '#072C50',
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '24px',
}));

export const StyledItem = styled(Stack)(({ theme }) => ({
    width: '100%',
    maxWidth: "380px",
    border: '2px solid #F0F4F7',
    borderRadius: '28px',
    margin: '16px auto 0 auto',
    height: '88px',
    [theme.breakpoints.up('sm')]: {
        maxWidth: "992px"
    }
}));

export const StyledIcon = styled(Box)(() => ({
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: '1.5px solid #DAE4EC',
}));
