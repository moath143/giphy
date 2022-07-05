import React, { useEffect, useState } from "react";
import CRUDRequest from "../API/giphy";
import './home.css'

const Home = () => {
    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState('');
    const [counter, setCounter] = useState(3);
    const[hide, setHide] = useState(false);


  const fetchData = async () => {
     await CRUDRequest.get(
      `search?api_key=FzKk0yVso7D0EqYys6BAlYAWjmATcGVI&q=${counter === 0 ? (search || 'tom and jeary'): setHide(false)}&limit=10&offset=0`
    )
      .then((res) => {
        setGifs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    };



    const dataList = gifs.map((item) => {
        console.log(item);
        return (
          <div className="images" key={item.id}>
            <img className="image" src={item.images.original.url} alt='giphy' />
          </div>
        );
    })

    useEffect(() => { 
        setTimeout(() => {
            if (counter === 0) {
                setHide(true);
                fetchData();
            } else {
                setCounter(counter - 1);
            }
         }, 1000);
    });
    




    return (
      <section className="gallery">
        <div className="container">
          <h1>Search Giphy</h1>
          <div className="search">
            <input
              placeholder="Search..."
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <div className={hide ? "hide" : ""}>{counter}</div>
          </div>
        </div>
        <div className="container">{counter === 0 ? dataList : ''}</div>
      </section>
    );
};

export default Home;
