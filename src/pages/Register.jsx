import React from 'react';
import Sale01 from '../components/sale/Sale01';
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, NavLink } from 'react-router-dom';
import DarkMode from '../components/header/DarkMode';
import logodark from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/');
    }

    return (
        <div>
            <header id="header_main" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body d-flex justify-content-between">
                                <div className="header__left">
                                    <div className="logo">
                                        <NavLink to='/' className="dark" style={{ marginTop: "3rem", marginLeft: "3rem" }} >
                                            <img
                                                src={logodark}
                                                alt="Rockie"
                                            />
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="header__right" style={{ marginTop: "3rem", marginRight: "3rem" }}>
                                    <DarkMode />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h3 className="heading">Register To Oblivion</h3>
                                <p className="desc fs-20">
                                    Register in advance and enjoy the event benefits
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Tabs>
                                <TabPanel>
                                    <div className="content-inner">
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Username</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    placeholder="Please fill in the Username form."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label
                                                >Password
                                                    <span
                                                    >(8 or more characters, including numbers and special
                                                        characters)</span
                                                    ></label
                                                >
                                                <input
                                                    type="password"
                                                    className="form-control mb-10"
                                                    placeholder="Please enter a password."
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Invite Code </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Please enter your invitation code."
                                                />
                                            </div>

                                            <button onClick={handleRegister} type="submit" className="btn-action">
                                                Pre-Registration
                                            </button>
                                            <div className="bottom">
                                                <p>Already have an account?</p>
                                                <Link to="/">Login</Link>
                                            </div>
                                        </form>
                                    </div>
                                </TabPanel>
                            </Tabs>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;