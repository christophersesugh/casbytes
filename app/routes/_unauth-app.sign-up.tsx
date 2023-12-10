import React from "react";
import { Form, Link } from "@remix-run/react";
import { Container } from "~/components/container";
import { Button } from "~/components/custom-button";
import { Input } from "~/components/custom-input";
import { Checkbox } from "~/components/custom-checkbox";

export default function SignUpRoute() {
  return (
    <Container className="bg-header-2 bg-no-repeat bg-cover mx-auto min-h-full">
      <Form
        className="flex flex-col gap-4 p-8 rounded-md max-w-lg mx-auto drop-shadow-xl bg-sky-600/20"
        aria-label="sign up form"
      >
        <h1 className="text-3xl text-center mb-6">Sign Up</h1>

        <div className="flex gap-4">
          <Input
            id="first-name"
            name="first-name"
            label="First name"
            placeholder="First name"
            className="bg-slate-100"
            required
          />
          <Input
            id="last-name"
            name="last-name"
            label="Last name"
            placeholder="Last name"
            className="bg-slate-100"
            required
          />
        </div>

        <Input
          type="email"
          id="email"
          name="email"
          label="Email"
          placeholder="Email address"
          className="bg-slate-100"
          required
        />
        <Input
          type="password"
          id="password"
          name="password"
          label="Password"
          placeholder="Password"
          className="bg-slate-100"
          required
        />
        <Input
          type="password"
          id="confirm-password"
          name="confirm-password"
          label="Confirm password"
          placeholder="Confirm password"
          className="bg-slate-100"
          required
        />
        <Checkbox
          id="agreement"
          name="agreement"
          //   message={
          //     actionData?.fieldErrors?.agreement ? "Agree to terms." : undefined
          //   }
          label={
            <>
              I agree to the {""}
              <Link to="privacy-policy" className="text-blue-600">
                Privacy policy
              </Link>{" "}
              and {""}
              <Link to="terms-of-use" className="text-blue-600">
                Terms of use
              </Link>
            </>
          }
        />
        <Button
          type="submit"
          className="uppercase bg-zinc-600 hover:bg-zinc-500"
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
