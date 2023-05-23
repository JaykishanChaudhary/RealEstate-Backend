const router = require('express').Router();
const PropertyDetailsModel = require("../models/property-model")
const bodyParser = require("body-parser");

router.use(bodyParser.json())

router.post("/newprop",(req,res)=>{
    // const {img, ...newProperty} =  PropertyDetailsModel({
    //     propertyType: req.body.propertyType,
    //     price: req.body.price,
    //     propertyAge: req.body.propertyAge,
    //     propertyDiscription: req.body.propertyDiscription,
    //     negotiable: req.body.negotiable,
    //     ownership: req.body.ownership,
    //     propertyApproved: req.body.propertApproved,
    //     bankLoan: req.body.bankLoan,
    //     length: req.body.length,
    //     breadth: req.body.breadth,
    //     totalArea: req.body.totalArea,
    //     areaUnit: req.body.areaUnit,
    //     noOfBHK: req.body.noOfBHK,
    //     noOfFloor: req.body.noOfFloor,
    //     attached: req.body.attached,
    //     westernToilet: req.body.westernToilet,
    //     furnished: req.body.furnished,
    //     carParking: req.body.carParking,
    //     lift: req.body.lift,
    //     electricity: req.body.electricity,
    //     facing: req.body.facing,
    //     name: req.body.name,
    //     mobile: req.body.mobile,
    //     postedBy: req.body.postedBy,
    //     saleType: req.body.saleType,
    //     featuredPackage: req.body.featuredPackage,
    //     PPDPackage: req.body.PPDPackage,
    //     image: req.body.address,
    //     email: req.body.email,
    //     city: req.body.city,
    //     area: req.body.area,
    //     pincode: req.body.pincode,
    //     address: req.body.address,
    //     landmark: req.body.landmark,
    //     latitude: req.body.latitude,
    //     longitude: req.body.longitude,
    //     views: 0, // default is 0
    //     Status: "Unsold", // default is unsold
    //     daysLeft: 10, //Defalt is 10
    // })
    const {img, ...newProperty} = req.body

    const post = new PropertyDetailsModel({
        ...newProperty,
        image: img,
        views: 0, // default is 0
        Status: "Unsold", // default is unsold
        daysLeft: 10, //Defalt is 10
    })

    post.save().then((data)=>{
        console.log(data);
        res.status(200).json({
            status:'property added',
            result:data
        })
    })
    .catch((e)=>{
        console.log(e.message)
        res.send(e.message)
    })

})


module.exports = router