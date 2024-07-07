import React from 'react';

import { Box, Stack } from '@mui/material';

import { Line, Dotted, Legend, InnerDot, ShadowLine } from './styled';

const lineArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35,
];

const LEGEND_WIDTH = '70px';

// max BMI 40
// 40 * 2.5 = 100

const Slider = () => {
  const percent = 23.8;
  const calcPercent = `${percent * 2.5}%`;
  const renderShadowLines = lineArray.map((_, index) => (
    <ShadowLine key={index} marginRight="10px" />
  ));

  return (
    <Box>
      <Stack direction="row" width="100%" marginBottom="8px">
        {renderShadowLines}
        <ShadowLine />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        width={{
          xs: '90%',
          md: '100%',
        }}
        position="relative"
      >
        <Stack
          direction="column"
          alignItems="end"
          justifyContent="end"
          position="absolute"
          bottom="-9px"
          left={`calc(${calcPercent} - ${LEGEND_WIDTH})`}
        >
          <Legend margin="0 10px 25px 0">{percent}</Legend>
          <Dotted
            sx={{
              width: '22px',
              height: '22px',
              background: '#fff',
            }}
          >
            <Dotted
              sx={{
                width: '16px',
                height: '16px',
                background: '#AAE23A',
              }}
            >
              <InnerDot sx={{ background: '#fff' }} />
            </Dotted>
          </Dotted>
        </Stack>
        <Line bgcolor="#072C50" />
        <Dotted left="25%">
          <InnerDot />
        </Dotted>
        <Line bgcolor="#7F9CB8" />
        <Dotted left="50%">
          <InnerDot />
        </Dotted>
        <Line bgcolor="#AAE23A" />
        <Dotted left="75%">
          <InnerDot />
        </Dotted>
        <Line bgcolor="#072C50" />
      </Stack>
    </Box>
  );
};

export default Slider;
