const router = require("express").Router();
const Employees = require("../../models/emp-manager/employees");


//add new employees to the system

router.post('/',async(req,res)=>{
    try{
     
        const savedEmployees = await Employees.create(req.body);
        res.status(200).send({data : savedEmployees});

    }catch(err){
        res.status(500).send({status : err});
    }
})


router.get('/', async(req,res)=>{
    try{
        const allEmployees = await Employees.find();
        res.status(200).send({data : allEmployees});
    }catch(err){
        res.status(500).send({data : err});
    }
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

//Test emp route
router.route("/test").get((req,res)=>{
    res.json("Employee function working");
});
module.exports = router;