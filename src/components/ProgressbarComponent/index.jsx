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

// const ProgressBarFlexible = (props) => {
//   const { valuePercentage: value } = props;
//   const fillerRelativePercentage = (100 / value) * 100;
//   const fillerFlex = value > 0 ? value / 100 : 0;

//   return (
//     <div
//       className="wrapper"
//       role="progressbar"
//       aria-valuemin={0}
//       aria-valuemax={100}
//       aria-valuenow={value}
//     >
//       <div className="barContainer" style={{ flex: fillerFlex }}>
//         <div
//           className="fillerBackground"
//           style={{ width: `${fillerRelativePercentage}%` }}
//         />
//       </div>
//       <div className="textValue">{`${value}%`}</div>
//     </div>
//   );
// };
