"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const signInSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .email(),
  password: z.string().min(6, {
    message: "password must be at least 6 characters",
  }),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-5 border-2 lg:w-1/3 md:w-3/4 w-full lg:p-10 md:p-10 p-5">
      <h2 className="font-semibold text-center">Sign in to ravenBugpro</h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} type="email" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} type="password" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-right text-sm -my-10">
            Forgot Password?{" "}
            <Link href="reset-password" className="hover:text-purple-700">
              {" "}
              Reset Password
            </Link>
          </p>
          <Button type="submit">Sign In</Button>
        </form>
      </Form>
      <Separator />
      <p className="text-sm">
        Dont have an account ? <Link href="/sign-up">Sign Up</Link>
      </p>
      <Button variant="secondary">Sign In with Google</Button>
      <Button variant="secondary">Sign In with Github</Button>
    </div>
  );
}
