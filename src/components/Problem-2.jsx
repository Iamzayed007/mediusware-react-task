import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
const Problem2 = () => {
 const [modalType,setModalType] =useState('')
 const [contactList,setContactList] =useState([])
 const history = createBrowserHistory();
 const handleAllCountry=(type)=>{
 setModalType(type)
 history.push('/problem-2/all-contacts')
 console.log(modalType);
 }
 const handleUsCountry=(type)=>{
 setModalType(type)
 history.push('/problem-2/us-country')
 console.log(modalType);
 }
 useEffect(()=>{
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', "*")
    headers.append('Access-Control-Allow-Credentials' , "true" )
    headers.append('Access-Control-Allow-Methods', "GET,HEAD,OPTIONS,POST,PUT" )
    headers.append('Access-Control-Allow-Headers',"Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")

 if (modalType === 'usContacts') {
    fetch('https://contact.mediusware.com/api/country-contacts/United States',{
        // mode:'no-cors',
        headers:headers
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("all",data);
        setContactList(data)
        console.log(contactList);
    })
 }
    if (modalType === 'allContacts') {
        fetch('https://contact.mediusware.com/api/contacts/?page=1',{
            // mode:'no-cors',
            headers:headers
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("all",data);
            setContactList(data)
            console.log(contactList);
        })
    }
 },[modalType])
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" onClick={()=>handleAllCountry('allContacts')} >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" onClick={()=>handleUsCountry('usContacts')} >US Contacts</button>
                </div>
                
            </div>
        </div>
    );
};

export default Problem2;