'use client';

import { Box, Typography } from '@mui/material';

import Stepper from 'src/components/stepper';

import Goal from './goal';
import Plan from './plan';
import Chart from './chart';
import Profile from './profile';
import { OrderType } from './type';
import { StyledBox, StyledLogo, StyledWrapperStepper } from './styled';

type Props = {
  order: OrderType;
};

const Order = ({ order }: Props) => (
  <Box position="relative">
    <StyledLogo>
      <Typography fontWeight={500} variant="h6" component="p" color="#072C50">
        Health Logo
      </Typography>
    </StyledLogo>
    <StyledBox>
      <StyledWrapperStepper justifyContent="center">
        <Stepper />
      </StyledWrapperStepper>
      <Profile profile={order.profile} gender={order.gender} />
      <Goal goal={order.goal} gender={order.gender} />
      <Plan />
      <Chart chartData={order.selectedPlanChartData} />
    </StyledBox>
  </Box>
);

export default Order;
