// import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
display : flex;
flex-direction : column;
gap:30px;
width : 50%;
margin:auto;

`;
// add style for text area
export const Textarea = styled.textarea`
background : aqua;
`;

export const EditBookData = () => {
  let [imgin,setIm] = useState("")
  let [dis,setdis] = useState("")
  let navigate = useNavigate()
  let {id} = useParams();
  let location = useLocation()
  const from = location?.state?.from?.pathname || `/books/${id}`;

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page

    let res = await fetch(`http://localhost:8080/books/${id}`,{
      method:"PATCH",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify({
        longDescription: dis,
        thumbnailUrl:imgin

      })
     

    })
    let data = await res.json();
    console.log(data)

    navigate(from,{replace:true})

  };

  return (
    <>
      <Form onSubmit={handleUpdate} >
        <Input style={{background : "aqua"}}
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          onChange={(e)=>{
            setIm(e.target.value)
          }}
        />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
          onChange={(e)=>{
            setdis(e.target.value)
                      }}
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" style={{background : "aqua"}} />
      </Form>
    </>
  );
};
