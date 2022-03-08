import { Button } from 'reactstrap';
import Image from 'next/image';

export default function UserContact ({user}){
    return(
        <>            
        <Image
            src={`${process.env.api_domain}${user?.avatar}`}
            alt={`${user?.name} ${user?.family}`}
            style={{float: "right", borderRadius: "50%", width: "70px"}} 
        />
        <h3 style={{fontSize: "1.3em"}}>{user?.name} {user?.family}</h3>
        <h4 style={{color: "gray", fontSize: ".8em"}}>{user?.email}</h4>
        <div style={{padding: "20px 0"}}>
            <Button outline style={{width: "100%", margin: "5px 0"}}>Show Phone Number</Button>
            <Button outline style={{width: "100%", margin: "5px 0"}}>By Email</Button>
        </div>
        </>
    )
}