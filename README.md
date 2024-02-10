## Taskify: Streamline Task Management with SurveySparrow Integration
Taskify is a task management application that seamlessly integrates SurveySparrow with Google Tasks, allowing users to convert survey responses into actionable tasks effortlessly. Whether you're a project manager, a customer support representative, or a small business owner, Taskify empowers you to stay organized, productive, and on top of your tasks.The Task Creation Automation for Survey Responses project aims to automate the process of creating tasks on Google Tasks based on the responses received from surveys. By integrating with the Google Tasks API, this solution streamlines task management, allowing organizations to efficiently address feedback and take necessary actions.


**Features**

**SurveySparrow Integration:** Connect your Taskify account to surveysparrow and automate the process of googletask creation onsubmission of surveys.

**Effortless Task Creation:** Convert survey responses into tasks in Google Tasks with just a few clicks.

**Real-time Feedback and Notifications:** Receive real-time feedback and notifications throughout the task creation process.

**Google Tasks Integration:** Seamlessly create tasks in Google Tasks and manage them efficiently.



Installation
Clone this repository to your local machine:
git clone https://github.com/Shyam-Sunder-M/SurverySparrow-GoogleTask-Integration.git

cd SurverySparrow-GoogleTask-Integration

Inital requirements
Install NVM:
NVM (Node Version Manager) is a tool that allows you to easily manage multiple versions of Node.js on your system. Here are the steps to install NVM

ON MAC OS:
Install brew using the commands given below. If you have already installed it, please skip this step.

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

To Verify the installation

brew --version

Install NVM via brew

brew install nvm

Adding NVM to the shell profile. Follow the procedures in the image given below.

nvm-installation

ON WINDOWS OS:
Installing Chocolatey package manager.
Launch Windows Powershell in Administrator mode.

Run the below command to install chocolatey.

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

If you face the issue - running the scripts is disabled on the system, run the following command Set-ExecutionPolicy RemoteSigned on the windows powershell or command prompt in administrator mode.

Verify Chocolatey installation using the command given below. Verify NVM installation

choco -v

Install NVM through the Chocolatey package manager.

choco install nvm

Install via installers

Download the NVM Setup from here and Complete the installation process using the steps given here.

ON UBUNTU:
If you don’t have curl installed already, install it.

sudo apt-get install curl

Run the NVM installation script as shown below

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

The script clones the nvm repository to ~/.nvm, and attempts to add the source lines from the snippet below to the correct profile file (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

When faced with any issues, follow the instructions given here For more details, refer to

VERIFY NVM INSTALLATION
nvm --version

Install Node:
To install Node.js 18 via nvm, follow the given steps.

nvm install 18

To use Node.js 18
nvm use 18

To verify that the node is installed correctly, run the following commands
node –-version

Install Mkcert

Mkcert is a tool for making locally-trusted development certificates. This allows for installing SSL certificate, thereby running the local SSDK application securely.
Mkcert does not have native support in Firefox. To proceed with your development work, you have the choice to either bypass security measures or manually integrate the certificate into your browser settings.

MACOS
brew install mkcert

LINUX
apt install mkcert

WINDOWS - OPEN COMMAND PROMPT OR WINDOWS POWERSHELL IN ADMINISTRATOR MODE AND RUN THE BELOW COMMAND.
choco install mkcert

Install the sparrow CLI:
To install the latest CLI version, run the following command.
npm install https://ssdk.surveysparrow.dev/ssdk.tgz -g

Run the following command to verify the CLI installation.
 ssdk version


**Functionality**

The script listens for survey submissions and triggers the task creation process.

It creates two task lists on Google Tasks: "Positive-Review" and "Negative-Review".

For each survey submission:

If the satisfaction level is above 5, a new task is created in the "Positive-Review" list.

If the satisfaction level is 5 or below, a new task is created in the "Negative-Review" list.

Use Cases
Customer Satisfaction Surveys:

Scenario: A company conducts customer satisfaction surveys to gather feedback on its products and services.
Use Case: Upon completion of the survey, tasks are automatically created on Google Tasks to address any negative feedback received from customers. For example, tasks can be created to follow up with dissatisfied customers and resolve their issues.
Employee Feedback Surveys:

Scenario: An organization conducts employee feedback surveys to assess job satisfaction and identify areas for improvement.
Use Case: After employees submit their feedback through the survey, tasks are generated to address any concerns or suggestions raised by the employees. For instance, tasks can be created to implement changes in workplace policies based on employee feedback.
Product Feedback Surveys:

Scenario: A product team gathers feedback from users through product feedback surveys to improve the user experience.
Use Case: Upon completion of the survey, tasks are automatically generated to prioritize and implement suggested enhancements or fixes. For example, tasks can be created to address reported bugs or to develop new features requested by users.
Event Feedback Surveys:

Scenario: An event organizer collects feedback from attendees through post-event surveys to evaluate event satisfaction.
Use Case: After the event, tasks are created to review feedback from attendees and take necessary actions to improve future events. Tasks can include actions such as addressing complaints, incorporating suggestions for future events, or thanking attendees for positive feedback.

**Conclusion**

The Task Creation Automation for Survey Responses project offers a scalable and efficient solution for automating task management based on survey feedback. By seamlessly integrating with survey platforms and leveraging the power of the Google Tasks API, organizations can streamline their feedback handling processes and drive continuous improvement in their products, services, and operations.





