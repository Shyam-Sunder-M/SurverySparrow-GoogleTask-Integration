## Taskify: Streamline Task Management with SurveySparrow Integration
Taskify is a task management application that seamlessly integrates SurveySparrow with Google Tasks, allowing users to convert survey responses into actionable tasks effortlessly. Whether you're a project manager, a customer support representative, or a small business owner, Taskify empowers you to stay organized, productive, and on top of your tasks.The Task Creation Automation for Survey Responses project aims to automate the process of creating tasks on Google Tasks based on the responses received from surveys. By integrating with the Google Tasks API, this solution streamlines task management, allowing organizations to efficiently address feedback and take necessary actions.


**Features**

**SurveySparrow Integration:** Connect your Taskify account to surveysparrow and automate the process of googletask creation onsubmission of surveys.

**Effortless Task Creation:** Convert survey responses into tasks in Google Tasks with just a few clicks.

**Real-time Feedback and Notifications:** Receive real-time feedback and notifications throughout the task creation process.

**Google Tasks Integration:** Seamlessly create tasks in Google Tasks and manage them efficiently.



**Installation:**

Clone this repository to your local machine:

git clone https://github.com/Shyam-Sunder-M/SurverySparrow-GoogleTask-Integration.git

cd SurverySparrow-GoogleTask-Integration

FOR INSTALLING SSDK REFER TO : https://sdk.surveysparrow.dev/docs/getting-started/quick-start.html

USE NVM VERSION 18

NVM USE 18

Run the following command to verify the CLI installation.

ssdk run


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





