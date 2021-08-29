import { useState } from 'react';
import logoGambar from '../assets/profile-pic.png';
import logoGambar2 from '../assets/rsz_144mb_fhd.jpg';

function Home({ utama }) {
    const [kotak, setKotak] = useState("Klik")

    const [images] = useState([logoGambar, logoGambar2])

    const handleClick = () => {
        setKotak("daftar Akun Baru")
    }

    return (
        <div>
            <h1 onClick={handleClick}>{utama} {kotak}</h1>
            <img src={images[0]} width="200px" alt="" />
            <img src={images[1]} width="200px" alt="" />
        </div>
    )
}

export default Home;
