import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import SoloAlert from 'soloalert'
import validation from 'validator'
import jspdf from 'jspdf'
import "jspdf-autotable"



export default function ViewAllSupplierHistoryRecords() {

    const [loaderStatus, setLoaderStatus] = useState(false);
    const [tebleStatus, setTableStatus] = useState(true);


    const [search, setsearch] = useState("");
    const [filtered, setfiltered] = useState([]);

    const [AllSupplierHistoryRecords, setAllSupplierHistoryRecords] = useState([]);





    //This useEffect function used to get all suppliers data
    useEffect(() => {
        async function getDetails() {
            try {
                const result = await (await axios.get("http://localhost:5001/supplier//")).data.data
                setAllSupplierHistoryRecords(result);
                setLoaderStatus(true)
                setTableStatus(false)
            } catch (err) {
                console.log(err.message)
            }
        }

        getDetails();
    })


    //This useEffect method is used to perform a searching function
    useEffect(() => {
        setfiltered(
            AllSupplierHistoryRecords.filter(items => {
                return items.supid.toLowerCase().includes(search.toLowerCase())
                    || items.action.toLowerCase().includes(search.toLowerCase())
                    
                    
            })
        )

    }, [search, AllSupplierHistoryRecords])


    //This function used to generate a pdf
    function generatePDF(tickets) {
        const doc = new jspdf();
        const tableColumn = ["Sup ID","Action", "Date", "Amount"];
        const tableRows = [];

        tickets.slice(0).reverse().map(ticket =>{
            const ticketData = [
                ticket.supid, 
                ticket.action,
                ticket.date,
                ticket.amount,
                
            ];
            tableRows.push(ticketData);
        });

        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        doc.text("Supplier-History-Report", 14, 15).setFontSize(12);
        doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
        doc.save(`Supplier-History-Report_${dateStr}.pdf`);

    }


    return (
        <div class="content">

            <div class="d-flex justify-content-center" >
                <div class="spinner-border" role="status" style={{ width: "10rem", height: "10rem", marginTop: "100px" }} hidden={loaderStatus}>
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <div hidden={tebleStatus}>{/* This part used to get all users data into table */}
                <nav className="navbar bg-white" >
                    <div className="container-fluid">
                        <h3>Supplier History Records</h3>
                        <button type="button" class="btn btn-outline-danger" id="pdfButton" onClick={(e) => { generatePDF(AllSupplierHistoryRecords) }}><i className="fa fa-file-pdf"></i>  PDF</button>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                                onChange={e => { setsearch(e.target.value) }} />
                        </form>
                    </div>
                </nav><hr />

                <div className="bodyContent">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr> 
                                <th scope="col">Sup ID</th>
                                <th scope="col">Action</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>S001</td>
                            <td>created</td>
                            <td>2022.04.12</td>
                            <td>20000.00</td>
                        </tr>
                        <tr>
                            <td>S002</td>
                            <td>perchase order</td>
                            <td>2021.12.12</td>
                            <td>30000.00</td>
                        </tr>
                        <tr>
                            <td>S003</td>
                            <td>purchase order payment</td>
                            <td>2022.01.30</td>
                            <td>10000.00</td>
                        </tr>
                        <tr>
                            <td>S004</td>
                            <td>created</td>
                            <td>2022.02.20</td>
                            <td>40000.00</td>
                        </tr>
                        <tr>
                            <td>S005</td>
                            <td>purchase order receive</td>
                            <td>2022.04.12</td>
                            <td>11000.00</td>
                        </tr>

                       

                        

                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}