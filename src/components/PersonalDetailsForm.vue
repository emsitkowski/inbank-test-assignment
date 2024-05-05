<template>
  <div>
    <Form class="flex flex-col gap-4" :validation-schema="schema" @submit="handleSubmit!">
      <div class="flex flex-col gap-2" v-for="field in formFields">
        <Field :type="field.type" :name="field.name" :placeholder="field.placeholder" />
        <ErrorMessage class="text-error" :name="field.name" />
      </div>

      <Button class="mt-6" label="Submit" variant="secondary" />
    </Form>
  </div>
</template>

<script setup lang="ts">
import { useCalculatorStore } from "@/store/calculator";
import Button from "../components/Button.vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

type ClientDetails = {
  name: String;
  surname: String;
  number: String;
  email: String;
  income: String;
};

// Declare form fields
const formFields = [
  {
    type: "text",
    name: "name",
    placeholder: "First name",
  },
  {
    type: "text",
    name: "surname",
    placeholder: "Last name",
  },
  {
    type: "text",
    name: "number",
    placeholder: "Mobile number",
  },
  {
    type: "text",
    name: "email",
    placeholder: "E-mail",
  },
  {
    type: "text",
    name: "income",
    placeholder: "Monthly income",
  },
];

// User details form validation schema
const schema = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
  number: yup
    .string()
    .matches(/^55\d{5,6}$/, "Number must start with 55 and contain 7 or 8 digits")
    .required(),
  email: yup.string().email().required(),
  income: yup.number().moreThan(100).required(),
});

// Handle form submit
async function handleSubmit(values: ClientDetails) {
  // Save client details to store
  useCalculatorStore().saveClientDetails(values);
}
</script>
