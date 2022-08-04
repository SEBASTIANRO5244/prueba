import Logo from "../../assets/login.png";
import {
    Container,
    Title,
    Input,
    Label,
    Button,
    ButtonText,
    Login,
    BoxImg,
    ContentLogin,
    Img,
} from "./styled";

export const LoginV = ({ handleSubmit, handleInputs }) => {
    return (
        <Container>
            <Login>
                <ContentLogin>
                    <Title>Bienvenidos</Title>
                    <form onSubmit={handleSubmit} id="buttoner">
                        <Label>Identificación</Label>
                        <Input
                            placeholder="Identificación"
                            onChange={handleInputs}
                            name={"identification"}
                        />
                        <Label>Contraseña</Label>
                        <Input
                            placeholder="Contraseña"
                            onChange={handleInputs}
                            name={"password"}
                            type="password"
                        />
                    </form>
                    <Button form="buttoner" type="submit">
                        <ButtonText>Continuar</ButtonText>
                    </Button>
                </ContentLogin>
            </Login>
            <BoxImg>
                <Img src={Logo} />
            </BoxImg>
        </Container>
    );
};
