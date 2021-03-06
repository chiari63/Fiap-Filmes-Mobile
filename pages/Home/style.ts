import styled from 'styled-components/native'
import {MaterialIcons} from '@expo/vector-icons'
import {RectButton} from 'react-native-gesture-handler' 

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${({theme}) => theme.color.background};
`;

export const PosterHeader = styled.Image`
    width: 500px;
    height: 230px;
    opacity: 0.5;
`;

export const TituloDestaque = styled.Text`
    color: ${({theme}) => theme.color.text};
    font-family: ${({theme}) => theme.fonte.bebas};
    font-size: 54px;
    text-transform: uppercase;
    top: -50px;
    text-align: center;
    border-bottom-width: 5px;
    border-color: ${({theme}) => theme.color.primary};
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 5);
    
`;
export const Header = styled.View`
    align-items: center;
`;
export const NomePesquisa = styled.View`
    flex-direction: row;
    background: #454545;
    border-radius: 10px;
    padding: 2px;
    top: -25px;
`;
export const TituoSecao = styled.Text`
    font-family: ${({theme}) => theme.fonte.regular};
    font-size: 20px;
    color: ${({theme}) => theme.color.text};
    padding-left: 8px;
    border-left-width: 5px;
    border-color: ${({theme}) => theme.color.primary};

`;
export const Pesquisa = styled.TextInput`
    color: ${({theme}) => theme.color.text};
    background: #454545;
    padding: 3px;
    width: 250px;
    font-size: 18px;
    border-radius: 10px;

`;
export const SecaoFilems = styled.View`
    margin-left: 16px;
`;
export const ListaHorizontal = styled.FlatList.attrs({
    horizontal:true, 
    showsHorizontalScrollIndicator:false
})`

`;
export const CardFilme = styled(RectButton)`
    width: 140px;
    margin: 8px;
`;
export const Poster = styled.Image`
    height: 180px;
    border-radius: 10px;
`;
export const Avaliacao = styled.View`
    background-color: rgba(0,0,0,.5);
    justify-content: center;
    flex-direction: row;
    border-radius: 5px;

`;
export const Icon = styled(MaterialIcons)`
    color: gold;
    font-size: 24px;
`;
export const Icon2 = styled(MaterialIcons)`
    color: white;
    font-size: 30px;
    margin-left: 8px;
`;
export const Nota = styled.Text`
    text-align: center;
    color: rgba(255,255,255,0.6);
    font-size: 18px;
`;