"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { UserFormValidation } from "@/lib/validation";
import CustomFormField, { FormFieldType } from "../CustomFormField";

const PatientForm = () => {
    
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
        },
      });

  const onSubmit = (data: z.infer<typeof UserFormValidation>) => {
    // Handle form submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
      </form>
    </Form>
  );
};

export default PatientForm