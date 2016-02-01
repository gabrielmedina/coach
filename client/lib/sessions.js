// lib sessions

if(Accounts._resetPasswordToken){
  Session.set('resetPassword', Accounts._resetPasswordToken);
}
