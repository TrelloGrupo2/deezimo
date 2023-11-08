import { AvatarUser, ImageAvatarUser, PriceSpan, Title, UserContainer, UserContent } from "../../pages/WishList/style";
import { ProgressBar } from "../ProgressbarComponent";

export function UserGridComponent() {
    return (
      <UserContent>
        <UserContainer>
          <AvatarUser>
            <ImageAvatarUser src="https://picsum.photos/130/130" alt="eitaa" />
          </AvatarUser>
          <Title>UserName</Title>
          <PriceSpan>
            Price Variation <br></br> R$90 - R$520
          </PriceSpan>
          <ProgressBar progress="90" />
        </UserContainer>
      </UserContent>
    );
}
