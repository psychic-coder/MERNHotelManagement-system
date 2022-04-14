const router = require("express").Router();
const Employees = require("../models/employees");


//add new employees to the system
router.route("/add").post((req,res)=>{

        const empid = req.body.empid;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const emptype = req.body.emptype;
        const nic = req.body.nic;
        const mobile = req.body.mobile;
        const bank = req.body.bank;
        const branch = req.body.branch;

        const newEmployees = new Employees({
            empid,
            firstname,
            lastname,
            emptype,
            nic,
            mobile,
            bank,
            branch
        })
        //pass employee object to mongodb database(Create function)
        newEmployees.save().then(()=>{
            //function execute if new employee details added to the database
            res.json("New Employee Added.")
        }).catch((err)=>{
            //If error occurs this fuction execute
            console.log(err)
        })
})

//retrive data in employee db
router.route("/retrieve").get((req,res)=>{

    Employees.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
}) 
//update employee details
router.route("/update/:id").put(async(req,res)=>{
    let Emp_id = req.params.id;
    const { empid,firstName,lastname,emptype,nic,mobile,bank,branch} = req.body;

    const updateEmployee = {
        empid,
        firstName,
        lastname,
        emptype,
        nic,
        mobile,
        bank,
        branch
    }

    Employees.findByIdAndUpdate(Emp_id,updateEmployee).then((UpdateLick)=>{
        res.json("Success");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })
})
//delete employee details
router.route("/delete/:id").delete(async(req,res)=>{
    let Emp_id = req.params.id;

    await Employees.findByIdAndDelete(Emp_id).then(()=>{
        res.status(200).send({status: "Employee details Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete details", error: err.message});

    })
})
//get one emp
router.route("/get/:id").get(async(req,res)=>{
    let Emp_id = req.params.id;
    Employees.findById(Emp_id).then((employees)=>{
        res.json(employees)
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get employee details", error: err.message});
    })
})


module.exports = router;