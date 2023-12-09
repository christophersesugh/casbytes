import React from "react";
import { Form, Link } from "@remix-run/react";
import { Container } from "~/components/container";
import { Button } from "~/components/custom-button";
import { Input } from "~/components/custom-input";

export default function SignUpRoute() {
  return (
    <Container className="bg-header-2 bg-no-repeat bg-cover mx-auto min-h-full">
      <Form
        className="flex flex-col gap-4 p-8 rounded-md max-w-sm mx-auto drop-shadow-xl bg-sky-600/20"
        aria-label="sign up form"
      >
        <h1 className="text-3xl text-center mb-6">Sign Up</h1>

        <Input
          placeholder="First name"
          id="first-name"
          label="First name"
          className="bg-slate-100"
          required
        />
        <Input
          placeholder="Last name"
          id="last-name"
          label="Last name"
          className="bg-slate-100"
          required
        />

        <Input
          type="email"
          placeholder="Email address"
          id="email"
          label="Email"
          className="bg-slate-100"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          label="Password"
          className="bg-slate-100"
          required
        />
        {/* <AcceptTerms /> */}
        <Button
          type="submit"
          className="!uppercase bg-zinc-600 hover:!bg-zinc-500 hover:text-white"
          aria-label="sign up"
        >
          sign up
        </Button>

        <div className="text-center">
          Already have an account?{" "}
          <Link to="/sign-in">
            <Button
              aria-label="sign in"
              variant="ghost"
              className="!capitalize !padding-0 text-blue-700"
            >
              sign in
            </Button>
          </Link>
        </div>
      </Form>
    </Container>
  );
}
