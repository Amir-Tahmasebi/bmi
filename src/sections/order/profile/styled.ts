import { Box, Stack, styled } from "@mui/material";

export const StyledItem = styled(Stack)(({ theme }) => ({
    width: '100%',
    height: '88px',
    color: '#072C50',
    borderRadius: '32px',
    marginBottom: "8px",
    [theme.breakpoints.up('sm')]: {
        marginBottom: "16px",
    }
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    border: '2px solid #F0F4F7',
    borderRadius: '28px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '376px',
    margin: "0 auto 16px auto",
    overflow: "hidden",
    [theme.breakpoints.up('sm')]: {
        margin: ' 0 0 16px 0',
        maxWidth: '488px',
    },
}));


// Slider Styled

export const Dotted = styled(Box)(() => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    position: 'absolute',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const InnerDot = styled(Box)(() => ({
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: '#072C50',
}));

export const Line = styled(Box)(() => ({
    height: '4px',
    width: '25%',
    borderRadius: '28px',
}));

export const ShadowLine = styled(Box)(() => ({
    height: '24px',
    width: '2px',
    background: '#F0F4F7',
    borderRadius: '6px',
}));

export const Legend = styled(Box)(() => ({
    width: '72px',
    height: '40px',
    background: '#87C210',
    borderRadius: '20px 20px 0 20px',
    fontWeight: 600,
    fontSize: '16px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 8px 16px 0px rgba(135, 194, 16, 0.4)'

}));
