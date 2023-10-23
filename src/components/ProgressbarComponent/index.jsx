import {
  BarContainer,
  FillerBackground,
  Filter,
  Text,
  TextValue,
  Wrapper,
} from "./style";

export const ProgressBar = (props) => {
  const value = props.progress;
  const fillerRelativePercentage = (100 / value) * 100;

  console.log(fillerRelativePercentage);
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
      <TextValue>
        <Text>{`${value}%`}</Text>
      </TextValue>
    </Wrapper>
  );
};
