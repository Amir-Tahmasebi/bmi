import Image from 'next/image';

import { Box, Grid, Stack, Checkbox, Typography } from '@mui/material';

import Slider from './slider';
import { ProfileType } from '../type';
import { ResponsiveBox } from '../styled';
import { StyledBox, StyledItem } from './styled';

type Props = {
  profile: ProfileType;
  gender: 'man' | 'woman';
};

const Profile = ({ profile, gender }: Props) => {
  const healthDetail = [
    {
      key: 'Your food taste:',
      value: profile?.foodTaste,
    },
    {
      key: 'Your lifestyle:',
      value: profile?.lifestyle,
    },
    {
      key: 'Metabolism:',
      value: profile?.metabolism,
    },
  ];
  const details = [
    {
      key: 'Your current weight:',
      value: profile?.weight,
    },
    {
      key: 'Your height:',
      value: profile?.height,
    },
    {
      key: 'Fitness level:',
      value: profile?.fitnessLevel,
    },
  ];
  const renderDetail = details.map((item, index) => (
    <StyledItem
      key={index}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: '#F0F4F7',
      }}
    >
      <Typography variant="body2" component="span" fontWeight={700} marginRight="16px">
        {item.key}
      </Typography>
      <Typography variant="h4" component="span" fontWeight={600}>
        {item.value}
      </Typography>
    </StyledItem>
  ));

  const renderHealthDetail = healthDetail.map((item, index) => (
    <StyledItem
      key={index}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ background: '#F4FBE7' }}
    >
      <Typography variant="body2" component="span" fontWeight={700} marginRight="16px">
        {item.key}
      </Typography>
      <Typography variant="h3" component="span" fontWeight={600}>
        {item.value}
      </Typography>
    </StyledItem>
  ));

  return (
    <Box>
      <Typography component="h2" variant="h3" textAlign="center" fontWeight={700} color="#072C50">
        Here is your wellness profile
      </Typography>
      <Grid container marginTop="32px" columnSpacing={{ xs: 0, md: '12px' }}>
        <Grid item xs={12} md={6}>
          <StyledBox height={320} justifyContent="end">
            <Typography
              variant="h4"
              component="span"
              margin="32px 0 24px 0"
              fontWeight={600}
              color="#072C50"
            >
              Endomorph
            </Typography>
            {gender && (
              <Image src={`/assets/images/order/${gender}.png`} alt="" width={160} height={250} />
            )}
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={320} marginBottom="18px">
            <StyledBox
              height={192}
              alignItems="flex-start"
              justifyContent="space-between"
              padding="32px"
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Typography variant="h6" component="span">
                  BMI
                </Typography>
                <Stack direction="row" alignItems="center">
                  <Checkbox defaultChecked color="success" />
                  <Typography variant="body2" component="label" fontWeight={700} color="#87C210">
                    Normal
                  </Typography>
                </Stack>
              </Stack>
              <Slider />
            </StyledBox>
            <ResponsiveBox>
              <Typography
                variant="h6"
                component="span"
                marginLeft="24px"
                fontWeight={800}
                color="#87C210"
              >
                Healthy BMI
              </Typography>
              <Typography variant="subtitle1" component="p" fontWeight={600} marginTop="8px">
                Your initial body situation is here. It’s crucial for starting a very healthy diet
                and exercise plan.
              </Typography>
            </ResponsiveBox>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <ResponsiveBox>{renderDetail}</ResponsiveBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <ResponsiveBox>{renderHealthDetail}</ResponsiveBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
