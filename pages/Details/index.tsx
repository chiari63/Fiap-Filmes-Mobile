import { useRoute } from "@react-navigation/core";
import React from "react";
import {Calendar, 
        Data,
        Icon,
        InfAdcional,
        Lancamento,
        Avaliacao,
        Body,
        BotaoDestaque,
        Container,
        NomeBotao,
        Nota,
        PosterHeader,
        Resumo,
        TituloDestaque } from "./style";

export function Detail({navigation}: any){
    const route = useRoute()
    const{ filme }: any = route.params

    function handleBack(){
        navigation.goBack()
    }

    return(
        <Container>
            <Body>
                <PosterHeader source={{ uri: 'https://image.tmdb.org/t/p/w200/' + filme.poster_path}} />
                <TituloDestaque>{filme.title || filme.name}</TituloDestaque>
                <Resumo>{filme.overview}</Resumo>
                <Resumo>{filme.id}</Resumo>
                    <InfAdcional>
                        <Avaliacao>
                            <Icon name="star" />
                            <Nota>{filme.vote_average}</Nota>
                        </Avaliacao>
                        <Lancamento>
                            <Calendar name="today" />
                            <Data>{filme.release_date || filme.first_air_date}</Data>
                        </Lancamento>
                    </InfAdcional>
                <BotaoDestaque onPress={handleBack}><NomeBotao>Voltar</NomeBotao></BotaoDestaque>
            </Body>
        </Container>
    )}