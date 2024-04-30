import { useEffect } from "react";
import { useState } from "react";
import Card from './../Card';



const Cards = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
//    console.log(info)
    return (

        <div >
            <h1 className="text-3xl font-bold text-center my-5">Industrial Powerhouses: Leading States in Manufacturing</h1>
            
            <p className="text-center">Discover the economic engines of America's industrial sector as we delve into the leading states in manufacturing. Explore how these states drive innovation, job creation, and economic growth through their diverse industrial landscapes, from automotive and aerospace to technology and textiles</p>
            <div className="grid grid-cols-3 gap-10 mt-11">
        {
             info.map(cardInfo => <Card key={cardInfo.id} cardInfo={cardInfo}></Card>)
        }
            </div>
        </div>
    );
};

export default Cards;