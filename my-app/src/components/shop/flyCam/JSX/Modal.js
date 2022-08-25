import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { checkLogIn, putAddress, deleteAddress,deleteCheck, historyBuy } from '../../../../redux/sctons';
import Address from '../../../address/Address';


const Example = ({ item }) => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false)
  const [number, setNumber] = useState('1')
  const checkLog = useSelector(state => state.checkLog)
  const addressData = useSelector(state => state.address)
  const history = useHistory()
  const dispatch = useDispatch()


  const handleCheckBox = (job) => {
    dispatch(putAddress(job))
  }
  const handelDelete = (job) => {
    dispatch(deleteAddress(job))
  }
  let count = 0
  addressData.map(item => {
    if (item.check === true) {
      count = count + 1
    }
  })



  const orderProduct = () => {
    if (!checkLog) {
      alert("Vui Lòng Dăng Nhập")
      history.push("/login")
      dispatch(checkLogIn())
    } else if(count===1) {
      setNumber('1')
      alert('oke order thành công',)
      setShow(false)
      dispatch(deleteCheck())
    }else{
      alert('chưa chọn địa chỉ')
    }
  }


  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Mua 
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
          <button onClick={() => setClick(!click)}>Địa Chỉ</button><br />
          {click && <Address handleCheckBox={handleCheckBox} handelDelete={handelDelete} />}
          <button onClick={() => orderProduct()}>ĐẶT HÀNG</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example