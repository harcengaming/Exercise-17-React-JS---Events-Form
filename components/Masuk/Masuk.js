import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

function Masuk() {
    const history = useHistory()
    
    const [user] = useState({
        email: '',
        password: ''
    })

    const [dataMasuk, setMasuk] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        // setEmail(event.target.value)
        setMasuk({
            ...dataMasuk,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(dataMasuk);

        if(dataMasuk.email === user.email){
            if(dataMasuk.password === user.password){
                history.push("/")
            }
        } else {
            alert("email dan password anda salah")
        } 
    }

    return (
        <div className="kotak-masuk">
            <h1>Selamat Datang di Harcen Gaming</h1>
            <form>
                <h1>Masuk Akun Baru</h1>
                <label htmlFor="">Alamat Email</label><br />
                <input 
                    type="email" 
                    name="email" 
                    id="" 
                    value={dataMasuk.email}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Kata Sandi</label><br />
                <input 
                    type="password" 
                    name="password" 
                    id="" 
                    value={dataMasuk.password}
                    onChange={handleChange}
                /><br />

                <button onClick={handleSubmit}>Masuk</button>
            </form>
        </div>
    )
}

export default Masuk;
