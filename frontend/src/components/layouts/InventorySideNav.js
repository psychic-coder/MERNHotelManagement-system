import React, { useState, useEffect } from 'react'
import "./SideNav.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Inventorysidenav() {

    return (

        <div>

            <div class="sidebar">
                <Link to="/inventorymanager/view">View Inventory</Link>
                <Link to="/inventorymanager/add">Add Inventory</Link>
                
            </div>


        </div>
    )
}