const mongoose = require('mongoose');
const usersRep = mongoose.model('usersRep');
//list
exports.listusersRep= async () => {
      const res = await usersRep.find({}, 'name username ');
      return res;
  };
  
  // create
  exports.createusersRep= async data => {
      const user= new usersRep(data);  
      await user.save();
  };

  // update
  exports.updateusersRep = async (id, data) => {
    await usersRep.findByIdAndUpdate(id, {
      $set: data
    });
  };

  //delete
  exports.deleteusersRep = async id => {
    await usersRep.findByIdAndDelete(id);
  };