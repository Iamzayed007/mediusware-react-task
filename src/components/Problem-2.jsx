import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
const Problem2 = () => {
 const [modalType,setModalType] =useState('')
 const [countryList,setCountryList] =useState([])
 const history = createBrowserHistory();
 const handleAllCountry=(type)=>{
 setModalType(type)
//  history.push('/problem-2/country')
 console.log(modalType);
 }
 useEffect(()=>{
    // if (modalType === 'allContacts') {
        fetch('https://contact.mediusware.com/api/contacts/',{
            headers:{
                "Access-Control-Allow-Origin": "http://localhost:5173/"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("all",data);
            setCountryList(data)
            console.log(countryList);
        })
    // }
 },[])
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" onClick={()=>handleAllCountry('allContacts')} >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" onClick={()=>handleAllCountry('usContacts')} >US Contacts</button>
                </div>
                
            </div>
        </div>
    );
};

export default Problem2;