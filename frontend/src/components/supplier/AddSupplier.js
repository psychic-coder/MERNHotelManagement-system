import React, { useState, useEffect } from 'react';
import SoloAlert from 'soloalert'
import axios from 'axios';
import validation from 'validator'
import '../Home.css'



export default function AddSupplier() {

    const [isLoading, setLoading] = useState(false);

    const [supname, setSupname] = useState("");
    const [email, setEmail] = useState("");
    const [contactnumber, setContactnumber] = useState("");
    const [nic, setNic] = useState("");
    const [category, setCategory] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [companyaddress, setCompanyaddress] = useState("");
    
    async function submitData(e) {
        setLoading(true)
        try {
            e.preventDefault();
            if (!supname || !email|| !contactnumber || !nic || !category || !companyname || !companyaddress) {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "Please fill all fields",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },
                });
            } else {
                const newDetails = {
                    supname, email, contactnumber, nic, category , companyname , companyaddress
                }
                
    const data =  (await axios.post("http://localhost:5001/supplier/", newDetails)).status
                if (data === 200) {
                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "New supplier added successfully",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {

                        },
                    });
                }

            }
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    function clear() {

    }
    return (
        <div className="content">
            <h3>Add Supplier</h3><hr />

            <form class="row g-3 needs-validation" id="inputForm2" novalidate>
                <div class="col-md-6 position-relative">
                    <label for="validationTooltip01" class="form-label">Name</label>
                    <input type="text" class="form-control" id="validationTooltip01" required
                        onChange={(e) => { setSupname(e.target.value) }} />
                </div>
                <div class="col-md-6 position-relative">
                    <label for="validationTooltip01" class="form-label">Email</label>
                    <input type="text" class="form-control" id="validationTooltip01" required
                        onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div class="col-md-6 position-relative">
                    <label for="validationTooltip01" class="form-label">Contact Number</label>
                    <input type="text" class="form-control" id="validationTooltip01" required
                        onChange={(e) => { setContactnumber(e.target.value) }} />
                </div>

               
                <div class="col-md-6 position-relative">
                    <label for="validationTooltip01" class="form-label">Nic</label>
                    <input type="text" class="form-control" id="validationTooltip01" required
                        onChange={(e) => { setNic(e.target.value) }} />
                </div>

              

                <br />
                <div class="col-md-6 position-relative">
                    <label for="validationTooltip04" class="form-label">Category</label>
                    <select class="form-select" id="validationTooltip04" required onChange={(e) => { setCategory(e.target.value) }}>
                        <option selected disabled value="">Choose...</option>
                        <option>Food</option>
                        <option>Furniture</option>
                    </select>
                </div>
              
               
                <div class="col-md-6 position-relative">
                    <label for="validationTooltip03" class="form-label">Company Name</label>
                    <input type="textarea" class="form-control" id="validationTooltip03" required
                        onChange={(e) => { setCompanyname(e.target.value) }} />
                </div>
                <div class="col-md-6 position-relative">
                    <label for="validationTooltip03" class="form-label">Company Address</label>
                    <input type="text" class="form-control" id="validationTooltip03" required
                        onChange={(e) => { setCompanyaddress(e.target.value) }} />
                </div>
                

                <div class="col-12" style={{ marginTop: "50px", marginLeft: "65%" }}>
                    <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal" onClick={(e) => { clear(e) }}><i class="fa fa-ban"></i> Clear form</button>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-primary" onClick={(e) => { submitData(e) }}
                        disabled={isLoading} ><i class="fa fa-file-export"></i>  {isLoading ? 'Sending..' : 'Submit form'}</button>
                </div>

                
            </form>

        </div>
    )
}