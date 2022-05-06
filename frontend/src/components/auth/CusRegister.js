import React, { useState, useEffect } from 'react'
import SoloAlert from 'soloalert'
import { useParams } from "react-router";
import axios from 'axios';
import "./cuslogin.css"


export default function cusReg() {
    return (
        <section class="vh-100">
            
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://www.linkpicture.com/q/hotel_staff_05.jpg"
                            class="img-fluid" alt="Sample image" />
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <h3>Customer Register</h3>
                        <form>

                            <div class="form-outline mb-3">
                                <input type="text" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Name" />
                            </div>
                            <div class="form-outline mb-3">
                                <input type="email" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Email" />
                            </div>
                            <div class="form-outline mb-3">
                                <input type="number" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Phone No" />
                            </div>
                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Password" />
                            </div>
                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Confirm Password" />
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2 d-flex justify-content-start">
                                <button type="button" class="btn btn-primary btn-lg">Register</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0 mx-5">Already have account? <a href="/cuslogin"
                                    class="link-danger">Login</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div
                class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">

                <div class="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>



                <div>
                    <a href="#!" class="text-white me-4">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" class="text-white me-4">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#!" class="text-white me-4">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#!" class="text-white">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>

            </div>
        </section>
    )
}
