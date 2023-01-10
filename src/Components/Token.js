import React, { useState } from 'react'

export default function Token({ newdata, olddata,menudata }) {
    const [data,setdata]=useState([1,2,3,4,5,6,7,8,9,10])
    console.log(newdata, olddata,menudata);
    return (
        <>
            <div className='container'>
                {newdata.map((obj,index) => (<>
                    <div className='row' >

                        <div className='bluetokenone' >{obj}
                        </div>

                    </div>
                    {data.map(count=><>{index+1==menudata*count?<> <break style={{ display: "inline-block",  width: "0px", height: "0px", overflow: "hidden"
 }}/></>:""}</>)}
                    
                    
                    </>
                ))}
            </div>
            <div className='container'>
                {olddata.map(obj => (
                    <div className='row' style={{ display: "flex" }}>
                        <div className='redtokenone' >{obj}
                        </div>
                    </div>
                ))}
                        {/* <div className='redtokenone' >A4
                    </div>
                    <div className='redtokenone' >A4
                    </div>
                    <br/>
                    <div className='redtokenone' >A4
                    </div> */}
                   
                </div>
        </>
    )
}
