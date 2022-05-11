import { useEffect, useState } from "react"
import { ResourceInfo } from "./Interfaces"
import axios from 'axios'
import { baseURL } from "../utils/baseURL"

export default function Resources(): JSX.Element {
    /*
    Fetch data resources data and put it into array
    Define interface
    Map array into SingleRsrouce component
    */
          
    const [resources, setResources] = useState<ResourceInfo[]>([])

    useEffect(()=>{
        const fetchResources = async () => {
            const response = await axios.get(`${baseURL}/resources`)
            setResources(response.data)
        }
        fetchResources();
    }, [])


    return (
        <main>
            { }
        </main>
    )
}