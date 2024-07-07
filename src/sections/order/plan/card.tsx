import { Stack, Typography } from '@mui/material';

import { CardProps as Props } from './type';
import { StyledCard, StyledCardContent } from './styled';

const Card = ({ active, amount, amountWithDiscount, description, month, mostPopular }: Props) => {
  const checkColorProperty = (isActive: boolean) => (isActive ? '#fff' : '#072C50');

  return (
    <StyledCard bgcolor={mostPopular ? '#87C210' : '#fff'}>
      {mostPopular && (
        <Typography
          variant="h6"
          component="span"
          fontWeight={400}
          color="#fff"
          textAlign="center"
          marginBottom="13px"
        >
          Most Popular
        </Typography>
      )}
      <StyledCardContent bgcolor={active ? '#072C50' : '#F0F4F7'}>
        <Typography
          variant="h4"
          component="span"
          fontWeight={600}
          color={checkColorProperty(active)}
        >
          {month}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          fontWeight={600}
          margin="24px 0 44px 0"
          color={checkColorProperty(active)}
        >
          {description}
        </Typography>
        <Typography
          variant="h6"
          component="span"
          color="#A6B9CC"
          sx={{ textDecoration: 'line-through' }}
        >
          {amount}
        </Typography>
        <Stack direction="row" alignItems="flex-end">
          <Stack direction="row" alignItems="center">
            <Typography
              variant="h4"
              component="span"
              fontWeight={600}
              color="#A6B9CC"
              marginRight="2px"
            >
              $
            </Typography>
            <Typography
              variant="h3"
              component="span"
              fontWeight={700}
              marginRight="4px"
              color={checkColorProperty(active)}
            >
              {amountWithDiscount}
            </Typography>
          </Stack>
          <Typography
            variant="subtitle1"
            component="span"
            fontWeight={600}
            color="#F41616"
            marginBottom="5px"
          >
            (Special discount)
          </Typography>
        </Stack>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Card;
