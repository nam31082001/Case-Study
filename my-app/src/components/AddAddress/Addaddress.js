import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { add_address } from "../../redux/sctons";

const Addaddress = () => {

    const [address, setAddress] = useState({ numberHome: "", district: "", city: "" });
    const dispatch = useDispatch()
    const setValueForUser = (key, value) => {
        const newVal = { ...address, [key]: value };
        setAddress(newVal);
    };
    const handleAddress = () => {
        let data = {
            id: Math.floor(Math.random() * 100),
            numberHome: address.numberHome,
            district: address.district,
            city: address.city,
            check: false
        }
        if (data.numberHome !== '' && data.district !== '' && data.city !== '') {
            dispatch(add_address(data))
        }
    }
    return (
        <div className=" addaddress">

            <tr>
                <td><label>Số Nhà</label></td>
                <td><input
                    id="numberHome"
                    onChange={e => setValueForUser("numberHome", e.target.value)}
                    type="text"
                /></td>
            </tr>
            <tr>
                <td> <label>Quận/Huyện</label></td>
                <td><input
                    id="district"
                    onChange={e => setValueForUser("district", e.target.value)}
                    type="text"
                /></td>
            </tr>
            <tr>
                <td><label>Thành Phố</label></td>
                <td> <input
                    id="city"
                    onChange={e => setValueForUser("city", e.target.value)}
                    type="text"
                /></td>
            </tr>
            <button onClick={() => handleAddress()}>Tạo</button>
        </div >
    )
}
export default Addaddress