const {Router} = require('express');
const router = Router();

router.get("/getUsers", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a getUsers"});
});

router.get("/getOneUsers/:id", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a getOneUsers"});
});

router.put("/updateUsers/:id", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a updateUsers"});
});

router.post("/createUsers/", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a createUsers"});
});

router.delete("/deleteUsers/:id", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a deleteUsers"});
});

module.exports = router;