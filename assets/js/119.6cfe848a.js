(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{419:function(e,t,r){"use strict";r.r(t);var o=r(43),s=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Checkout our new Azure Developer page at "),r("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/cdn/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CDN"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("This post was brought to you by "),r("strong",[r("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kumar Allamraju"),r("OutboundLink")],1)]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"delivering-static-content-via-azure-cdn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#delivering-static-content-via-azure-cdn","aria-hidden":"true"}},[e._v("#")]),e._v(" Delivering static content via Azure CDN")]),e._v(" "),r("p",[e._v("In one of the prior episodes we learnt how to "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip138.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("serve a static website from Azure's blob storage"),r("OutboundLink")],1),e._v(". This is great for a low volume web site. As your site starts getting more hits, you wanted to deliver the content closer to the end user. In this episode, we will learn how to deliver a static content via Azure Content Delivery Network(CDN).")]),e._v(" "),r("p",[e._v("Azure CDN offers developers a global solution for rapidly delivering high-bandwidth content to users by caching their content at strategically placed physical nodes across the world. Azure CDN can also accelerate dynamic content, which cannot be cached, by leveraging various network optimizations using CDN POPs. For example, route optimization to bypass Border Gateway Protocol (BGP).")]),e._v(" "),r("p",[e._v("The benefits of using Azure CDN to deliver web site assets include:")]),e._v(" "),r("p",[e._v(". Better performance and improved user experience for end users, especially when using applications in which multiple round-trips are required to load content.")]),e._v(" "),r("p",[e._v(". Large scaling to better handle instantaneous high loads, such as the start of a product launch event.")]),e._v(" "),r("p",[e._v(". Distribution of user requests and serving of content directly from edge servers so that less traffic is sent to the origin server.")]),e._v(" "),r("p",[e._v("This article assumes you have already setup a static web site using Blob storage. Pls refer to "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip138.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("tip 138"),r("OutboundLink")],1),e._v(" to host a static website with Azure's Blob Storage.")]),e._v(" "),r("h4",{attrs:{id:"here-are-4-simple-steps-to-configure-azure-cdn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-are-4-simple-steps-to-configure-azure-cdn","aria-hidden":"true"}},[e._v("#")]),e._v(" Here are 4 simple steps to configure Azure CDN")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Pls make a note of your "),r("strong",[e._v("Primary Endpoint")]),e._v(" from your Storage Account >> Settings >> Static website page\ne.g. [azuretipandtrickstorage.z5.web.core.windows.net]")])]),e._v(" "),r("li",[r("p",[e._v("Go to your storage account and select "),r("strong",[e._v("Azure CDN")]),e._v(" under the Blob service section. Configure the CDN end point.")])])]),e._v(" "),r("p",[e._v("This process may take couple of minutes to provision the CDN end point.")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("p",[e._v('Go to your Azure Portal\'s home page and find the "CDN profiles" blade and click on the CDN end point. Make sure the CDN endpoint is in "Running" status. Copy the endpoint URL and paste it in your browser.')])]),e._v(" "),r("li",[r("p",[e._v("Copy the highlighted URL from the above screenshot and open it in your browser.")])])]),e._v(" "),r("p",[e._v("Depending upon the end user's location,  the static content may take little longer to load as the content needs to be fetched from the origin server. Subsequent access to this image/page will be much faster as the content is served from the edge servers(CDN)")]),e._v(" "),r("p",[e._v("A full-walkthrough is located below:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azurecdn1.gif")}}),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Public Cloud services require reliability, scale, agility and performance. Azure CDN delivers an easy to setup and use CDN platform to distribute your videos, files, web sites or other HTTP content to the world. With CDN services from Verizon, Akamai and now Microsoft, Azure CDN is built from the ground up to deliver best in class CDN services through our multi-CDN ecosystem all inside Azure’s flexible cloud service. Azure CDN provides customers the ability to deliver content from Microsoft’s own global CDN network. In this episode, we learned how easy it is configure Azure CDN with Azure Blob Storage. Go and try it out!")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cdn/cdn-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("CDN overview"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cdn/cdn-ddos?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CDN as DDoS"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=s.exports}}]);