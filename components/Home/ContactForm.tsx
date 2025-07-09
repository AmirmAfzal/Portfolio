"use client";
import React, { startTransition, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { createContact } from "@/lib/actions/contantForm";
import { contactSchema } from "@/lib/validation/schemas/contactSchema";
import { ActionData } from "@/lib/formTypes";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import FormSubmited from "./FormSubmited";

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });
  const [state, formAction, pending] = useActionState<ActionData, FormData>(
    createContact,
    {
      message: "",
      errors: [],
    }
  );

  const handleSumbit = async (data: z.infer<typeof contactSchema>) => {
    startTransition(() => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });
      formAction(formData);
    });
  };

  return (
    <div className="mt-10 sm:mt-16 flex w-full justify-center px-2 sm:px-0">
      {state.message === "SUCCESS" ? (
        <FormSubmited name={form.getValues("name").split(" ")[0]} />
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSumbit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 rounded-3xl w-full max-w-xl sm:max-w-2xl md:max-w-3xl p-4 sm:p-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name *</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your name" {...field} />
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
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input placeholder="example@domain.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="col-span-1 sm:col-span-2">
                  <FormLabel>Subject *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Get in touch, Questions, Feedback"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-1 sm:col-span-2">
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-36"
                      placeholder="e.g. I would like to know more about your work or just say hello"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {state.errors.length > 0 && (
              <div className="col-span-1 sm:col-span-2 flex flex-col">
                {state.errors.slice(0, 2).map((error, index) => (
                  <div
                    className="text-error flex flex-row items-center gap-2"
                    key={index}
                  >
                    <div className="bg-error h-1 w-1 rounded-full"></div>
                    <p className="text-sm">{error}</p>
                  </div>
                ))}
              </div>
            )}
            <button
              className="btn btn-primary btn-soft col-span-1 sm:col-span-2 gap-2 text-xs sm:text-sm md:text-base"
              disabled={pending}
            >
              {pending && <div className="loading loading-spinner"></div>}
              Send Message
            </button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
