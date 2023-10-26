# Remind 2 Reply - Chrome-extension
A very basic Chrome extension that allows you to select text in a browser window and set a reminder to take action on it.

Note: Naming things is hard. This extension will show as **Remind 2 Reply** in the extension bar but as **Reply Later** in the right click menu.

## This extension does 2 things.
1. Adds a new menu item to the right click menu that allows you to select how long in the future you want to set the reminder (1 day, 3 days, 5 days)
2. It adds an extension icon that indicates when you have a reminder and lists all the reminders that you have set.


### Potential usecase
When reading messages in applications like LinkedIn, instead of replying right away, you can set a reminder to reply in a day or so.

### Enabling the extension:
1. You need to enable Developer tools in the Chrome extension manager.
2. You need to click on the 'Load unpacked' button and select the folder containg the extension files.


### How to set a reminder
1. Select text on a webpage (or just right click the text)
2. Right click
3. Select the Reply Later menu item, then select the one of the options

![image](https://github.com/Gavin-Steele/remind-me/assets/5500139/70cd9a5f-886d-4b5b-965c-1f59131109a5)


### How to view reminders
1. Click on the extension icon.

![image](https://github.com/Gavin-Steele/remind-me/assets/5500139/d798b6ad-a28f-4bc6-a19e-474ff052d754)


### Known Issues
1. If you open and close the extension rapidly, sometimes items that were recently removed from the list show again
2. There is no styling applied to the extension so it looks ugly

Note: The extension runs from the local folder on your computer, so if you edit or remove those files, the extension will stop working.
