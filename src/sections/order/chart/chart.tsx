import Image from 'next/image';

import { Box, Grid, Stack, Typography } from '@mui/material';

import { StyledBox, StyledContainer, Line } from './styld';
import { ChartDataType } from '../type';

// const chartLineData = [
//   184, 184, 176, 168, 168, 152, 152, 152, 152, 136, 128, 120, 104, 104, 96, 96, 89, 80, 80, 76, 72,
//   68, 63, 55, 48, 40, 40, 40, 32, 32, 32, 32, 24, 24, 24, 16, 16, 16,
// ];
type Props = {
  chartData: ChartDataType;
};

const BOTTOM_SPACE = 15;

const Chart = ({ chartData }: Props) => {
  const firstItem = chartData && chartData[0];
  const lastItem = (chartData && chartData[chartData.length - 1]) || 0;

  const renderLines = chartData?.map((value, index) => (
    <Line
      key={index}
      sx={{
        height: `${value}px`,
      }}
    >
      l
    </Line>
  ));
  return (
    <StyledContainer container>
      <Grid item xs={12}>
        <Box>
          <Typography
            variant="h3"
            component="h2"
            color="#072C50"
            fontWeight={700}
            textAlign="center"
          >
            Your selected 2-month plan is ready!
          </Typography>
          <Box marginTop="32px">
            <StyledBox>
              <Box overflow="hidden">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" alignItems="center">
                    <Image src="/assets/icons/order/Bolt.svg" alt="" width={24} height={24} />
                    <Box marginLeft="32px">
                      <Typography fontWeight={600} variant="h4" component="h4" color="#072C50">
                        Your weight loss
                      </Typography>
                      <Typography fontWeight={600} variant="body2" component="p" color="#7F9CB8">
                        How to reach the purpose?
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography component="h2" fontSize="48px" fontWeight="700" color="#072C50">
                    -7%
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="end"
                  width="100%"
                  marginTop="72px"
                  position="relative"
                >
                  <>{renderLines}</>
                  <Box
                    sx={{
                      width: '96px',
                      height: '64px',
                      borderRadius: '20px 20px 20px 0',
                      background: '#F0F4F7',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      bottom: `${firstItem - BOTTOM_SPACE}px`,
                      left: '4px',
                    }}
                  >
                    <Typography fontWeight={600} variant="caption" component="span" color="#7F9CB8">
                      Last day
                    </Typography>
                    <Typography
                      fontWeight={800}
                      variant="h6"
                      component="span"
                      marginTop="4px"
                      color="#072C50"
                    >
                      71 Kg
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '96px',
                      height: '64px',
                      borderRadius: '20px 20px 0 20px',
                      background: '#072C50',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      bottom: `${lastItem}px`,
                      right: '4px',
                    }}
                  >
                    <Typography fontWeight={600} variant="caption" component="span" color="#DAE4EC">
                      Last day
                    </Typography>
                    <Typography
                      fontWeight={800}
                      variant="h6"
                      component="span"
                      marginTop="4px"
                      color="#fff"
                    >
                      71 Kg
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  marginTop="16px"
                >
                  <Typography fontWeight={600} variant="caption" component="span" color="#7F9CB8">
                    The starting
                  </Typography>
                  <Typography fontWeight={600} variant="caption" component="span" color="#7F9CB8">
                    Middle of plan
                  </Typography>
                  <Typography fontWeight={600} variant="caption" component="span" color="#7F9CB8">
                    The end
                  </Typography>
                </Stack>
              </Box>
            </StyledBox>
          </Box>
        </Box>
      </Grid>
    </StyledContainer>
  );
};

export default Chart;
