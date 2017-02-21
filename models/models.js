'use strict'

//////////////////// SEQUELIZE ////////////////////////////////////////////////////////
 // This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

 // sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js");

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
////////////////// USER //////////////////////////////
/////////////////////////////////////////////////////

/////////////////// ADDRESSES ///////////////////////
 var addresses = sequelize.define("address", {
     uid: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true
     },
     address: {
         type: Sequelize.STRING,
         allowNull: false
     },
     city: {
         type: Sequelize.STRING,
         allowNull: false
     },
     state: {
         type: Sequelize.STRING,
         allowNull: false
     },
     zip: {
         type: Sequelize.STRING,
         allowNull: false
     }
 }, {
     timestamps: false
 });

 // Sync with DB
 addresses.sync();

 module.exports = addresses;
 //////////////////////////////////////////////////////

 //////////////// CONTACTS ////////////////////////////
  var contacts = sequelize.define("contacts", {
     uid: {
         type: Sequelize.INTEGER,
         allowNull: false,

     },
     cid: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true
     },
     cname: {
         type: Sequelize.STRING,
         allowNull: false
     },
    cphone: {
         type: Sequelize.STRING,
         allowNull: false
     }
 }, {
     timestamps: false
 });

 // Sync with DB
 contacts.sync();

 module.exports = contacts;
 /////////////////////////////////////////////////////

 ////////////////// PHONE ///////////////////////////
  var phone = sequelize.define("phone", {
     uid: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true
     },
     phone: {
         type: Sequelize.STRING,
         allowNull: false
     }
 }, {
     timestamps: false
 });

 // Sync with DB
 phone.sync();

 module.exports = phone;
//////////////////////////////////////////////////////

//////////////////// USERS ///////////////////////////
var users = sequelize.define("users", {
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    uname: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    joined_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }
}, {
    timestamps: false
});

// Sync with DB
users.sync();

module.exports = users;
//////////////////////////////////////////////////////

///////////////////////////////////////////////////////
/////////////////// END OF USER TABLES ////////////////
///////////////////////////////////////////////////////


//////////////////////////////////////////////////////
//////////////// MEDICAL /////////////////////////////
//////////////////////////////////////////////////////

//////////////// ALLERGIES //////////////////////////
var allergies = sequelize.define("allergies", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    allergie: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
 // Sync with DB
allergies.sync();
module.exports = allergies;
///////////////////////////////////////////////////

/////////////// DISEASEAS ///////////////////////////
var diseases = sequelize.define("diseases", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    disease: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
 // Sync with DB
diseases.sync();
module.exports = diseases;
/////////////////////////////////////////////////////

//////////// MEDICATIONS ////////////////////////////
var medications = sequelize.define("medications", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    medication: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
 // Sync with DB
medications.sync();
module.exports = medications;
/////////////////////////////////////////////////////

////////////////// VITALS //////////////////////////
var vitals = sequelize.define("vitals", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    height: {
        type: Sequelize.STRING,
        allowNull: false
    },
    weight: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bldType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthdate: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});
// Sync with DB
vitals.sync();
module.exports = vitals;
/////////////////////////////////////////////////////
/////////// END MEDICAL //////////////////////////////
/////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////// CREDENTIALS ////////////////////////
/////////////////////////////////////////////////////
var pwid = sequelize.define("pwid", {
    pwid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});
 // Sync with DB
pwid.sync();
module.exports = pwid;

//////////////////////////////////////////////
//////////////////////////////////////////////

var pw = sequelize.define("pw", {
    pwid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    pw: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
 // Sync with DB
pw.sync();
module.exports = pw;
///////////////////////////////////////////////
// END ////////////////////////////////////////
///////////////////////////////////////////////
