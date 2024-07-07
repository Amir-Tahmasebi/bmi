import React from 'react';
import Image from 'next/image';

import { Grid, Stack, Typography } from '@mui/material';

import { GoalType } from '../type';
import {
  StyledBox,
  StyledIcon,
  StyledItem,
  StyledImage,
  StyledButton,
  StyledContainer,
  StyledCenterButton,
  StyledGridContainer,
} from './styled';

type Props = {
  goal: GoalType;
  gender: 'man' | 'woman';
};

const Goal = ({ gender, goal }: Props) => (
  <StyledContainer>
    <Typography
      variant="h3"
      component="h2"
      fontWeight={700}
      color="#072C50"
      textAlign="center"
      marginBottom="32px"
    >
      By using our plans, you can reach your goal
    </Typography>
    <StyledGridContainer container columnSpacing="16px" position="relative">
      <Grid item xs={6}>
        <StyledBox>
          <StyledButton variant="text">Now</StyledButton>
          {gender && <StyledImage src={`/assets/images/order/${gender}-2.png`} alt="" />}
        </StyledBox>
      </Grid>
      <Grid item xs={6}>
        <StyledBox>
          <StyledButton variant="text">Your goal</StyledButton>
          {gender &&  <StyledImage src={`/assets/images/order/${gender}-3.png`} alt="" />}
        </StyledBox>
      </Grid>
      <StyledCenterButton>
        <Image src="/assets/icons/order/arrow-right.svg" alt="" width={24} height={24} />
      </StyledCenterButton>
    </StyledGridContainer>
    <Grid container>
      <Grid item xs={12}>
        <StyledItem direction="row" alignItems="center" justifyContent="space-evenly">
          <Typography fontWeight={600} variant="subtitle1" color="#072C50">
            Excess body fat
          </Typography>
          <StyledIcon>
            <Image src="/assets/icons/order/arrow-right.svg" alt="" width={22} height={16} />
          </StyledIcon>
          <Typography fontWeight={600} variant="subtitle1" color="#072C50">
            Normal body fat
          </Typography>
        </StyledItem>
      </Grid>
      <Grid item xs={12}>
        <StyledItem direction="row" alignItems="center" justifyContent="space-evenly">
          <Stack direction="row" alignItems="center">
            <Typography
              fontWeight={700}
              variant="body2"
              component="span"
              color="#072C50"
              marginRight="16px"
            >
              Current weight:
            </Typography>
            <Typography fontWeight={600} variant="h4" component="span" color="#072C50">
              {goal?.weight}
            </Typography>
          </Stack>
          <StyledIcon marginRight="15px">
            <Image src="/assets/icons/order/arrow-right.svg" alt="" width={22} height={16} />
          </StyledIcon>
          <Stack direction="row" alignItems="center">
            <Typography
              fontWeight={700}
              variant="body2"
              component="span"
              color="#072C50"
              marginRight="16px"
            >
              Ideal weight:
            </Typography>
            <Typography fontWeight={600} variant="h4" component="span" color="#072C50">
              {goal?.idealWeight}
            </Typography>
          </Stack>
        </StyledItem>
      </Grid>
    </Grid>
  </StyledContainer>
);

export default Goal;
