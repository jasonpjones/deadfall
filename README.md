# act.dashboard
====

## Configuring your environment 

### Required installs:
Ensure you have the following installed on your computer:

* [git - msysgit](http://msysgit.github.io/)
* Your preference:
Use the included Visual Studio Tools for Git
or
[TortiseGIT](http://code.google.com/p/tortoisegit/)
or
[Git for Windows](https://windows.github.com/)
* [NodeJS](http://nodejs.org)

### act.web.api
act.dashboard consumes [act.web.api](https://github.com/Swiftpage/act.web.api). You must first 
clone that respository and get it running on your environment. Follow the instructions in 
the Readme file at the link above. If there are steps missing in the 'APFW Developer Setup' section, please add
them.

In IIS under Default Web Site, add a new application called act.web.api that points the act.web.api folder in that repository. 

### clone the repo
Determine where you want the repository to reside on your local development machine. 
In Git Bash or Git Shell, navivate to the directory you want the repository to reside.

Type
```
git clone https://github.com/Swiftpage/act.insights.git
```

You should now have the repository locally.

### Set up a Visual Studio web site
act.dashboard is a client-side application and contains no server-side code, so this step is necessary
only if you choose to use Visual Studio as your primary editor. If you are using [Sublime Text](https://www.sublimetext.com/), [WebStorm](https://www.jetbrains.com/webstorm/) or similar text-editor, this step is not required.

* Open Visual Studio
* Select File -> New -> Web Site...
* In the left pane expand the Online option
* Under Online, expand Templaes and select HtmlBasicSiteTemplate
* For the site location browse to the location of your repository. (i.e. "C:\dev\act.dashboard")
* If you get a prompt stating there is already a web site at that location, chose the third radio button, 'Create a new Web site in the existing location'
* __Very important!__ You should get a dialog stating that index.html already exists. Check the 'Apply to all items' checkbox and select **No**. 

### Configure IIS
In IIS, under Default Web Sites, create a new application with any name you want and point it to the act.dashboard folder in your repository.

### Install dependencies
From a command line, navigate to your act.dashboard folder.

Type 
```
NPM Install
```
This installs the dependencies listed in package.json

