exports = {
  onSubmissionComplete: async function (args) {
    try {
      const newTask = args.data.device_type; // Assuming 'device_type' contains the task title
      const accessToken = args.iparams.access_token; // Assuming access_token is passed as an installation parameter
      const headers = { Authorization: `Bearer ${accessToken}` };
      const reqData = { headers: headers, isOAuth: true };
      
      console.log('Creating a task in Google:', newTask);
      
      await createGoogleTask(newTask, reqData);
    } catch (error) {
      console.error("Error while creating task:", error);
    }
  }
};

async function createGoogleTask(newTask, reqData) {
  try {
    const responseFromGoogle = await $Fetch.post(
      "https://tasks.googleapis.com/tasks/v1/lists/MDg3NTg3MzQzMDkwODY1MjQ4MTY6MDow/tasks",
      {
        title: newTask
      },
      reqData
    );

    if (responseFromGoogle.status === 200) {
      console.log("Task created successfully:", responseFromGoogle.data);
    } else {
      console.error("Error creating task. Unexpected response from Google:", responseFromGoogle);
    }
  } catch (error) {
    console.error("Error while sending request to Google:", error);
    throw error;
  }
}
