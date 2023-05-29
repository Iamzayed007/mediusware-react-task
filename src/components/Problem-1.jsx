import React, {useEffect, useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [loading, setLoading] = useState(false);
    const [inputData ,setInputData]= useState({})
    const [allData ,setAllData]= useState([])
    const [filterData ,setFilterData]= useState(allData)
    // let data =[]
    const handleClick = (val) =>{
        setShow(val);
    }
    const handleName = (e) =>{
       setInputData({
        ...inputData,
        name:e.target.value
       })
       console.log(inputData);
    }
    const handleStatus = (e) =>{
       setInputData({
        ...inputData,
        status:e.target.value
       })
       console.log(inputData);
    }

    const handleSubmit = (data,e) =>{
        e.preventDefault()
        // setShow(val);
        const newData = data
        // allData.push(data)
        setAllData([...allData, newData]);
        
        console.log(allData);
    }
    useEffect(()=>{
        if(show === 'active'){
            const filter = allData.filter(dt=>dt.status == 'active')
            setFilterData(filter)
        }
       else if(show === 'completed'){
            const filter = allData.filter(dt=>dt.status == 'completed')
            setFilterData(filter)
        }
        else{
            setFilterData(allData)
        }
    },[show,allData])

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form  onSubmit={(e)=>handleSubmit(inputData,e)} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" onChange={handleName} className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" onChange={handleStatus} className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        { !loading &&
                           <ChildContent allData={filterData}/>
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;

const ChildContent =(props)=>{
return(
    props.allData.map(dt=><tr>
        <td>{dt.name}</td>
        <td>{dt.status}</td>
        </tr>)
)
}