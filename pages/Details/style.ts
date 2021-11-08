import styled from 'styled-components/native'
import {MaterialIcons} from '@expo/vector-icons'
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${({theme}) => theme.color.background}
`;

export const Body = styled.View`
    align-items: center;
`;

export const PosterHeader = styled.Image`
    width: 400px;
    height: 200px;
    opacity: 0.3;
`;
export const BotaoDestaque = styled.TouchableOpacity`
    flex-direction: column;
    background-color: ${({theme}) => theme.color.primary}
    border-radius: 10px;
    width: 390px;
    padding: 8px; 
    
`;
export const NomeBotao = styled.Text`
    text-align: center;
    color: white;
    font-family: ${({theme}) => theme.fonte.regular}
    font-size: 18px;
   
`;

export const TituloDestaque = styled.Text`
    color: ${({theme}) => theme.color.text}
    font-family: ${({theme}) => theme.fonte.bebas}
    font-size: 50px;
    top: -130px;
    text-align: center;
    border-bottom-width: 5px;
    border-color: ${({theme}) => theme.color.primary};
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 5);
    
`;
export const Resumo = styled.Text`
    color: ${({theme}) => theme.color.text}
    font-family: ${({theme}) => theme.fonte.regular}
    font-size: 18px;
    top: -60px;
    text-align: center;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 5);
    margin: 5px;
    
`;
export const InfAdcional = styled.View`
    border-radius: 8px;
    padding: 5px;
    justify-content: space-evenly;
    flex-direction: row;
    top: -50px;
`;
export const Avaliacao = styled.View`
    background-color: rgba(0,0,0,.5);
    border-radius: 8px;
    padding: 5px;
    margin-right: 50px;
    flex-direction: row;
`;
export const Icon = styled(MaterialIcons)`
    color: gold;
    font-size: 25px;
`;
export const Nota = styled.Text`
    text-align: center;
    color: rgba(255,255,255,0.6);
    font-size: 20px;
`;
export const Lancamento = styled.View`
    background-color: rgba(0,0,0,.5);
    border-radius: 8px;
    padding: 5px;
    flex-direction: row;
`;
export const Calendar = styled(MaterialIcons)`
    color: gold;
    font-size: 25px;
`;
export const Data = styled.Text`
    text-align: center;
    color: rgba(255,255,255,0.6);
    font-size: 20px;
`;