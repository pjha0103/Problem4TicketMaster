# React Ticket Master Problem 4

This is `React Ticket Master Problem 4`, a React front end client that communicates with the Ticket Master Event API.


If you wish to run the code locally run the following.

```
npm i
npm start
visit http://localhost:3005
```


 <ins> NOTE :API Key Validity till : 26th December 17:00 Hours IST . Post That API will fail. You would need to again generate the key and pass it to API to make it run.</ins>

####Please note that the Ticket master API can be used for upto 5000 hits. #####

```
This is an event search page,which allows to search events and their gelocation based on user entered postal code.
Steps to get gelocation:
1)Go to http://localhost:3005
2)Enter any postal code like 10000, 10001,20000 in the input box,this field in a mandatory field,
hence will show an error if we try to perform search without filling it.
3)If search resilts found for enetred postal code,It will show a table with events and its geo location details.
   3.1 Table has sorting feature,user can sort data for all the columns, 
   3.2 It has pagination implemented as well, by default it shows first 10 results.
4)If there are no show results,it returns a msg "No search results found for entered postal code"   
4)We are storing last 5 searches in an array and logging it in console to monitor it.
(Snippet of the same is available under ***Last 5 search Monitor console*** section)
```


***Lighthouse Report***

![alt text](https://github.com/pjha0103/Problem4TicketMaster/blob/master/src/assets/lighthousereport.png "Browse")

***Search Home Page***

![alt text](https://github.com/pjha0103/Problem4TicketMaster/blob/master/src/assets/SearchHomePage.JPG "Browse")

***Search Result Page***

![alt text](https://github.com/pjha0103/Problem4TicketMaster/blob/master/src/assets/resultpage.png "Browse")

***No Match Page***

![alt text](https://github.com/pjha0103/Problem4TicketMaster/blob/master/src/assets/noresultpage.JPG "Browse")

***Last 5 search Monitor console***

![alt text](https://github.com/pjha0103/Problem4TicketMaster/blob/master/src/assets/RecentSearchConsoleMonitor.png "Browse")

### License

No License Required