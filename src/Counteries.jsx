import { useEffect,useState } from "react";
import Card from "./card/card";

function Countries(){
    const api_Endpoint ="https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([]);


    useEffect(()=>{
        fetch(api_Endpoint).then((res)=>res.json())
        .then((data)=>setCountries(data))
        .catch((error)=>console.error("Error fetching data:", error));

    },[]);
    // const countries = [0,1,2,3,4,5,6];
    return(
        <div style ={{display:"flex", flexWrap:"wrap" , gap: "10px"}}>
        {
            countries.map((country) => (
        <Card key={country.abbr} flag ={country.flag} name={country.name} /> 
        ))}
        </div>
    );

    
}


export default Countries;