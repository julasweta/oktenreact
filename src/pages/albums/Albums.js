import React, { useEffect, useState } from 'react'
import { apiService } from '../../services/ApiService';
import Album from './Album';

const Albums = () => {
    const [albums, setAlbums] = useState();
    const url = `https://jsonplaceholder.typicode.com/comments`;


    useEffect(() => {
        const axiosGet = async () => {
            setAlbums(await apiService.handleGet(url));
        };
        axiosGet();
    }, [])
    console.log(albums);

  return (
    <div className='items'>
    {albums && albums.map(item=> <Album album={item}/>)} 
    </div>
  )
}

export default Albums
