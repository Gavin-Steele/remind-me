function displayReminders() {
  const reminderList = document.getElementById("reminder-list");
  console.log(reminderList + "hello");
  // Get reminders from Chrome storage
  chrome.storage.sync.get({ reminders: [] }, (data) => {
    data.reminders.reverse().forEach((reminder, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <strong>Reminder for: </strong> ${reminder.text}<br>
          <strong>Date set:</strong> ${reminder.currentDate}<br>
          <strong>Reminder set for: </strong> ${reminder.futureDate}<br>
          <button class="remove-reminder" data-index="${index}">Remove</button>
        `;
      // Add an event listener for the "Remove" button
      listItem
        .querySelector(".remove-reminder")
        .addEventListener("click", function (event) {
          const reminderIndex = event.target.getAttribute("data-index");
          removeReminder(reminderIndex);
          listItem.style.display = "none"; // Hide the removed reminder
        });
      reminderList.appendChild(listItem);
    });
  });
}
// Function to remove a reminder by its index
function removeReminder(index) {
  chrome.storage.sync.get({ reminders: [] }, (data) => {
    data.reminders.splice(index, 1); // Remove the reminder at the specified index
    chrome.storage.sync.set({ reminders: data.reminders });
  });
}
/* 
function clearAllReminders() {
  // Clear all reminders from storage
  chrome.storage.sync.remove("reminders", function () {
    // Update the displayed reminders in the popup
    displayReminders();
  });
}
 */
document.addEventListener("DOMContentLoaded", function () {
  displayReminders();
  /*
  // Add an event listener to the "Clear All Reminders" button
  const clearAllButton = document.getElementById("clear-all-reminders");
  clearAllButton.addEventListener("click", function () {
    clearAllReminders();
  });*/
});
