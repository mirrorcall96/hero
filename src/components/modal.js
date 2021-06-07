import {Modal,Button,Image} from 'react-bootstrap';
import dead from '../images/dead.png';

const FailModal =(props)=> <Modal show={props.show} onHide={props.handleClose}>
<Modal.Header closeButton>
  <Modal.Title>You Lost</Modal.Title>
</Modal.Header>
<Modal.Body><Image src={dead} fluid /><center>Dont feel sad , you reached level <b>{props.level}</b>!</center></Modal.Body>
<Modal.Footer>
  <Button variant="danger" onClick={props.reset}>
    Try again
  </Button>
</Modal.Footer>
</Modal>
export default FailModal
