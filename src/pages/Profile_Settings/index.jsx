import { HeaderComponent } from "../../components/Header";
import { SettingTitle, 
    SettingsMain, 
    Content, 
    SettingsWrapper, 
    SettingsTabs, 
    TabItem, 
    SettingsTabContent,
    AccountSettings,
    ProfileAvatar,
    Img,
    ChangeAvatar,
    FormsWrapper,
    FormTitle,InputForm,
    FormSection,
    DescriptionForm,
    AccountInfo,
    FormSectionHead,
    AccountInfoWrap,
    AccountInfoSex,
    Select,
    SectionTitle, 
    AccountInfoBirth,
    ConfirmButtonsWrapper,
} from "./style";



export function ProfileSettings() {
    return (
    <>
        <HeaderComponent/>

        <Content>
        <SettingsMain>

            <SettingTitle>Configurações</SettingTitle>

            <SettingsWrapper>
                <SettingsTabs>
                    <TabItem>
                        <a href="#">Perfil</a>
                    </TabItem>
                    <TabItem>
                        <a href="#">tncc</a>
                    </TabItem>
                </SettingsTabs>

                <SettingsTabContent>
                    <AccountSettings>
                        <ProfileAvatar>
                                <Img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2Fd58f%2Ff%2F2015%2F095%2Fe%2F2%2Fooooooooooooooooooooooooooooooooooooooooooo_shieet_by_vieiragmx-d8oi53c.png&f=1&nofb=1&ipt=2780a4fc76e437e4109bcedf39fc92229ee291bec6cd6e4a0245b47fd83643df&ipo=images'></Img>
                                <ChangeAvatar>Editar foto de perfil</ChangeAvatar>
                        </ProfileAvatar>

                        <FormsWrapper>
                            <FormSection>
                                <FormTitle>
                                    Nome
                                </FormTitle>
                                <InputForm type='text'></InputForm>
                            </FormSection>

                            <FormSection>
                                <FormTitle>
                                    Descrição
                                </FormTitle>
                                <DescriptionForm  rows="5" maxlength="90" minlength="1" ></DescriptionForm>
                            </FormSection>

                            <FormSection>
                                <FormTitle>
                                    Email
                                </FormTitle>
                                <InputForm type='text'></InputForm>
                            </FormSection>

                            <FormSection>
                                <FormTitle>
                                    Senha
                                </FormTitle>
                                <InputForm type='text' disabled></InputForm>
                            </FormSection>

                            <FormSection>
                                <AccountInfo>
                                    <FormSectionHead>
                                        <SectionTitle>
                                            Informações básicas
                                        </SectionTitle>
                                    </FormSectionHead>

                                    <AccountInfoWrap>
                                            <AccountInfoSex>
                                                <FormTitle>
                                                 Gênero
                                                </FormTitle>
                                                <Select style={{paddingRight: '9em'}}>
                                                    <option value="female">Feminino</option>
                                                    <option value="man">Masculino</option>
                                                    <option value="gay">Prefiro não dizer</option>
                                                </Select>
                                            </AccountInfoSex>

                                            <AccountInfoBirth>
                                                <FormTitle>
                                                 Data de nascimento
                                                </FormTitle>
                                                <Select>
                                                    <option value="0">Dia  </option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                </Select>
                                                <Select>
                                                    <option value="">Mês</option>
                                                    <option value="1">Janeiro</option>
                                                    <option value="2">Fevereiro</option>
                                                    <option value="3">Março</option>
                                                    <option value="4">Abril</option>
                                                    <option value="5">Maio</option>
                                                    <option value="6">Junho</option>
                                                    <option value="7">Julho</option>
                                                    <option value="8">Agosto</option>
                                                    <option value="9">Setembro</option>
                                                    <option value="10">Outubro</option>
                                                    <option value="11">Novembro</option>
                                                    <option value="12">Dezembro</option>
                                                </Select>
                                                <Select>
                                                    <option value="">Ano</option>
                                                    <option value="2010">2010      </option>
                                                    <option value="2009">2009</option>
                                                    <option value="2008">2008</option>
                                                    <option value="2007">2007</option>
                                                    <option value="2006">2006</option>
                                                    <option value="2005">2005</option>
                                                    <option value="2004">2004</option>
                                                    <option value="2003">2003</option>
                                                    <option value="2002">2002</option>
                                                    <option value="2001">2001</option>
                                                    <option value="2000">2000</option>
                                                    <option value="1999">1999</option>
                                                    <option value="1998">1998</option>
                                                    <option value="1997">1997</option>
                                                    <option value="1996">1996</option>
                                                    <option value="1995">1995</option>
                                                    <option value="1994">1994</option>
                                                    <option value="1993">1993</option>
                                                    <option value="1992">1992</option>
                                                    <option value="1991">1991</option>
                                                    <option value="1990">1990</option>
                                                    <option value="1989">1989</option>
                                                    <option value="1988">1988</option>
                                                    <option value="1987">1987</option>
                                                    <option value="1986">1986</option>
                                                    <option value="1985">1985</option>
                                                    <option value="1984">1984</option>
                                                    <option value="1983">1983</option>
                                                    <option value="1982">1982</option>
                                                    <option value="1981">1981</option>
                                                    <option value="1980">1980</option>
                                                    <option value="1979">1979</option>
                                                    <option value="1978">1978</option>
                                                    <option value="1977">1977</option>
                                                    <option value="1976">1976</option>
                                                    <option value="1975">1975</option>
                                                    <option value="1974">1974</option>
                                                    <option value="1973">1973</option>
                                                    <option value="1972">1972</option>
                                                    <option value="1971">1971</option>
                                                    <option value="1970">1970</option>
                                                    <option value="1969">1969</option>
                                                    <option value="1968">1968</option>
                                                    <option value="1967">1967</option>
                                                    <option value="1966">1966</option>
                                                    <option value="1965">1965</option>
                                                    <option value="1964">1964</option>
                                                    <option value="1963">1963</option>
                                                    <option value="1962">1962</option>
                                                    <option value="1961">1961</option>
                                                    <option value="1960">1960</option>
                                                    <option value="1959">1959</option>
                                                    <option value="1958">1958</option>
                                                    <option value="1957">1957</option>
                                                    <option value="1956">1956</option>
                                                    <option value="1955">1955</option>
                                                    <option value="1954">1954</option>
                                                    <option value="1953">1953</option>
                                                    <option value="1952">1952</option>
                                                    <option value="1951">1951</option>
                                                    <option value="1950">1950</option>
                                                </Select>
                                      
                                            </AccountInfoBirth>

                                            
                                     </AccountInfoWrap>
                                </AccountInfo>
                            </FormSection>

                                <ConfirmButtonsWrapper>
                                    <button>
                                        Cancelar
                                    </button>
                                    <button style={{backgroundColor:"#2D5FF5"}}>
                                        Confirmar
                                    </button>
                                </ConfirmButtonsWrapper>
                        </FormsWrapper>

                    </AccountSettings>
                </SettingsTabContent>
            </SettingsWrapper>

        </SettingsMain>
        </Content>
    </>
);}