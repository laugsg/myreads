# MyReads App : A Book Tracking App
MyReads project allows you to select and categorize books you have read, are currently reading, or want to read. 

## How-To: Run
This project is hosted by Github and you will find it at [lauggsg/myreads](https://github.com/laugsg/myreads).
1. Get the project
   1. Clone: `git clone git@github.com:laugsg/myreads.git`
   2. Download as a ZIP
2. Install dependencies: inside your local project folder run `npm install`
3. Run locally: inside your local project folder run `npm start`


## App Functionality
This project base is React, It uses an Udacity API from where gets information about the books that you interact with the application.

The main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control is always be the current shelf the book is in.

The main page also has a link to a search page that allows you to find books to add to your library.



