// Define the setReminder function
function setReminder(tab, selectedText, reminderOption) {
  const currentDate = new Date();
  const futureDate = new Date();

  //  if (reminderOption === "20seconds") {
  //  futureDate.setSeconds(currentDate.getSeconds() + 20); // Add 20 seconds
  if (reminderOption === "tomorrow") {
    futureDate.setDate(currentDate.getDate() + 1);
  } else if (reminderOption === "3days") {
    futureDate.setDate(currentDate.getDate() + 3);
  } else if (reminderOption === "5days") {
    futureDate.setDate(currentDate.getDate() + 5);
  }

  const reminder = {
    text: selectedText,
    currentDate: currentDate.toDateString(),
    futureDate: futureDate.toDateString(),
  };

  // Store the reminder
  chrome.storage.sync.get({ reminders: [] }, (data) => {
    data.reminders.push(reminder);
    chrome.storage.sync.set({ reminders: data.reminders });
  });
}

// Create the main context menu item
chrome.contextMenus.create({
  id: "replyLater",
  title: "Reply Later",
  contexts: ["selection"],
});

// Add submenus for different reminder options
function createReminderSubmenu(option, title) {
  chrome.contextMenus.create({
    id: option,
    title: title,
    parentId: "replyLater",
    contexts: ["selection"],
  });
}

// Create submenus for different reminder options

// createReminderSubmenu("20seconds", "Test in 20s");
createReminderSubmenu("tomorrow", "Remind me to reply tomorrow");
createReminderSubmenu("3days", "Remind me to reply in 3 Days");
createReminderSubmenu("5days", "Remind me to reply in 5 Days");

// Handle the context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  const selectedText = info.selectionText;
  const reminderOption = info.menuItemId;
  setReminder(tab, selectedText, reminderOption);
});

function checkReminders() {
  chrome.storage.sync.get({ reminders: [] }, (data) => {
    const currentDate = new Date();
    const todayDateString = currentDate.toDateString();

    const reminders = data.reminders.filter((reminder) => {
      return reminder.futureDate === todayDateString;
    });

    if (reminders.length > 0) {
      // Display a badge with the number of reminders due today
      const badgeText = reminders.length.toString();
      chrome.action.setBadgeText({ text: badgeText });
    } else {
      // Remove the badge if there are no reminders today
      chrome.action.setBadgeText({ text: "" });
    }
  });
}

// Check reminders periodically (adjust the interval as needed)
setInterval(checkReminders, 86400000); // Check every 24 hours - set to 20000 for testing at 20seconds
