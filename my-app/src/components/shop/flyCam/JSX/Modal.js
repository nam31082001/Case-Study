import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Example = ({ item }) => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState('1')
  const orderProduct = () => {
    setNumber('1')
    alert('oke order thành công',parseInt(item.price) * number)
    setShow(false)
  }


  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Mua Luôn
      </Button>

       <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {item.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={item.img} alt="abc" width={300} /><br />
          <span>Số Lương  mua <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /></span><br /><br /><br />
          <p>{parseInt(item.price) * number}</p>
          <button onClick={() => orderProduct()}>ĐẶT HÀNG</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example