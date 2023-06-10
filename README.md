# Phase-3-client-job-site

## Installation 
Being this repository is strictly the front end 'NPM install' is all that's required, however in order to access the backend, git clone the [phase-3-sinatra-react-project](https://github.com/G3o-R/phase-3-sinatra-react-project) repository as well.

## General Information

State involving "companyData" is held within companies.js in the Context folder. The reason it's not held in the app is to avoid prop drilling when deleting or editing a job. Excluding when editing or deleting a job, all changes to state are still handled in within the App.js file. Editing and deleting of a job is handled within EditJob.js file.

The Home route soley displays every job available. Double clicking on any of the job cards presents a form to allow editing of any given attribute of the job or the opporunity to delete the job entirely. Company Lists route displays the logo of the given company and clicking on the card displays only the jobs associated with that company. Within the nested route of Company Lists lies the "delete company" button at the very bottom. Create Company/Job route allows you to create a company or job. Two forms are available one designated for the Jobs and the other of course for companies.

## Technologies Used:

* Javascript/React
* CSS/SASS
* HTML