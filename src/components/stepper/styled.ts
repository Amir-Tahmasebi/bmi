import { styled } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background: '#AAE23A',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: '#AAE23A',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#F0F4F7',
        borderRadius: 1,
    },
    
}));

export const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#fff',
    border: '2px solid #F0F4F7',
    zIndex: 1,
    color: '#7F9CB8',
    width: 40,
    height: 40,
    fontSize: '14px',
    fontWeight: 700,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    
    ...(ownerState.active && {
        background: '#F0F4F7',
        color: '#072C50',
        fontSize: '14px',
        fontWeight: 700,
    }),
    ...(ownerState.completed && {
        background: '#AAE23A',
    }),
}));