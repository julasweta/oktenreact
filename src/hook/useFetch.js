import { useEffect, useState } from 'react';
import { exampleBaseUrl } from '../constants/urls';


export function useFetch(path){
  const [value, setValue] = useState(0)

  useEffect(()=>{
    console.log(exampleBaseUrl + path +'');
    fetch(exampleBaseUrl+path + '')
      .then(resp => resp.json())
      .then(data => {
        setValue(data)
      })
  },[])



  return value

}