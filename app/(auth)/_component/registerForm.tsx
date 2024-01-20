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

const SignUpSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(20, {
      message: "Username must be at most 20 charachters",
    }),
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

export function SignUpForm() {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignUpSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-5 border-2 lg:w-1/3 md:w-3/4 lg:p-10 w-full md:p-5 p-5">
      <h2 className="font-semibold text-center">Sign Up to ravenBugpro</h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} type="text" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
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

          <Button type="submit">Sign Up</Button>
        </form>
      </Form>
      <Separator />
      <p className="text-sm">
        Already have an account ? <Link href="/sign-In" className="hover:text-purple-700">Sign In</Link>
      </p>
      <Button variant="secondary">Sign up with Google</Button>
      <Button variant="secondary">Sign up with Github</Button>
    </div>
  );
}
