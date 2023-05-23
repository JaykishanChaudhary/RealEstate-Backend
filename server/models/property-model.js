const mongoose = require("mongoose")
const propertyschema = new mongoose.Schema({
    propertyType: {
        type: String || null,
        require: [true, "Please Select Property Type"]
    },
    price: {
        type: Number||null,
        require: [true, "Please Add Price"]
    },
    propertyAge: {
        type: String || null,
        require: [true, "Please Select Property Age"]
    },
    propertyDiscription: {
        type: String || null,
        require: [true, "Please Add Property Discription"]
    },
    negotiable: {
        type: String || null,
        require: [true, "Please Select Negotiable Type"]
    },
    ownership: {
        type: String || null,
        require: [true, "Please Select Ownership Type"]
    },
    propertyApproved: {
        type: String || null,
        require: [true, "Please Select Property Approved Type"]
    },
    bankLoan: {
        type: String || null,
        require: [true, "Please Select Bank Loan Type"]
    },
    length: {
        type: Number || null,
        require: [true, "Please Add Length"]
    },
    breadth: {
        type: Number|| null,
        require: [true, "Please Add Breadth"]
    },
    totalArea: {
        type: Number || null,
        require: [true, "Please Add Total Area"]
    },
    areaUnit: {
        type: String || null,
        require: [true, "Please Add Area Unit"]
    },
    noOfBHK: {
        type: String || null,
        require: [true, "Please Select Number of BHK"]
    },
    noOfFloor: {
        type: String || null,
        require: [true, "Please Select Number of Floor"]
    },
    attached: {
        type: String || null,
        require: [true, "Please Select Attached Type"]
    },
    westernToilet: {
        type: String || null,
        require: [true, "Please Select Western Toilet Type"]
    },
    furnished: {
        type: String || null,
        require: [true, "Please Select Furnished Type"]
    },
    carParking: {
        type: String || null,
        require: [true, "Please Select Car Parking Type"]
    },
    lift: {
        type: String || null,
        require: [true, "Please Select Lift Type"]
    },
    electricity: {
        type: Number || null,
        require: [true, "Please Add Electricity Phase"]
    },
    facing: {
        type: String || null,
        require: [true, "Please Select Facing Type"]
    },
    name: {
        type: String || null,
        require: [true, "Please Select Owner Type"]
    },
    mobile: {
        type: Number || null,
        require: [true, "Please Add Mobile Number"]
    },
    postedBy: {
        type: String || null,
        require: [true, "Please Select posted By Type"]
    },
    saleType: {
        type: String || null,
        require: [true, "Please Select Sale Type"]
    },
    featuredPackage: {
        type: String || null,
        require: [true, "Please Select Featured Package Type"]
    },
    PPDPackage: {
        type: String || null,
        require: [true, "Please Select PPD Package Type"]
    },
    image: {
        type: String || null,
        require: true
    },
    email: {
        type: String || null,
        require: [true, "Please Add Email"]
    },
    city: {
        type: String || null,
        require: [true, "Please Select City"]
    },
    area: {
        type: String || null,
        require: [true, "Please Select Area"]
    },
    pincode: {
        type: String|| null,
        require: [true, "Please Select Pincode"]
    },
    address: {
        type: String || null,
        require: [true, "Please Add Address"]
    },
    landmark: {
        type: String|| null,
        require: [true, "Please Add Landmark"]
    },
    latitude: {
        type: Number|| null,
        require: [true, "Please Add Latitude"]
    },
    longitude: {
        type: Number|| null,
        require: [true, "Please Add Longitude"]
    },
    views: String,
    Status: String,
    daysLeft: String
});

const PropertyDetailsModel = mongoose.model('PropertyDetailsModel', propertyschema);

module.exports = PropertyDetailsModel;