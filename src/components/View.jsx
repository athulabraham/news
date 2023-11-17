import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const View = () => {
    const [data, changeData] = useState([]);
  
    const fetchData = () => {
      axios
        .get("https://anishpdm.github.io/testapi/news.json")
        .then((response) => {
          changeData(response.data);
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row g-3">
                {data.map((value, index) => {
                  return (
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 card-group">
                      <div class="card text-center border shadow border-primary">
                        <h5 class="card-header">{value.title}</h5>
                        <p>{value.author}</p>
                        <div class="card-body">
                          <h5 class="card-title">{value.description}</h5>
                          <p class="card-text">{value.content}</p>
                          
                          <img src={value.urlToImage} class="card-img-top" alt="..."/>
                          <be/><br/><br/>
                          <a href={value.url} class="btn btn-primary">
                            See News
                          </a>
                        </div>
                        <div className="card-footer">
                          <p>Source: {value.source.name}</p>
                          <p class="">Published At: {value.publishedAt}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
export default View;
