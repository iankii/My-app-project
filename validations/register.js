const  validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateRegiterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if(!validator.isLength(data.name, { min: 2, max: 30 })) errors.name = 'BED: Name must be between 2 to 30 chars';
  if(!validator.isEmail(data.email)) errors.email = 'BED: Email is invalid';
  if(!validator.isLength(data.password, {min: 6, max: 30})) errors.password = 'BED: Password must have 6 chars';
  if(!validator.equals(data.password, data.password_confirm)) errors.password_confirm = 'BED: Password and Confirm Password must match';
  if(!validator.isLength(data.password_confirm, {min: 6, max: 30})) errors.password_confirm = 'BED: Password must have 6 chars';
  
  if(validator.isEmpty(data.name)) errors.name = 'BED: Name field is required';
  if(validator.isEmpty(data.email)) errors.email = 'BED: Email is required';
  if(validator.isEmpty(data.password)) errors.password = 'BED: Password is required';
  if(validator.isEmpty(data.password_confirm)) errors.password_confirm = 'BED: Password is required';

  return {
    errors, isValid: isEmpty(errors)
  }
}