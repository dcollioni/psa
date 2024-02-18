## Technical assessment - take home 

We are a very practical team at Health Care Informed and this extends to the way that we work with you to find out if this team is a great fit for you. We want you to come away with a great understanding of the work that we actually do day to day and what it is like to work with us.

So instead of coding at a whiteboard with someone watching over your shoulder under high pressure, which is not a thing we often do, we instead discuss code that you have written previously when we meet face to face.

The Brief:

_“A Health Care Informed customer needs to be able to_ **_find patient visit information_** _at one of their hospitals. Create a simple web application using React, Typescript, C# that allows a customer to_ **_search_** _patient/hospital visit information and display results. The application should have a very simple styled UX, some simple API’s and leverages the data store and sample data provided”._

**Guidelines**

- Don’t spend too long on it (~4 hours) and keep things simple. This is not a time limit just a guideline.
- Fork the repo into your own GitHub Repository. I've provided boiler plate with an in memory database and test data to help you move faster.
- Add functionality to the [PatientService](https://github.com/vinnyhci/hci-take-home-interview-v2/blob/main/PatientAdministrationSystem.Application/Services/PatientsService.cs)/[IPatientService](https://github.com/vinnyhci/hci-take-home-interview-v2/blob/main/PatientAdministrationSystem.Application/Services/Interfaces/IPatientsService.cs) (app/business layer) and PatientsRepository (data layer) that query the HCIDataContext (database) and add your API contracts to the [PatientsController](https://github.com/vinnyhci/hci-take-home-interview-v2/blob/main/PatientAdministrationSystem/Controllers/PatientsController.cs). Please define strong interfaces here, return types etc.
- Don’t worry about:
  - Authentication
  - Adding tests
- Do focus on:
  - Solve the customer problem in any way you like
  - The deliverable is well packaged and easy for us to test
  - Clearly communicate any assumptions you want to make, shortcuts you take etc.
  - Spend your time in the right places based on your strengths - e.g. take shortcuts and document them if it makes sense to
  - Share a screen recording with a short demo of the application (max 5 mins - can use [Loom](https://www.loom.com/)) OR deploy to Azure [free tier services](https://azure.microsoft.com/en-us/pricing/free-services) so we can see what it looks like. Whatever works better for you.
- What I'm mainly looking for:
  - You structure your front and back end code well so it's clean, modular & well organised. Attention to detail important.
  - How do the well do the components talk to each other on FE, API's and BE structure. These interfaces are important.
  - You understand the customer requirement and make sensible trade offs for feature quality versus **keeping it simple**.
  - How easy is it for us to test and run
- Think of this like an open source project. Create a repo on Github, use git for source control, and use README.md to document what you built for the newcomer to your project, create PR’s etc like you normally would.

**Next:**

- When you’re done, **send us a link to the Github project and the Azure link / Loom** to vinny.lawlor@hci.care - it will be reviewed by engineering and the CTO within 2 days.

# Solution

## API

## Structure

- The API contains the following endpoints:

  - GET /api/patients
  - GET /api/patients/{patientId}
  - GET /api/patients/{patientId}/visits

## Improvements

- The API could have a connection to a Database

- The API could provide endpoints to create, update and delete entities

- Could have unit and integration tests implemented

## UI

The frontend app has been bootstrapped with Create React App as it generates a simple and "pure" frontend-only app structure.

Instructions on how to start and build it can be found on the [app README](/UI/app/README.md).

## Structure and Assumptions

- The app spins up a couple of known routes using react-router-dom:

  - /
  - /patients
  - /patients/:id/visits

- The pages can be found on /src/components/pages and are pure React components that use hooks for setting state and making requests to the API

- Styles are created using SASS and can be loaded as CSS modules

- Entities returned by the API are mapped in the /src/entities folder

- Common styles can be found on /src/components/common

- The app expects the API to be up and running at http://localhost:5272/api

## Improvements

- The app could have a redux store to save the list of patients

- This would be more important when we have user sessions and high level state to control - so for now it is fine without redux

- Could have unit and snapshot tests implemented

- The API calls could be refactored into a separate class or util functions to handle token and to streamline the error handling, etc

- Could be using a library of components as the project grows - not necessary for now

- For a more complete example of React App using redux and making other requests to an API, please check out my other repository: https://github.com/dcollioni/owlbooks

## Loom

https://www.loom.com/share/d4733f66217a472699cf0ee36f207e0a
