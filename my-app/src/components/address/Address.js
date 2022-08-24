import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Addaddress from '../AddAddress/Addaddress'
import { putAddress, deleteAddress } from '../../redux/sctons'



const Address = () => {
    const dispatch = useDispatch()
    const [addaddress, setAddaddress] = useState(false)
    const address = useSelector(state => state.address)

    const handleCheckBox = (job) => {
        dispatch(putAddress(job))
    }
    const handelDelete = (job) => {
        dispatch(deleteAddress(job))
    }

    return (
        <div className="address">
            <button onClick={() => setAddaddress(!addaddress)}>+</button><br />
            {addaddress && <Addaddress />}
            <h4>Địa Chỉ </h4>
            {address.map(item => {
                return (
                    <>

                        <tr>
                            <td> <input type="checkbox" name='radio' onClick={() => handleCheckBox(item)} />
                                {item.numberHome},
                                {item.district},
                                {item.city}</td>
                            <td><button onClick={() => handelDelete(item)}>Xóa</button></td>
                        </tr>


                    </>
                )
            }
            )}



        </div>
    )
}
export default Address