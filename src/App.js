import { useState ,useEffect,useCallback   } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FailModal from './components/modal'
import Main from './components/main'

function App() {
  const createVillian=(myhero)=>{
    let temp=[],repeat=0,length=getRandomInt(6,9);
    for (let i = 0; i < length; i++) {
      let value=getRandomInt(myhero/2,myhero*2);
      if(temp.indexOf(value)===-1) temp.push(value)
    }
    temp.forEach(n=>{if (n<myhero)repeat++ })
    if (repeat<1) temp.push(getRandomInt(myhero/2,myhero-1))
    return temp;
  }
  const attackOnVillian =(a)=>{
    if(hero > a) {
      setHero(hero+Math.ceil(a/2));
      let temp=villains.filter(villain=>villain!==a)
      setVillain(temp)
      if(villains.length ===1 ){
        setTimer(0)
        setLevel(level+1)
        setVillain(createVillian(hero))
      }
    }
    else handleShow(setTimer(15));
  }
  const reset=()=>{
    let score=getRandomInt(3,10);
    setHero(score);
    setVillain(createVillian(score));
    setLevel(1);
    setTimer(0);
    setShow(false);

  }
  const [hero  ,setHero  ]= useState(getRandomInt(3,10));
  const [villains  ,setVillain  ]= useState(createVillian(hero));
  const [timer  ,setTimer  ]= useState(0);
  const [level  ,setLevel  ]= useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (a) => setShow(true);
  const time =useCallback(()=>timer >=15?handleShow(setTimer(15)):setTimer(timer=>timer+1),[timer])
  useEffect(() => {const interval=setInterval(()=>time(),1000);return () => clearInterval(interval);},[time])
  return <>
    <Main timer={timer} hero={hero} villains={villains} level={level} attackOnVillian={attackOnVillian} />
    <FailModal show={show} handleClose={handleClose} level={level} reset={reset}/></>;
}
const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

export default App;
