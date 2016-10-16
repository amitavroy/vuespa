# Vue 2.0 Single page application

This is a RND application built with Vue.js 2.0 as frotn end. The back end for 
now is developed using Laravel 5.3. The releases are developed as per the 
tutorials that I have created on Youtube. 

The authentication mechanism is OAuth available with Passport along with Laravel. 
Currently, the password grant type is used to validate the **User** and assign the
**Access token** and **Refresh token**.

## Authorization token
After authenticating the **User** at the following url /oauth/token, all subsequent 
urls will require the Authorization header. Below is the format in which the **access_token**
needs to be supplied in order for the oauth authentication.  

    Authorization: Bearer [access_token] 

