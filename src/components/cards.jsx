import { Card } from "react-bootstrap";


export function MobileCards({MobileImage, MobileDescription, Price}) {
  return (
  
   <Card style={{ width: '18rem',margin:"0 auto" }}>
      <Card.Img style={{width:"100%",height:"100"}} variant="top" src={MobileImage} />
      <Card.Body>
        <Card.Text>
          {MobileDescription}
        </Card.Text>
        <p style={{color:"orange",fontSize:"20px"}}>{Price}</p>
      </Card.Body>
    </Card>
 
  );
}

export function CardHeader(){
    return(
        <></>
    )
}