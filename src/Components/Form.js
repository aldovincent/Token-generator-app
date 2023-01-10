import React, { useState } from 'react'
import { TextField, FormControl } from '@mui/material';
import { Button } from '@mui/material';
import Token from './Token';

export default function Form() {


    const [bluetoken, setbluetoken] = useState([])
    const [redtoken, setredtoken] = useState([])
   


    const [first, setfirst] = useState({})

    const change = (event) => {
        var name = event.target.name
        var value = event.target.value
        setfirst({ ...first, [name]: value })
    }
    console.log(first);

    const generatedata=()=>{

        const b = []
                for(let i=1;i<=first.No_of_blue_tokens;i++){
                    const data=first.Blue_token_prefix+i
                    console.log(data);
                   b.push(data)
                    
                }
                setbluetoken(b)
             
             const r = []
                for(let j=1;j<=first.No_of_red_tokens;j++){
                    const data=first.Red_token_prefix+j
                    r.push(data)
                   
                }
                setredtoken(r)
                console.log(redtoken);
    }
   const deletedata =()=>{
    setfirst("")
    setbluetoken([])
    setredtoken([])
   
   }



 

    return (
        <>
            <div className='banner'>
                <h2 className='heading'>Token Generator</h2>
                <br />
                <form>
                    <center>
                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop: "5px" }}
                                label="Number of blue tokens"
                                type="number"
                                variant="outlined" value={first.No_of_blue_tokens || ""} name='No_of_blue_tokens'  onChange={change}
                            />
                        </FormControl><br />

                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop: "20px" }}
                                label="Blue token prefix"
                                type="text"
                                variant="outlined" value={first.Blue_token_prefix} name='Blue_token_prefix' onChange={change}
                            />
                        </FormControl><br />
                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop: "20px" }}
                                label="Blue token per row"
                                type="number"
                                variant="outlined" value={first.Blue_token_per_row} name='Blue_token_per_row' onChange={change}
                            />
                        </FormControl><br />
                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop:"20px" }}
                                label="Number of red tokens"
                                type="number"
                                variant="outlined" name="No_of_red_tokens" onChange={change}
                            />
                        </FormControl><br />
                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop: "20px" }}
                                label="Red token prefix"
                                type="text"
                                variant="outlined" name="Red_token_prefix" onChange={change}
                            />
                        </FormControl><br/>
                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop: "20px" }}
                                label="Red token per row"
                                type="number"
                                variant="outlined"
                            />
                        </FormControl><br />
                        <Button variant="contained" color="primary" type="button" style={{ marginRight: "25px", }} onClick={generatedata}   >
                            Generate
                        </Button>
                        <Button variant="contained" color="primary" type="button" onClick={deletedata}>
                            clear
                        </Button>
                    </center>
                </form>
                {console.log(bluetoken)}
                <Token newdata={bluetoken} menudata={first.Blue_token_per_row} olddata={redtoken}/>
            </div>
            






        </>
    )
}
