# ConnectedTo Project

## Overview

The ConnectedTo app is a LinkedIn clone that focusing primarily on building out the user profile page. The profile page is a crucial aspect of any professional networking platform, as it showcases the user's professional background, educations, and experience.

## Features

* **User Authentication:** Users are allowed to signup or login in to an account that takes in an `email` and `password`.
* **Basic Profile Information:** After login/signup, user can create a basic profile page information including their `firstName`, `lastName`, `heading`, and `openToWork`. After profile creation `currentUser` is allowed to modify their own profile information in the profile page.
* **Education profile:** `currrentUser` is allowed to add, modify, and delete their `education` in the profile page, `education` data takes in `schoolName`, `degreeName`, `description`, `startYear`, and `endYear`. Users are allowed to add multiple education on their profile pages.
* **Experience profile:** `currrentUser` is allowed to add, modify, and delete their `experience` in the profile page, `experience` data takes in `companyName`, `position`, `description`, `startYear`, and `endYear`. Users are allowed to add multiple experience on their profile pages.
* **Visit other user's profile page:** In the side bar, user can visit other user's profile page to see other's basic profile, education, and experience.

## Technologies Used
* Frontend: HTML, CSS, JavaScript, React.js, Redux

* Backend: Ruby on rails

* Authentication: bcrypt

* Database: PostgreSQL Database

* Deployment: Render.com

## Local Setup Instruction

1. Clone the repository `git clone https://github.com/ziyanwang1105/full-stack-project-linkedin-clone.git`
2. Install backend dependency `bundle install`
3. Database migration `rails db:migrate`
4. Setup seeding for the website `rails db:seed`
5. Run the application `rails s`

## Active Page Link

The website is hosting at `render.com`. The active link is below:

[ConnectedTo](https://full-stack-project-linkedin-clone.onrender.com)
