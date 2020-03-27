# RePay
RePay 

**Username Key**  
{Full Name} (UP NUMBER) = {Git username/s}  
  
Harry Jennings (UP898888) = Br1se and hjennings431.  
Harry Jones (UP907723) = BattlePope99.  
Paul Collins (UP895823) = PaulCollins99.  
Muhammad Shuaibu (UP820449) = Muneerr.  
Cameron Maguire (UP895937) = cameronmaguire.  
Lara Barnes (UP900264) = larabarnes.  

# Testing Documentation

For testing of the final product we will be implementing a module called mocha. This is a unit testing module that will integrate with a service called travis. Travis.ai is an automated service that runs your test on a vm whenever you commit on github. This would mean any new progress would automatically be check to make sure it does not break any previous code before it gets meerged into the master branch and distributed.

An example test cam be found in backend testscript.js. This does not test anything within the program as testing frontend javascript is rarely done as it is hard to implement due to the interaction with the DOM. Tests will be created for the backend, mainly to check get requests and their responses between the server and the database

For user testing we would roll out the app to both users who completed previous surveys and interviews, and users who had not. This is to see if we met the excpectations of the potential users

# Coding Documentation

Javascript documentation can be found in REPay/frontend/scripts/out. This is generated using JSDoc module. This module takes the comments that have been implemented into the Javascripts and builds a clean html page based on them. This allows the viewer to click through the functions and view all parameters and uses.

Signing out from google is not implemented in this app. This is due to the way that google handles logging out. Google believes a third party app should not force Google to clear its session. The end user must do this themselves.

The database can be found in DatabaseSQL and populateDatabase.txt