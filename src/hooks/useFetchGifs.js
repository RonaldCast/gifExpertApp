import {useEffect, useState} from "react"
import { getGists } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[], 
        loading:true
    });
    useEffect(() => {
        getGists(category).then(resp => {
            setState({
                data:resp,
                loading:false
            })
        })
    }, [category])
    return state;
}
 
