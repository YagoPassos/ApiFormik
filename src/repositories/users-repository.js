const mongoose = require('mongoose');
const Users = mongoose.model('Users');
//list
exports.listUsers= async () => {
      const res = await Users.find({}, 'name username ');
      return res;
  };
  
  // create
  exports.createUsers= async data => {
      const user= new Users(data);  
      await user.save();
  };

  // update
  exports.updateUsers = async (id, data) => {
    await Users.findByIdAndUpdate(id, {
      $set: data
    });
  };

  //delete
  exports.deleteUsers = async id => {
    await Users.findByIdAndDelete(id);
  };