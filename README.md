![license badge](https://img.shields.io/badge/license-MIT_License-blue)
  # Blog Waffle
  ## Description
  Blog Waffle is a simple website which allows users to create accounts, create posts, and leave comments on existing posts.
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation

First install Node.js, and MySQL (<a href="https://nodejs.org/en/download/" target="_blank">Link to install Node.js</a>) (<a href="https://www.mysql.com/downloads/" target="_blank">Link to install MySQL</a>) Install the required dependencies using `npm i`. Next, you must run the schema.sql file in order to create the database. In the root directory of the repository, start an instance of MySQL use the following command to create the database:

`SOURCE ../db/schema.sql`

Then in the terminal use the next command:

`node ./seeds`

The database has now been seeded and is ready to use.

You must also rename the file named 'variables.env' to '.env'. Inside that file, you must insert your MySQL user name into the variable 'SQL_user'. You must also insert your MySQL password into the variable SQL_password. Ensure that 'localhost' is the correct MySQL host name for your environment.

That's it! You're ready to use Blog Waffle!
  
  ## Usage
  Once the required dependencies are installed, simply use the terminal command 'npm start' in the main directory to ininitialize Blog Waffle. By default, the server will run at http://localhost:5001/
  
  ## Contributing
  Anybody can use this application, and modify it.
  ## Tests
  After seeding the database and initializing the application, navigate to the "Log In / Sign Up" page, then create an account. After creating an account, navigate to the dashboard. You should see your username at the top of the page, and have the option to create a post. Create a post, then navigate to the home page. You should see your new post!
  
  ## Questions
  Github username : <a href="https://github.com/shaqrivera">shaqrivera</a>
  
  If you have any questions, please submit inquiries to <a href="mailto:shaq.rivera@gmail.com">shaq.rivera@gmail.com</a>.
  
  ## License
  This project is using the MIT License. For more information, refer to following link.
    [MIT License](https://spdx.org/licenses/MIT.htm)
  ---