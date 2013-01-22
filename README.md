# README for KittyHotel
I started this project to provide an integration example of the following technologies and also show how you can start 100% cloud based for free:

Server: Node.js, Express.js, Restful API via Express-resource
Client: Backbone.js, Knockout.js, MVVM Knockback.js
Mobile: Sencha Touch/HTML 5
Database: MongoDB, Redis Cloud (cache)
Cloud: Heroku free Dyno
xtras: PayPal Payments via node:paynode, Social network Auth & Session management via node:Passport, SendGrid integration via node:mailer
IDE: Cloud9
Project overview
KittyHotel is operating a cat hotel, that is, when you need to go in vacation, you check in your cat with KittyHotel. They provide various room accommodation, called "kitty condos".

Kitty hotel also offers online reservation for the inventory they have as well as online payments for the reservations made via PayPal.

The following basic use cases are covered by this code:

UC1. Basic availability request and pricing (checkin/checkout dates, available to KittyHotel operator and Cat owner)
UC2. Make a Reservation/PayPal authorization (KittyHotel, Cat owner)
UC3. Reservation Confirmation/Paypal charge (KittyHotel)
UC4. Cancel reservation (KittyHotel, Cat owner)
UC5. List past/future reservations (KittyHotel)
UC6. Account management for both KittyHotel and Pet Owners (to manage reservations)
Implementation notes
The reason i went with a restful API was to allow multiple client technology integrations as well as prepare this for future partner integrations who may want to provide reservations on their own against KittyHotel's inventory. I'm using OAuth here to grant and control 3rd party access.

SendGrid is simply hosted mailer and i'm using it to send/receive emails regarding the reservations made.

I'm using Knockback as MVVM to update the HTML UI in real time as changes happen (such as new reservations arrive and KittyHotel is notified via browser UI). I chose Sencha Touch to provide native look and feel for iOS/Android mobile devices and basically demonstrate another framework integration against same backend API.

Passport framework is there as plain auth/session management module. it provides a beautiful separation of concerns vs what resources require authentication and also what kind of authorization you require (i.e. KittyHotel owner vs. Pet Owner pages).

Also, I chose Cloud9 IDE due to its beautiful integration with GitHub and also Heroku. You will be up and running in less than 3 minutes and pushing your first build out to Heroku.

Also, a note on Heroku: I know there's Amazon AWS and Azure and many other cloud providers there but, if you really want to get started and not worry about updating your OS and why the mongod crashed and so on, then heroku is a superb choice. Once you grow, you can move out to AWS and take ownership of your platform. PaaS is a great start then move to IaaS. Also, when installing addons on heroku, all of them have a free starter edition. And you will find that all of them run on other clouds like AWS. I chose my Mongo and redid and sendgrid providers on AWS, just to keep my options open should i want to move out of Heroku and into AWS later.