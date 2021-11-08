import axios from "axios";
import React, { useEffect, useState } from "react"
import { Filme } from "../../model/filme";
import {Container, Header, PosterHeader, TituloDestaque, TituoSecao, SecaoFilems, CardFilme, Poster, Avaliacao, Nota, Icon, ListaHorizontal, NomePesquisa, Pesquisa, Icon2,} from "./style"

export default function Home({ navigation }: any) { 
    const [filmes, setFilmes] = useState([])
    const [filmesOriginal, setOriginalFilmes] = useState([])  
    const [series, setSeries] = useState([])
    const [seriesOriginal, setOriginalSeries] = useState([])

    useEffect(async () => {
            const respostaFilmes: any = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=d96157e71a9a85257b60a42cafcdd67e&language=pt-BR')
            setFilmes(respostaFilmes.data.results)
            setOriginalFilmes(respostaFilmes.data.results)         
    }, [])
    useEffect(async () => {
            const respostaSerie: any = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=d96157e71a9a85257b60a42cafcdd67e&language=pt-BR')
            setSeries(respostaSerie.data.results)
            setOriginalSeries(respostaSerie.data.results)
    },[])

    function handleDetail(filme: Filme){
        navigation.navigate('Details', {filme})
    }

    function search( s: any ) {
        let arr1 = JSON.parse(JSON.stringify(filmesOriginal));
        let arr2 = JSON.parse(JSON.stringify(seriesOriginal));
        setFilmes(arr1.filter((filmes: any) => filmes.title.includes(s)));
        setSeries(arr2.filter((series: any) => series.name.includes(s)));
    }
    return ( 
    <Container>
        <Header>
            <PosterHeader source={{ uri: 'https://www.themoviedb.org/t/p/w500/cxlIj6EMsOyHdpBvGPdjAEdRT51.jpg'}} />
            <TituloDestaque>FiapFilmes</TituloDestaque>
            <NomePesquisa>
                <Icon2 name="search" />
                <Pesquisa placeholder= {'Pesquise aqui!'} onChangeText={( s ) => search(s)}></Pesquisa>
            </NomePesquisa>
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

