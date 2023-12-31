import { Form, Link } from "@remix-run/react";
import { Container } from "~/components/container";
import { Button } from "~/components/custom-button";
import { Input } from "~/components/custom-input";
import { Checkbox } from "~/components/custom-checkbox";

export default function SignInRoute() {
  return (
    <Container className="bg-header-2 bg-no-repeat bg-cover mx-auto min-h-full">
      <Form
        className="flex flex-col gap-4 p-8 rounded-md max-w-sm mx-auto drop-shadow-xl bg-sky-600/20"
        aria-label="sign in form"
      >
        <h1 className="text-3xl text-center mb-6">Sign In</h1>
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

        <div className="flex flex-wrap text-sm justify-between">
          <Checkbox id="remember-me" name="remember-me" label="Remember me." />
          <span className="text-blue-600">
            <Link to="/forgot-password">Forgot password ?</Link>
          </span>
        </div>

        <Button
          type="submit"
          className="uppercase bg-zinc-600 hover:bg-zinc-500"
          aria-label="sign in"
        >
          sign in
        </Button>

        <div className="text-center">
          Don't have an account?{" "}
          <Link to="/sign-up">
            <Button
              aria-label="sign up"
              variant="ghost"
              className="!capitalize !padding-0 text-blue-700"
            >
              sign up
            </Button>
          </Link>
        </div>
      </Form>
    </Container>
  );
}
