"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../layout/Button";
import { useState } from "react";
import { useTranslations } from "next-intl";

// Patterns for validation
const nameRegex = /^[\p{L}'\- ]+$/u; // Unicode letters, apostrophes, hyphens, spaces
const unsafePattern = /(<|>|script|alert|onerror|javascript:|['";])/i; // XSS/SQL patterns
const phoneRegex = /^\+?[1-9]\d{9,14}$/; // E.164: + and 10–15 digits, first digit not zero
const specialCharsOnly = /^[@#!$%^&*()]+$/; // Only special characters

export default function EnquiryForm() {
  const t = useTranslations("form");

  const formSchema = z.object({
    // First Name
    fName: z
      .string()
      .trim()
      .min(2, { message: t("fName_min") })
      .max(255, { message: t("fName_max") })
      .regex(nameRegex, { message: t("fName_regex") })
      .refine((val) => !/\d/.test(val), { message: t("fName_no_numbers") })
      .refine((val) => !unsafePattern.test(val), { message: t("fName_unsafe") }),

    // Second Name
    sName: z
      .string()
      .trim()
      .min(2, { message: t("sName_min") })
      .max(255, { message: t("sName_max") })
      .regex(nameRegex, { message: t("sName_regex") })
      .refine((val) => !/\d/.test(val), { message: t("sName_no_numbers") })
      .refine((val) => !unsafePattern.test(val), { message: t("sName_unsafe") }),

    // Email
    email: z
      .string()
      .trim()
      .email({ message: t("email_invalid") })
      .max(255, { message: t("email_max") })
      .refine((val) => !unsafePattern.test(val), { message: t("email_unsafe") }),

    // Phone Number (universal, E.164)
    phoneNumber: z
      .string()
      .trim()
      .regex(phoneRegex, { message: t("phoneNumber_regex") })
      .refine((val) => !/^0+$/.test(val.replace(/\D/g, "")), { message: t("phoneNumber_zeros") })
      .refine((val) => !/[a-zA-Z@!#<>'";]/.test(val), { message: t("phoneNumber_invalid_chars") }),

    message: z
      .string()
      .trim()
      .min(2, { message: t("message_min") })
      .max(5000, { message: t("message_max") })
      .refine((val) => !specialCharsOnly.test(val), { message: t("message_special_chars") })
      .refine((val) => !unsafePattern.test(val), { message: t("message_unsafe") })
      .optional(),
  });
  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fName: "",
      sName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    mode: "onChange",
  });

  // State for loading and feedback
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Submit handler
  async function onSubmit(values) {
    setIsLoading(true);
    setFeedback(null); // Reset feedback

    // Map form values to API expected keys
    const payload = {
      first_name: values.fName,
      second_name: values.sName,
      email: values.email,
      phone_number: values.phoneNumber,
      message: values.message || "", // Ensure message is sent, even if empty
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enquiry-now`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setFeedback({ type: "success", message: data?.message });
      form.reset(); // Reset form on success
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setFeedback({
        type: "error",
        message: "Failed to send enquiry. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  // Generic onBlur handler to trim whitespace
  const handleBlur = (fieldName, value) => {
    const trimmedValue = value.trim();
    form.setValue(fieldName, trimmedValue, { shouldValidate: true });
  };

  // Log form errors for debugging
  const errors = form.formState.errors;
  if (Object.keys(errors).length > 0) {
    console.log("Form validation errors:", errors);
  }
  const errorStyle = "text-red-500";

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          form.handleSubmit(onSubmit)(e);
        }}
        className="flex flex-wrap -mx-[15px] lg:-mx-[25px]"
      >
        <div className="w-full lg:w-1/2 p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="fName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="
                              w-full
                              h-[50px]
                              border-0
                              border-b
                              border-gray-300
                              rounded-none
                              px-0
                              text-black font-normal
                              text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                              placeholder:text-black
                              placeholder:text-[12px] lg:placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]
                    "
                    type="text"
                    placeholder={t("fName_placeholder")}
                    {...field}
                    onBlur={(e) => handleBlur("fName", e.target.value)}
                  />
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full lg:w-1/2 p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="sName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="
                              w-full
                              h-[50px]
                              border-0
                              border-b
                              border-gray-300
                              rounded-none
                              px-0
                              text-black font-normal
                              text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                              placeholder:text-black
                              placeholder:text-[12px] lg:placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]
                    "
                    type="text"
                    placeholder={t("sName_placeholder")}
                    {...field}
                    onBlur={(e) => handleBlur("sName", e.target.value)}
                  />
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="
                              w-full
                              h-[50px]
                              border-0
                              border-b
                              border-gray-300
                              rounded-none
                              px-0
                              text-black font-normal
                              text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                              placeholder:text-black
                              placeholder:text-[12px] lg:placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]"
                    type="text"
                    placeholder={t("email_placeholder")}
                    {...field}
                    onBlur={(e) => handleBlur("email", e.target.value)}
                  />
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="
                              w-full
                              h-[50px]
                              border-0
                              border-b
                              border-gray-300
                              rounded-none
                              px-0
                              text-black font-normal
                              text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                              placeholder:text-black
                              placeholder:text-[12px] lg:placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]
                    "
                    type="tel"
                    inputMode="tel"
                    pattern="[\d\s()+-]*"
                    placeholder={t("phoneNumber_placeholder")}
                    {...field}
                    onInput={(e) => {
                      // Only allow digits, spaces, parentheses, dashes, and plus
                      e.target.value = e.target.value.replace(/[^0-9()+\-\s]/g, "");
                    }}
                    onBlur={(e) => handleBlur("phoneNumber", e.target.value)}
                  />
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="
                              w-full
                              h-[50px]
                              border-0
                              border-b
                              border-gray-300
                              rounded-none
                              px-0
                              text-black font-normal
                              text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                              placeholder:text-black
                              placeholder:text-[12px] lg:placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]
                    "
                    placeholder={t("message_placeholder")}
                    {...field}
                    onBlur={(e) => handleBlur("message", e.target.value)}
                  />
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        {/* Feedback and Loading State */}
        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
          {feedback && (
            <div className={`text-center ${feedback.type === "success" ? "text-green-600" : "text-red-500"}`}>
              {feedback.message}
            </div>
          )}
        </div>

        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px] flex justify-end">
          <Button
            color="black"
            type="submit"
            aria-label="Send Message"
            className="max-w-[70px] sm:max-w-[80px] lg:max-w-[97px] xl:max-w-[130px] 2xl:min-w-[150px] 3xl:min-w-[180px]"
            disabled={isLoading}
          >
            {isLoading ? t("submit_loading") : t("submit_button")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
