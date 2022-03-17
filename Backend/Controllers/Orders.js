const Order  = require('../Models/Orders');

exports.saveOrder = (req, res) => {
    const {
        items,
        amount,
        email,
        mobileNo,
        address
    } = req.body;

    // create a new Object of the User Model class

    const orderObj = new Order({
        items :items,
        amount :amount,
        email :email,
        mobileNo :mobileNo,
        address:address
    });

    // we will call a save method on this object
    orderObj.save().then(result => {
        res.status(200).json({
            message: "Order saved successfully !!",
            order: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}

exports.getOrderByEmail=(req,res) =>{
    const userEmail = req.params.userEmail;
    Order.find({
        email: userEmail
    }).then(result => {
        res.status(200).json({
            message: `Orders fetched for user ${userEmail}`,
            Orders: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}