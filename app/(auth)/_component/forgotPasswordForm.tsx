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

const resetPasswordSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .email(),
});

export function ResetPasswordForm() {
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-5 border-2 lg:w-1/3 md:w-3/4 w-full lg:p-10 md:p-10 p-5">
      <h2 className="font-semibold text-center">Forgot Password ?</h2>
      <p className="text-sm text-center">We send you a magic link to your email.</p>
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

          <Button type="submit">Send Password Link</Button>
        </form>
      </Form>
    </div>
  );
}
