

import { HeroContainer, HeroText,HeroImage } from './styles';
import Logo from '../../assets/foto-fred.png';
;
function Hero() {


    return (
        <HeroContainer>
            <HeroImage>
                <img src={Logo} alt="Foto Fred"  />
            </HeroImage>
            <HeroText>

                <h2>Seja bem-vindo ao meu portfólio!</h2>
                <p>Crio aplicações modernas, performáticas e escaláveis.
                Apaixonado por tecnologia e inovação, estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos impactantes.</p>
               
               
            </HeroText>
        </HeroContainer>
    );
}

export default Hero;