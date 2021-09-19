import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push({
            pathname: `/gossip`,
            query: { room, username }
        });
    };

    return (
        <>
            <img className="wave" src="img/wave.png" />

            <div className="container">
                <div className="img">
                    <img src="img/bg.svg" />
                </div>

                <div className="login-content">
                    <form onSubmit={handleSubmit}>
                        <img src="img/avatar.svg" />
                        <h2 className="title">Gossip</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input
                                    type="text"
                                    className="input"
                                    value={username}
                                    placeholder="Username"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Room"
                                    value={room}
                                    onChange={(e) => setRoom(e.target.value)}
                                />
                            </div>
                        </div>
                        <input type="submit" className="btn" value="Login" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
