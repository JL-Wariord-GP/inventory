import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login, checkToken } from '../auth/auth'
import logo from '../img/img.svg'
import '../css/login.css'
import Swal from 'sweetalert2';


const Year = new Date().getFullYear()

const Login = () => {

    const token = checkToken();

    const navigate = useNavigate()

    const initialState = { email: "jgomez@prueba.com", password: "j123456" };
    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = (e) => {

        if (userData.email === "jgomez@prueba.com" && userData.password === "j123456") {
            login();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Credenciales errada',
                text: 'Por favor valide sus credenciales!',
            })
            e.preventDefault()

        }

    };

    useEffect(() => {
        if (token) navigate("/app/dashboard");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    return (

        <div className='login'>
            <section className="side">
                <img src={logo} alt="Logo" />
            </section>

            <section className="main">
                <div className="login-container">
                    <p className="title">Sistema de Inventario</p>
                    <div className="separator"></div>
                    <p className="welcome-message">Proporcione sus credenciales de inicio de sesión para acceder a todos nuestros servicios.</p>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-control">
                            <input type="text" placeholder="Usuario" name="email" onChange={handleInputChange} value={email} />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="form-control">
                            <input id='name' type="password" placeholder="Contraseña" onChange={handleInputChange} name="password" value={password} />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <button className="submit">Inicio de sesión</button>
                        <p className="mt-5 mb-3 text-muted text-center">&copy; {Year} Desarrollador por Jorge Gomez </p>
                    </form>
                </div>
            </section>
        </div>

    )
}

export default Login