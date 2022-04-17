import React, { useState, useEffect } from 'react'
import "./SideNav.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Supsidenav() {

    return (

        <div>

            <div class="sidebar">

                <Link to="/supmanager/view">View Suppliers</Link>
                <Link to="/supmanager/add">Add Supplier</Link>
                <Link to="/supmanager/add">Supplier History</Link>
            </div>


        </div>
    )
}