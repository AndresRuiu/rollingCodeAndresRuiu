const {Router} = require('express');
const router = Router();

router.get("/getProducts", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a getProducts"});
});

router.get("/getOneProducts/:id", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a getOneProducts"});
});

router.put("/updateProducts/:id", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a updateProducts"});
});

router.post("/createProducts/", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a createProducts"});
});

router.delete("/deleteProducts/:id", (req, res)=> {
    res.status(200).json({msg:"Realizaste una peticiona a deleteProducts"});
});

module.exports = router;