import {Container,Row,Col,ProgressBar,Image} from 'react-bootstrap';
import heroLogo from '../images/hero.png';
import heroLogo2 from '../images/hero2.png';
import heroLogo3 from '../images/hero3.png';

import villianLogo from '../images/villian.png';
import attack from '../images/attack.png';
import {StyledCard} from '../styles'


const Main =(props)=> {
    let cards=[];
    for (let i = 0; i < Math.min(props.villains.length,9); i+=3) {
        cards.push(<Col xs={2}>{props.villains.filter((a,j) => j>=i && j<i+3).map(a=><StyledCard className="villian" key={a} onClick={()=>props.attackOnVillian(a)} ><StyledCard.Img src={villianLogo} /><StyledCard.Title><center>{a}</center></StyledCard.Title></StyledCard>)}</Col>)
    }
    let LevelLogo=heroLogo;
    if(props.level >= 5) LevelLogo=heroLogo2;
    if(props.level >= 10) LevelLogo=heroLogo3;
return <Container>
<h2>Level {props.level}</h2>
<Row >
  <Col xs={2}>    
    <StyledCard><StyledCard.Img  src={LevelLogo} /><StyledCard.Title><center>{props.hero}</center></StyledCard.Title></StyledCard>
  </Col>
  <Col xs={3}>
  <Image src={attack} fluid/>
  </Col>
  {cards}
</Row><br></br>
<center><h5>{props.timer}s until they attack</h5></center>
<ProgressBar now={props.timer} min={0} max={15}  />
</Container>
}

export default Main
