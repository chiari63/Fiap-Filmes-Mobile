import axios from "axios";
import React, { useEffect, useState } from "react"
import { Filme } from "../../model/filme";
import {Container, Header, PosterHeader, TituloDestaque, TituoSecao, SecaoFilems, CardFilme, Poster, Avaliacao, Nota, Icon, ListaHorizontal,} from "./style"

export default function Home({ navigation }: any) { 
    const [filmes, setFilmes] = useState([])
    const [series, setSeries] = useState([])

    useEffect(async () => {
            const respostaMovie: any = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=d96157e71a9a85257b60a42cafcdd67e')
            setFilmes(respostaMovie.data.results)
                   
    }, [])
    useEffect(async () => {
            const respostaSerie: any = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=d96157e71a9a85257b60a42cafcdd67e')
            setSeries(respostaSerie.data.results)
        
    },[])

    function handleDetail(filme: Filme){
        navigation.navigate('Details', {filme})
    }
    return ( 
    <Container>
        <Header>
            <PosterHeader source={{ uri: 'https://www.themoviedb.org/t/p/w500/cxlIj6EMsOyHdpBvGPdjAEdRT51.jpg'}} />
            <TituloDestaque>FiapFilmes</TituloDestaque>
        </Header>

        <TituoSecao>Filmes em alta</TituoSecao>

        <SecaoFilems>
            <ListaHorizontal data={filmes} renderItem={({item}: any) => 
            <CardFilme onPress={() => handleDetail(item)} >
                <Poster source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}}></Poster>
                <Avaliacao>
                    <Icon name="star" />
                    <Nota>{item.vote_average}</Nota>
                </Avaliacao>
            </CardFilme>
            }/>
        </SecaoFilems>

        <TituoSecao>Series em alta</TituoSecao>    

        <SecaoFilems>
            <ListaHorizontal data={series} renderItem={({item}: any) => 
            <CardFilme onPress={() => handleDetail(item)} >
                <Poster source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}}></Poster>
                <Avaliacao>
                    <Icon name="star" />
                    <Nota>{item.vote_average}</Nota>
                </Avaliacao>
            </CardFilme>
            }/>
        </SecaoFilems>

    </Container>
) }

