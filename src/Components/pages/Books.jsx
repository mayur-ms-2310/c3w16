import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 display: grid;
 grid-template-columns : repeat(2,30%);
 gap:20px;
 justify-content : center;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data

     let getdata = async ()=>{
    let res = await fetch(`http://localhost:8080/books/`)
    let data = await res.json();
    console.log(data)
    setData(data)
    }
    getdata()

  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {!!data&& data.map((el)=>{
           return <BookCard  key = {el.id} {...el}/>
          })}
      </Grid>
    </>
  );
};
export default Books;
