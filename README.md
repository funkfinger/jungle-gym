# jungle-gym

[ ![Codeship Status for funkfinger/jungle-gym](https://codeship.com/projects/e3688bc0-8ddb-0132-3f2c-5691319bff63/status?branch=master)](https://codeship.com/projects/60797)



## Notes:
NPM is going to be used as both a package / asset manager and as a build tool. See https://github.com/keithamus/npm-scripts-example and http://blog.kewah.com/2014/npm-as-a-front-end-package-manager/ - package.json has some build tasks in it.

### npm!

Trying out _npm_ as a 

1. node package manager 
2. front-end package manager (replaces bower)
3. build tool (replaeces grunt / gulp)

If this works out, great, if not, I'll fall back to whatever it is replacing that may or may not be better...

#### run tests:

    npm run test
    
#### build:

    npm run build
    
#### deploy:

using Codeship for deployment. Testing that now

Codeship / Heroku were not playing nice together- finally saw this in a Heroku doc:

>  The application is now deployed. Ensure that at least one instance of the app is running:
>  
>      $ heroku ps:scale web=1

Once I ran that, all was peachy...
    
    



