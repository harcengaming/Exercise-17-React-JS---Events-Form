import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Daftar() {
    const history = useHistory()
    
    const [user] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmedPassword: ''
    });

    const [dataDaftar, setDaftar] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmedPassword: ''
    });

    const handleChange = (event) => {
        setDaftar({
            ...dataDaftar,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(dataDaftar);

        if(dataDaftar.firstName === user.firstName){
            if(dataDaftar.lastName === user.lastName){
                if(dataDaftar.email === user.email){
                    if(dataDaftar.password === user.password){
                        if(dataDaftar.confirmedPassword === user.confirmedPassword){
                history.push("/masuk")
            }
        } else {
            alert("email dan password anda salah")
        } 
    }}}}

    return (
        <div>
            <h1>Selamat Datang di Harcen Gaming</h1>
            <form>
                <h1>Daftar Akun Baru</h1>
                <label htmlFor="">Nama Depan</label>
                <input 
                    type="text" 
                    name="firstName" 
                    id="" 
                    value={dataDaftar.firstName}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Nama Belakang</label>
                <input 
                    type="text" 
                    name="lastName" 
                    id="" 
                    value={dataDaftar.lastName}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Email</label><br />
                <input 
                    type="email" 
                    name="email" 
                    id="" 
                    value={dataDaftar.email}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Kata Sandi</label><br />
                <input 
                    type="password" 
                    name="password" 
                    id="" 
                    value={dataDaftar.password}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Konfirmasi Kata Sandi</label>
                <input 
                    type="password" 
                    name="confirmedPassword" 
                    id="" 
                    value={dataDaftar.confirmedPassword}
                    onChange={handleChange}
                /><br />

                <button onClick={handleSubmit}>Daftar</button>
            </form>
        </div>
    )
}

export default Daftar;
