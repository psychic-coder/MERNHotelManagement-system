import React, { useState, useEffect } from 'react'
import "./SideNav.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Roomsidenav() {

    return (

        <div>

            <div class="sidebar">
                <Link to="/roommanager/view">View Rooms</Link>
                <Link to="/roommanager/add">Add Room</Link>
                
            </div>


        </div>
    )
}