# Rosetta Stone: Simple to "real" Express
The point of this project is simple: to start getting you used to more complex projects. I know *obviously* you can create an express app in about 10 lines in one file, but that's not the point. No, in real life you're going to work at a company on projects that span years and languages. The first time you look at a true enterprise app it's going to hit you like a truck. What we're aiming for here is to hit you with a bike first.

## Complex vs Complicated
Complicated is bad. No one wants to say they're in a complicated relationship. Complexity is just advanced simplicity. You're doing something *big* in the simplest way possible. And the way you keep complex from getting complicated is with structure. There are a million ways to structure an app, not really right or wrong. The only wrong move is not to plan. So with that, let's get used to the Marcy way of structuring an app. So while we're using a single model and 5 routes, this format will help you stay afloat when you do capstone with 5 models and 30 routes.


# The Structure
In `src-simple` you can see the one file approach, and cross reference it with the real `src` folder. In `src` there are only 3 top level files:

- `index.js`
  - This file is literally just for starting our server and *that's* it
- `server.js`
  - This file is for creating our server and setting it all up.
  - Why is it on it's own? It's way easier to test this now. If we can simply import a server, it's easy to mock and probe the routes without doing real http requests (which take milliseconds, but add up when you're doing thousands in a big test suite).
- `routes.js`
  - These are our actual API routes. In a more complex app, you may have multiple routing files, but for now we don't need a directory and can just use the one.

Then there are directories:
- /controllers/controller-name/route-controller.js
  - In here we have our controllers. Each controller is a sub directory and each controller belongs in a single file. They are all exported together (per controller) into a "barrel file." This lets us keep our routes file simpler and not filled with import statements. HOWEVER! Barrel files are opposed by some and loved by others. We don't use them everywhere and it's up to you on your own projects to decide if you care about them. This is just exposing them
- /middleware/middleware-name.js
  - This is where all of our *custom* middleware functions live. Each one in its own file, and they can be imported in various places in our project. No barrel file here, because each middleware is different and not necessarily importing multiple at once.
- /models/model-name.js
  - Each model gets its own file! Models are the easiest to expand so try to keep model logic only in each file, and break out any utils functions into a utils file or directory.

# Is this MVC?
I mean, kind of. This is only a backend app, so there are no views. But we do have models, controllers, and routes. What's the most important aspect of *any* mental framework is the idea of layers. Each layer of our app has a purpose and keeps spillovers from happening.

Here requests hit the routes, which are handled by controllers who talk to the models that talk to the DB. No level skipping! A controller should *never* write SQL directly or know anything about the DB, all it talks to are the models. The *models* expose methods that do the DB talking. This protects your app from bleeding information and complexity. If you change anything about the DB, it won't affect anything but the model, because no one else talks to the DB. By that same token, your models have *no* idea about http or routing, they just know how to insert/retrieve information for the database. This means you can change your routing layer without affecting your models.

# What else can we add?
If this were a full stack app, you'd likely need to add a `/public` directory for your static assets. Also, if we were using a DB we'd need a `/db` directory (either on its own or in `/models`). But for now, this is all we need.
