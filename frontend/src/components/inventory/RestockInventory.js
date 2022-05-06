import React, { useState, useEffect } from 'react'
import SoloAlert from 'soloalert'
import { useParams } from "react-router";
import axios from 'axios';

export default function RestockInventory() {
    return (
        <div class="content">
            <h3>Restock Inventory</h3><hr />

            <div className="bodyContent">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Item ID</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Remaining Items</th>
                            <th scope="col">Restock Level</th>
                            <th scope="col">Restock Amount</th>
                            <th scope="col"> </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td class="text-dark">Item ID</td>
                        <td class="text-dark">Item Name</td>
                        <td class="text-dark"> Remaining Items</td>
                        <td class="text-dark"> Remaining Items</td>
                        <td class="text-dark">Restock Level</td>
                        <td class="d-flex">
                            <input class="form-control me-2  bg-light text-dark" type="text" placeholder="Add Restock Amount" aria-label="Search" />
                            <button class="btn btn-outline-success  bg-dark text-light" type="submit">ADD</button>
                        </td>
                        </tr>
                    </tbody>

                </table>

            </div>


        </div>

    )
}
