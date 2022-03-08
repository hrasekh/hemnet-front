import { Button } from 'reactstrap';
import ImageWrapper from 'components/Image/ImageWrapper';
import React, { useState } from 'react';
import { BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';

export default function UserContact ({user}){

    const [showNumber, setShowNumber] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    return(
        <>
        <div style={{float: "right"}}>
            <ImageWrapper
                src={`${user?.avatar}`}
                alt={`${user?.name} ${user?.family}`}
                width={70}
                height={70}
            />
        </div>
        <h3 style={{fontSize: "1.3em"}}>{user?.name} {user?.family}</h3>
        <h4 style={{color: "gray", fontSize: ".8em"}}>{user?.email}</h4>
        <div style={{padding: "20px 0"}}>
            <Button color="success" outline style={{width: "100%", margin: "5px 0"}} 
                onClick={()=>{setShowNumber(true)}} >
                    {!showNumber && <span><BsTelephoneFill /> Phone Number</span>}
                    {showNumber && <span>{'021-123 45 78'}</span>}
            </Button>
            <Button color="success" outline style={{width: "100%", margin: "5px 0"}}
                onClick={()=>{setShowEmail(true)}}  >
                    {!showEmail && <span><BsEnvelopeFill /> By Email</span>}
                    {showEmail && <span>{user.email}</span>}
            </Button>
        </div>
        </>
    )
}