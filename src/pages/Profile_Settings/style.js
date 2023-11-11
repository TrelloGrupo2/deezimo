import styled from "styled-components";

export const SettingsMain = styled.div`
color: white;
`
export const SettingTitle = styled.h1 `
    color: white;
    padding-bottom: 1em;
`;
export const Content = styled.div `
width: 1240px;
margin: 0 auto;
`;
export const SettingsWrapper = styled.div`
`;
export const SettingsTabs = styled.ul`
list-style:none;
line-height: 1.8;
display:flex;
font-size: 18px;
border-bottom: 1px solid rgb(52, 56, 58);;
margin-bottom: 1em;
`;
export const TabItem = styled.li`
margin-right: 2em;
a:hover{
    border-bottom: 1px solid #7B7265;
}
a, a:visited{
    font-size: 20px;
    color: white;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid transparent;
}
`
export const SettingsTabContent = styled.div`

`;
export const AccountSettings = styled.div`
display:flex;   
`
export const ProfileAvatar = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Img = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
`;

export const ChangeAvatar = styled.a`
    font-size: 16px;
    margin-top: 10px;
    color: #D9D9D9;
    cursor: pointer;

`
export const FormsWrapper = styled.div`
    margin-left: 3em;
    width: fit-content;
`;
export const FormTitle = styled.h4`
    padding: 5px;
`;
export const InputForm = styled.input`
    border: none;
    outline: none;
    background-color: #292C2E;
    border-radius: 3px;
    width: 30em;
    height: 2em;
    font-size: 16px;
    color: white;  
    padding-left: 3px;
`
export const FormSection = styled.div`
    margin-bottom: 1em;

`
export const DescriptionForm = styled.textarea`
border: none;
outline: none;
background-color: #292C2E;
border-radius: 3px;
color: white;
padding-left: 3px;
padding-top: 3px;

maxlength: 2;
resize: none;
width: 30em;
`
export const AccountInfo = styled.div`
`

export const FormSectionHead = styled.div`
border-bottom: 1px solid rgb(52, 56, 58);
margin-bottom: 5px;

`
export const AccountInfoWrap = styled.div`
display:flex;
`
export const AccountInfoSex = styled.div`
flex:1;
`

export const Select = styled.select`
width: 7em;
height: 2em;
border-radius: 3px;
font-size: 14px;
color: white;
//border: 1px solid rgb(62, 68, 70);
padding: 5px;
background-color: #292C2E;
margin-left: 5px;

`
export const SectionTitle = styled.h3``

export const AccountInfoBirth = styled.div`
flex:2
`
export const ConfirmButtonsWrapper = styled.div`
display:flex;
justify-content: end;
button{
    width: 10em;
    padding: 0.8em;
    background-color: #292C2E;
    margin: 5px;
    color: white;
    border-radius: 15px;
    cursor: pointer;

}
`