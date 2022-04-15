import React, { useState, useEffect } from 'react'
import "./SideNav.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Empsidenav() {

    return (

        <div>

            <div class="sidebar">

                <Link to="/empManager/view">View Employees</Link>
                <Link to="/empManager/add">Add Employee</Link>
                <Link to="/">View Paid Salary</Link>
                <Link to="/">Add Paid Salary</Link>
                
            </div>


        </div>
    )
}