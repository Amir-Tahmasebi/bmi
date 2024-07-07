import { StepIconProps } from '@mui/material/StepIcon';
import { Step, Stepper, StepLabel } from '@mui/material';

import { ColorlibConnector, ColorlibStepIconRoot } from './styled';

const steps = [
  'Basic Questions',
  'Choose a plan',
  'Payment process',
  'Basic information',
  'Enjoy the plan!',
];

const checkCompleted = (completed: boolean, text: string) =>
  completed ? <img src="/assets/icons/order/tick.svg" alt="" /> : <>{text}</>;

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: checkCompleted(completed as boolean, '01'),
    2: checkCompleted(completed as boolean, '02'),
    3: checkCompleted(completed as boolean, '03'),
    4: checkCompleted(completed as boolean, '04'),
    5: checkCompleted(completed as boolean, '05'),
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props?.icon)]}
    </ColorlibStepIconRoot>
  );
}

const renderSteps = steps.map((label) => (
  <Step key={label}>
    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
  </Step>
));

const StepperComponent = () => (
  <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
    {renderSteps}
  </Stepper>
);

export default StepperComponent;
