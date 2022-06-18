# Projects

1. When a user enters an URL in the browser, how does the browser fetch the desired result ?

When a URL is entered into the browser, it at the start wouldn't know the IP address that is associated with the domain name present in the URL. Hence, provided that the IP isn't stored in the cache, the browser contacts the ISP (Internet Service Provider) which makes a DNS (Domain Name System) look up.

The DNS system makes a call to the Root Name Server along with the URL to identify what top-level domain it is, whether it is .com or .org etc. The response comes back to the DNS system which makes a second API call to the .com name server provided the URL is a ".com" domain. That call would then return the IP address that is associated with the domain, as in, the IP address of the host machine. 

Now that the browser understands the IP address of the host machine that it is trying to access, it then establishes a socket TCP/IP connection and the resources (HTML, CSS etc) are fetched. 

HIGH-LEVEL COMPONENTS OF THE BROWSER: 

![image](https://user-images.githubusercontent.com/107745298/174433880-102fd52c-28a0-42b8-bbf8-76ff6678a979.png)

All of the above processes are done though several components. 

1. UI Component: It comprises everything except the action content from the resource fetched. Eg: the address bar, show home button, bookmarking facility etc. 

2. Browser engine: The browser engine acts like a mediator between the UI component and the Rendering engine. Any user input that is provided is going to be communicated to the rendering engine. In simpler words, the browser engine tells the rendering engine what to do according to user inputs and once processed, shows it in the UI component. 

3. Rendering engine: This does the parsing of the HTML and CSS that the browser receives. When an API call is made, the flow follows from user lets say clicking on a button, and then through the browser engine and once it reaches the rendering engine, it communicates with the networking layer to make the call. 

4. Networking layer: This takes care of making API requests and fetching resources from locations on the internet. 

5. JavaScript interpreter: This layer parses the scripts and converts it into a format the browser understands and then, is again sent to the rendering engine for processing which again is reflected through the browser engine to the UI. 

6. UI backend: This layer makes use of the methods provided by the OS upon which the browser operates. The UI that is provided in the browser, namely, text inputs, check boxes and alert popups are all UIs of the OS. 

7. Data persistence layer: This contains various options for various purposes for storing data: namely cookies, local storage, session storage, indexedDB etc. 

ORDER OF EXECUTION OF SCRIPTS: 

1. When fetching an HTML document, when a script is encountered, the default action is to temporarily pause the parsing of the HTML and download the script. The reason is that the JS may contain code that could modify the DOM so it is necessary. 

If there should exist a scenario where the script file could be so big and it doesn't modify the DOM, then we can either add the keywords "async" or "defer". 

Async: This tells the browser to parse the script asynchronously and execute whenever the processing is complete. 

Defer: This tells the browser to completely postpone the execution of the script until the end when the HTML is completely parsed. 


