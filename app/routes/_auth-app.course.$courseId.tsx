import React from "react";
import { BackButton } from "~/components/back-button";
import { Container } from "~/components/container";
import { PageTitle } from "~/components/page-title";
import { Button } from "~/components/custom-button";
import { Link, useLoaderData } from "@remix-run/react";
import { CheckCircle, Lock } from "lucide-react";
import { Markdown } from "~/components/markdown";
import { json } from "@remix-run/node";
import { Quiz } from "~/components/quiz";
import { Exercises } from "~/components/exercises";
import { Pagination } from "~/components/pagination";
import { Status } from "~/components/track";

export const loader = async () => {
  const content = `
  ~~~javascript
  'use strict'

/**
 * Module dependencies.
 */

var express = require('../../lib/express');

var app = express();

// Example requests:
//     curl http://localhost:3000/user/0
//     curl http://localhost:3000/user/0/edit
//     curl http://localhost:3000/user/1
//     curl http://localhost:3000/user/1/edit (unauthorized since this is not you)
//     curl -X DELETE http://localhost:3000/user/0 (unauthorized since you are not an admin)

// Dummy users
var users = [
  { id: 0, name: 'tj', email: 'tj@vision-media.ca', role: 'member' }
  , { id: 1, name: 'ciaran', email: 'ciaranj@gmail.com', role: 'member' }
  , { id: 2, name: 'aaron', email: 'aaron.heckmann+github@gmail.com', role: 'admin' }
];

function loadUser(req, res, next) {
  // You would fetch your user from the db
  var user = users[req.params.id];
  if (user) {
    req.user = user;
    next();
  } else {
    next(new Error('Failed to load user ' + req.params.id));
  }
}

function andRestrictToSelf(req, res, next) {
  // If our authenticated user is the user we are viewing
  // then everything is fine :)
  if (req.authenticatedUser.id === req.user.id) {
    next();
  } else {
    // You may want to implement specific exceptions
    // such as UnauthorizedError or similar so that you
    // can handle these can be special-cased in an error handler
    // (view ./examples/pages for this)
    next(new Error('Unauthorized'));
  }
}

function andRestrictTo(role) {
  return function(req, res, next) {
    if (req.authenticatedUser.role === role) {
      next();
    } else {
      next(new Error('Unauthorized'));
    }
  }
}

// Middleware for faux authentication
// you would of course implement something real,
// but this illustrates how an authenticated user
// may interact with middleware

app.use(function(req, res, next){
  req.authenticatedUser = users[0];
  next();
});

app.get('/', function(req, res){
  res.redirect('/user/0');
});

app.get('/user/:id', loadUser, function(req, res){
  res.send('Viewing user ' + req.user.name);
});

app.get('/user/:id/edit', loadUser, andRestrictToSelf, function(req, res){
  res.send('Editing user ' + req.user.name);
});

app.delete('/user/:id', loadUser, andRestrictTo('admin'), function(req, res){
  res.send('Deleted user ' + req.user.name);
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
  ~~~
  title: some title
  slug: some

  $2+2$

  # some heading

  > some quote

  \`\`\`javascript
  import React from "react";
import { Title } from "~/page-title";
import { CourseTable } from "~/course-table";

export function Courses() {
    return (
      <div className="max-w-3xl w-full">
        <Title title="courses" className="capitalize" />
        <div className="mt-12 w-full">
          <CourseTable />
        </div>
      </div>
    );
}
  function str(name) {
    return (name.toString("utf-8"))
  }
  console.log(str("codingsimba"))
  //codingsimba
  // 5 + 5 = 10
  \`\`\`

  \`console.log("inline")\`
  <h1>Hello</h1>

  ~~~python
  def str(name):
      return (str(name))
  ~~~
  <Title title="Python lists" />



  some paragraph
  ![e learning](/icon.png)
  [Home](/)
  `;

  return json({ content });
};

export default function ModulesRoute() {
  const { content } = useLoaderData<typeof loader>();

  return (
    <Container className="max-w-7xl">
      <BackButton to="/track/1" buttonText="Introduction to SE" />
      <PageTitle title="Javascript" className="mb-12" />
      <div className="md:grid md:grid-cols md:grid-cols-6 gap-6">
        <div className="col-span-4 flex flex-col gap-6 overflow-y-auto h-screen">
          <div className="col-span-3">
            <div>learning objectives</div>
            <Markdown source={content} />
          </div>
          <hr />
          <div className="flex flex-col gap-10 mt-8 w-full">
            <Quiz quiz={"some"} />
            <Exercises />
          </div>
          <hr />
          <Pagination
            previousTo="/module/1"
            previousItem="functions"
            nextTo="/module/1"
            nextItem="objects"
            markAsCompletedTo="/module/1"
            nextItemDisabled
          />
        </div>
        <div className="hidden md:block col-span-2 border bg-slate-200/70 h-screen overflow-y-auto">
          <h1 className="text-lg text-slate-100 bg-stone-600 rounded-t-md mb-4 p-2">
            Functions
          </h1>
          <Status />
          <ul className="grid grid-cols-2 gap-4 p-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Button
                variant="secondary"
                className="flex justify-between bg-slate-300 hover:bg-slate-300/50 text-black"
                asChild
              >
                <Link to={`/course/1`}>
                  <li key={i} className="flex items-center text-lg">
                    {i < 2 ? (
                      <CheckCircle className="mr-4 text-blue-600" />
                    ) : (
                      <Lock className="mr-4" />
                    )}{" "}
                    Javascript
                  </li>
                </Link>
              </Button>
            ))}
          </ul>
          <h1 className="text-lg text-slate-100 bg-stone-600 rounded-t-md my-4 p-2">
            Quizzes
          </h1>
          <Status />
          <h1 className="text-lg text-slate-100 bg-stone-600 rounded-t-md my-4 p-2">
            Exercises
          </h1>
          <Status />
        </div>
      </div>
    </Container>
  );
}
