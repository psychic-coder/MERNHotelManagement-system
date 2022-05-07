const router = require("express").Router();

const Customer = require("../../models/customer/customerModel");


//Register Customer

router.post('/',async(req,res)=>{
    try{
        const savedCustomer = await Customer.create(req.body);
        res.status(200).send({data : savedCustomer});

    }catch(err){
        res.status(500).send({status : err});
    }
})



//Login
router.post('/login',async(req,res)=>{
    try{
        console.log(req)
        let customer =  Customer.find( { cusemail: req.cusemail})
       res.status(200).send({msg : customer});
    }catch(err){
        res.status(500).send({status : err});
    }
})




module.exports = router;


