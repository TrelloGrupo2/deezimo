import { BarContainer, FillerBackground, Filter, TextValue, Wrapper } from './style';

export const ProgressBar = (props) => {
  const { value } = props;
  const fillerRelativePercentage = (100 / value) * 100;
    console.log(value);
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <BarContainer>
        <Filter style={{ width: `${value}%` }}>
          <FillerBackground style={{ width: `${fillerRelativePercentage}%` }} />
        </Filter>
      </BarContainer>
      <TextValue className="textValue">{`${value}%`}</TextValue>
    </Wrapper>
  );
};
