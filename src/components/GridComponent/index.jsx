import { ProgressBar } from "../ProgressbarComponent";
import {
  Button,
  Description,
  Grid,
  GridContainer,
  Image,
  Title,
} from "./style";
export function GridComponent() {
  const WishList = [
    {
      id: 1,
      UserName: "Cellbit",
      PriceVariation: "R$90 - R$520",
      ProgressBar: 100,
      Image: "/images/user-icon.png",
    },
    {
      id: 2,
      UserName: "Alanzoka",
      PriceVariation: "R$90 - R$520",
      ProgressBar: 45,
      Image: "/images/user-icon.png",
    },
    {
      id: 3,
      UserName: "xXHerinquezXx",
      PriceVariation: "R$90 - R$520",
      ProgressBar: 90,
      Image: "/images/user-icon.png",
    },
  ];

  return (
    <GridContainer>
      {WishList.map((list) => (
        <Grid key={list.id}>
          <Image src={list.Image} alt="img" />
          <Title>{list.UserName}</Title>
          <Description>Price Variation</Description>
          <Description>{list.PriceVariation}</Description>
          <ProgressBar progress={list.ProgressBar} />
          <Button>
            <span>Visitar Lista</span>
          </Button>
        </Grid>
      ))}
    </GridContainer>
  );
}
