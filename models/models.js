'use strict'

//////////////////// SEQUELIZE ////////////////////////////////////////////////////////
 // This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

 // sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js");

//////////////////////////////////////////////////////////////////////////////////

var models = function () {
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

  /////////////////////////////////////////////////////

 ////////////////// PHONE ///////////////////////////
  var phones = sequelize.define("phones", {
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
 })
;
 // Sync with DB
 phones.sync();

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

///////////////////////////////////////////////
// END  CREDENTIALS////////////////////////////
///////////////////////////////////////////////

return {
    addresses: addresses,
    contacts: contacts,
    phones: phones,
    users: users,
    allergies: allergies,
    diseases: diseases,
    medications: medications,
    vitals: vitals,
    pwid: pwid, 
    pw: pw
}
} ();

module.exports = models;