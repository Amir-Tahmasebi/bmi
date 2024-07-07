'use client'

import { Box, Grid, Stack, Typography } from '@mui/material';

import PlanCard from './card';
import { StyledButton } from './styled';

const data = [
  {
    mostPopular: true,
    month: '1-Month Plan',
    description: 'This plan is especially designed for begginers.',
    amount: '$1600',
    amountWithDiscount: '800',
    active: false,
  },
  {
    mostPopular: false,
    month: '2-Month Plan',
    description: 'This plan is especially designed for begginers.',
    amount: '$1600',
    amountWithDiscount: '800',
    active: false,
  },
  {
    mostPopular: false,
    month: '3-Month Plan',
    description: 'This plan is especially designed for begginers.',
    amount: '$1600',
    amountWithDiscount: '800',
    active: true,
  },
];

const Plan = () => {
  const renderPlans = data.map((item, index) => (
    <Grid item xs={12} md={4} key={index}>
      <PlanCard {...item} />
    </Grid>
  ));

  return (
    <Box marginTop="120px">
      <Typography variant="h3" component="h2" fontWeight={700} color="#072C50" textAlign="center">
        Choose your plan just now!
      </Typography>
      <Grid container columnSpacing="16px" marginTop="32px">
        {renderPlans}
      </Grid>
      <Stack direction="row" justifyContent="center">
        <StyledButton variant="contained">Make Payment</StyledButton>
      </Stack>
    </Box>
  );
};

export default Plan;
