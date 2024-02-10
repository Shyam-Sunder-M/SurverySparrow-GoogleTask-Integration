exports = {
  onSubmissionComplete: async function (args) {
    const headers = { Authorization: "Bearer <%= access_token %>" };
    const reqData = { headers: headers, isOAuth: true };
    try {
      const newList = await createNewTaskList("Positive-Review", reqData);
      console.log("New list created successfully:", newList);
    } catch (error) {
      console.log("Error:", error);
    }
    try {
      const newList = await createNewTaskList("Negative-Review", reqData);
      console.log("New list created successfully:", newList);
    } catch (error) {
      console.log("Error:", error);
    }
    try {
      const taskDetails = await fetchAllTaskLists(reqData);
      taskDetails.forEach((list) => {
        if (list.title == "Positive-Review") {
          positivetaskListId = list.id;
        }
        else if (list.title == "Negative-Review") {
          negativetaskListId = list.id;
        }
      });
      length = args['data'].length;
      for (let i = 0; i < length; i++) {
        if (args['data'][i]['answers'][0]['answer'] > 5) {
          // console.log("answer" + args['data'][i]['answers'][0]['answer']);
          try {
            const newTask = await createNewTask(args['data'][i]['answers'][1]['answer'], positivetaskListId, reqData);
            console.log("New task created successfully:", newTask);
          } catch (error) {
            console.log("Error:", error);
          }   
        }
      else {
        // console.log(args['data'][i]['answers'][0]['answer']);
  
        try {
          const newTask = await createNewTask(args['data'][i]['answers'][1]['answer'], negativetaskListId, reqData);
          console.log("New task created successfully:", newTask);
        } catch (error) {
          console.log("Error:", error);
        }  
      }
    }} catch (error) {
      console.log("Error:", error);
    }

  }
};

async function fetchAllTaskLists(reqData) {
  try {
    const responseFromGoogle = await $Fetch.get(
      "https://tasks.googleapis.com/tasks/v1/users/@me/lists",
      reqData
    );
    return responseFromGoogle.data.items;
  } catch (error) {
    console.log("Error fetching task lists:", error.response);
    throw error;
  }
}

async function createNewTaskList(listTitle, reqData) {
  try {
    const responseFromGoogle = await $Fetch.post(
      "https://tasks.googleapis.com/tasks/v1/users/@me/lists",
      {
        title: listTitle,
      },
      reqData
    );
    return responseFromGoogle.data;
  } catch (error) {
    console.log("Error creating new task list:", error.response);
    throw error;
  }
}
async function createNewTask(taskTitle, taskListId, reqData) {
  try {
    const responseFromGoogle = await $Fetch.post(
      `https://tasks.googleapis.com/tasks/v1/lists/${taskListId}/tasks`,
      {
        title: taskTitle,
      },
      reqData
    );
    return responseFromGoogle.data;
  } catch (error) {
    console.log("Error creating new task:", error.response);
    throw error;
  }
}



