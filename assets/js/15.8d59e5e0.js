(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{319:function(e,t,o){"use strict";o.r(t);var r=o(43),n=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"a-multi-part-series-showing-an-end-to-end-possibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-multi-part-series-showing-an-end-to-end-possibility","aria-hidden":"true"}},[e._v("#")]),e._v(" A multi-part series showing an end-to-end possibility")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.linkedin.com/in/crystal-tenn-6a0b9b67/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crystal Tenn"),o("OutboundLink")],1),e._v(" and I teamed up to bring an E2E blog series that features an Azure App Service website that communicates with an API project, which communicates to an Azure SQL back-end. The app is a traditional To-Do application based on an existing sample that used ADO.NET, but adapted for Azure deploy and to Visual Studio 2017. The  technology/tooling stack is Visual Studio, VSTS, C#, Angular, and SQL.")]),e._v(" "),o("p",[e._v("The process for the app is described below. In Visual Studio, you will start out with a working To Do list application. You will push the code to VSTS (Visual Studio Team Services). Then you will create a CI/CD (Continuous Integration/Continuous Delivery) process in order to deploy to Azure. In Azure you will create 3 resources: Azure Web App, Azure API App, and an Azure SQL Server through this exercise.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip101.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - SQL Server"),o("OutboundLink")],1),e._v(" - Locally connect a front-end website to an API, and connect the API to a SQL Server.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip102.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - Visual Studio and Swagger"),o("OutboundLink")],1),e._v(" - Continue Part 1 and use a local instance of Visual Studio and Swagger to communicate to our db.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip103.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger - Learn how to use Swagger for API management"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip104.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the SQL database to Azure manually"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip105.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the front-end Web App and API App to Azure manually"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip107.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding the project to VSTS with Git"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip108.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Integration - Setup a CI Process in VSTS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip109.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Deployment - Setup a CD Process in VSTS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip110.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cleanup - Cleanup and delete the Azure resources created in this tutorial"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Keep in mind : While we won't be going into the deep specifics of how to code, you should be able to use this guide to look at several parts of the Azure technology stack and how you can best implement them in your organization.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/todolist-diagram.png")}}),e._v(" "),o("h1",{attrs:{id:"deploy-sql-database-to-azure-sql"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-sql-database-to-azure-sql","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy SQL Database to Azure SQL")]),e._v(" "),o("p",[e._v("1.) Log into the Azure Portal at "),o("a",{attrs:{href:"https://portal.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("portal.azure.com"),o("OutboundLink")],1),e._v(" if you aren't already logged in.")]),e._v(" "),o("p",[e._v("2.) Create a new SQL Database. Click "),o("strong",[e._v("New")]),e._v(", select "),o("strong",[e._v("Databases")]),e._v(", choose "),o("strong",[e._v("SQL Database")]),e._v(", then lastly hit "),o("strong",[e._v("Create")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-01SelectSQLDBPortal.png")}}),e._v(" "),o("p",[e._v("3.) Click on "),o("strong",[e._v("Server and Pricing Tier")]),e._v(" to get a slideout options. In the "),o("strong",[e._v("Server slideout")]),e._v(", make sure you create a username and password and keep it somewhere safe as you will need this to login using SQL Server Management Studio (SSMS).  In the "),o("strong",[e._v("Pricing Tier")]),e._v(", change to "),o("strong",[e._v("Basic")]),e._v(" so it only costs about $5 per month. Your screen will look approximately like this:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-02DBOptions.png")}}),e._v(" "),o("p",[e._v("4.) Click on "),o("strong",[e._v("All Resources")]),e._v(" on the left menu. You should see your new SQL Server and SQL Database. Click on the "),o("strong",[e._v("SQL Database")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-03AllResources.png")}}),e._v(" "),o("p",[e._v("5.) On the "),o("strong",[e._v("Overview")]),e._v(" tab. Copy the Server name to somewhere safe. Click on the "),o("strong",[e._v("Show Connection Strings")]),e._v("  and copy it somewhere safe.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-05DatabaseOverview.png")}}),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("connection string")]),e._v(" will look like this (save this in a Notepad for the web.config in the solution later):")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-06ConnectionString.png")}}),e._v(" "),o("p",[e._v("6.) Open "),o("strong",[e._v("SSMS")]),e._v(" and enter the "),o("strong",[e._v("Server name, username, and password")]),e._v(" as shown below.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-07SSMS.png")}}),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(" if you cannot login, please go to the Portal and add your "),o("strong",[e._v("IP address")]),e._v(" by clicking on the "),o("strong",[e._v("SQL Server")]),e._v(" you created, then going to "),o("strong",[e._v("Firewall")]),e._v(". You may also be able to set the firewall prompt through the SQL Server tool.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-10.PNG")}}),e._v(" "),o("p",[e._v("7.) Go back to "),o("router-link",{attrs:{to:"./tip101/"}},[e._v("Day 1")]),e._v(" and repeat steps 6-13, except use the "),o("strong",[e._v("Azure SQL Server name")]),e._v(" that we created earlier instead of your local DB.")],1),e._v(" "),o("p",[e._v("8.) Once the DB has been saved to Azure, go into the "),o("strong",[e._v("connection strings")]),e._v(" of your API project that can be found in the "),o("strong",[e._v("web.config")]),e._v(" as shown below.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-webconfig.jpg")}}),e._v(" "),o("p",[e._v("9.) In the "),o("strong",[e._v("web.config")]),e._v(", change your "),o("strong",[e._v("connection string")]),e._v(" so that it points to your "),o("strong",[e._v("Azure SQL Server connection string")]),e._v(" (that you should have saved into Notepad earlier). Make sure you add your username and password for your Azure SQL Server into the connection string.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-webconfig3.jpg")}})])},[],!1,null,null,null);t.default=n.exports}}]);