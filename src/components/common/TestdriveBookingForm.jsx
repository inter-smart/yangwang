"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Button } from "../layout/Button";
import { useTranslations, useLocale } from "next-intl";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// Patterns for validation
const nameRegex = /^[\p{L}'\- ]+$/u; // Unicode letters, apostrophes, hyphens, spaces
const unsafePattern = /(<|>|script|alert|onerror|javascript:|['";])/i; // XSS/SQL patterns
const phoneRegex = /^\+?[1-9]\d{9,14}$/; // E.164: + and 10–15 digits, first digit not zero
const specialCharsOnly = /^[@#!$%^&*()]+$/; // Only special characters

const inputSyle = cn(
  "text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-normal text-black placeholder:text-black w-full h-[35px] xl:h-[50px] border-0 border-b border-gray-300 rounded-none px-0  focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7] "
);
const selectInputSyle = cn(
  "text-[12px] xl:text-[14px] 2xl:text-[16px] leading-tight font-medium text-black placeholder:text-[#b3b3b3] w-full max-w-full min-h-[35px] xl:min-h-[50px] px-3 xl:px-4 border border-[#CCCCCC] rounded-none bg-white outline-none shadow-none transition-all cursor-pointer flex items-center justify-between relative focus:ring-black/10"
);

export default function TestdriveBookingForm({ locationData, modelData }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [open, setOpen] = useState(false);
  const t = useTranslations("form");
  const [date, setDate] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const locale = useLocale();

  const formSchema = z.object({
    fName: z
      .string()
      .trim()
      .min(2, { message: t("fName_min") })
      .max(255, { message: t("fName_max") })
      .regex(nameRegex, { message: t("fName_regex") })
      .refine((val) => !/\d/.test(val), { message: t("fName_no_numbers") })
      .refine((val) => !unsafePattern.test(val), {
        message: t("fName_unsafe"),
      }),

    // Second Name
    sName: z
      .string()
      .trim()
      .min(2, { message: t("sName_min") })
      .max(255, { message: t("sName_max") })
      .regex(nameRegex, { message: t("sName_regex") })
      .refine((val) => !/\d/.test(val), { message: t("sName_no_numbers") })
      .refine((val) => !unsafePattern.test(val), {
        message: t("sName_unsafe"),
      }),

    // Email
    email: z
      .string()
      .trim()
      .email({ message: t("email_invalid") })
      .max(255, { message: t("email_max") })
      .refine((val) => !unsafePattern.test(val), {
        message: t("email_unsafe"),
      }),

    // Phone Number (universal, E.164)
    phoneNumber: z
      .string()
      .trim()
      .regex(phoneRegex, { message: t("phoneNumber_regex") })
      .refine((val) => !/^0+$/.test(val.replace(/\D/g, "")), {
        message: t("phoneNumber_zeros"),
      })
      .refine((val) => !/[a-zA-Z@!#<>'";]/.test(val), {
        message: t("phoneNumber_invalid_chars"),
      }),

    model: z
      .string()
      .trim()
      .min(1, { message: t("model_required") }),

    location: z
      .string()
      .trim()
      .min(1, { message: t("location_required") }),

    date: z.date({ message: t("date_required") }),

    message: z
      .string()
      .trim()
      .min(2, { message: t("message_min") })
      .max(5000, { message: t("message_max") })
      .refine((val) => !specialCharsOnly.test(val), {
        message: t("message_special_chars"),
      })
      .refine((val) => !unsafePattern.test(val), {
        message: t("message_unsafe"),
      })
      .optional(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fName: "",
      sName: "",
      email: "",
      phoneNumber: "",
      model: "",
      location: "",
      message: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values) {
    setIsLoading(true);
    setSubmitStatus(null);

    let captcha_token = null;
    if (executeRecaptcha) {
      captcha_token = await executeRecaptcha("bookatestdrive");
    }

    const payload = {
      first_name: values.fName,
      second_name: values.sName,
      email: values.email,
      vehicle_id: parseInt(values.model),
      city_id: parseInt(values.location),
      date: format(values.date, "yyyy-MM-dd"),
      phone_number: values.phoneNumber,
      message: values.message || "",
      captcha_token: captcha_token,
    };

    try {
      const response = await fetch("https://www.yangwang.dev20.intersmarthosting.in/api/book-test-drive", {
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
      //console.log("API response:", data);
      setSubmitStatus({ type: "success", message: data?.message });
      form.reset(); // Reset form on success
      setDate(null);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleBlur = (fieldName, value) => {
    const trimmedValue = value.trim();
    form.setValue(fieldName, trimmedValue, { shouldValidate: true });
  };

  const errorStyle = "text-red-500";

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          form.handleSubmit(onSubmit)(e);
        }}
        className="flex flex-wrap -mx-[15px] 2xl:-mx-[25px]"
      >
        <div className="w-full lg:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="fName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={inputSyle}
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

        <div className="w-full lg:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="sName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={inputSyle}
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

        <div className="w-full md:w-1/2 xl:w-3/4 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={inputSyle}
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

        <div className="w-full md:w-1/2 xl:w-1/4 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select dir={locale === "ar" ? "rtl" : "ltr"} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className={selectInputSyle}>
                      <div className="flex items-center gap-2 flex-1 overflow-hidden">
                        <SelectValue placeholder={t("model_placeholder")} className="truncate text-[#999999] font-semibold" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="max-h-[268px] bg-white border border-[#CCCCCC] rounded-md shadow-md">
                      {modelData?.map((item, index) => (
                        <SelectItem
                          key={"model" + index}
                          value={item?.id?.toString()}
                          className="text-[10px] xl:text-[12px] font-medium text-[#1D0A44] py-1 px-2 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                        >
                          {item?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full xl:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={inputSyle}
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

        <div className="w-full md:w-1/2 xl:w-1/4 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select dir={locale === "ar" ? "rtl" : "ltr"} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className={selectInputSyle}>
                      <div className="flex items-center gap-2 flex-1 overflow-hidden">
                        <SelectValue placeholder={t("location_placeholder")} className="truncate text-[#999999] font-semibold" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="max-h-[268px] bg-white border border-[#CCCCCC] rounded-md shadow-md">
                      {locationData?.map((item, index) => (
                        <SelectItem
                          key={index}
                          value={item?.id?.toString()}
                          className="text-[10px] xl:text-[12px] font-medium text-[#1D0A44] py-1 px-2 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                        >
                          {item?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full md:w-1/2 xl:w-1/4 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "text-[10px] xl:text-[12px] 2xl:text-[14px] leading-tight font-medium text-start text-black placeholder:text-[#b3b3b3] w-full min-h-[35px] xl:min-h-[50px] max-w-full border border-gray-300 rounded-none px-3 xl:px-4 py-2 flex items-center justify-between hover:bg-gray-50 focus:ring-black/10",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? format(date, "PPP") : <span>{t("date_placeholder")}</span>}
                        <CalendarIcon className="size-3 xl:size-4 text-[#5949A7]" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0 bg-black text-white" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                          field.onChange(selectedDate);
                          setOpen(false);
                        }}
                        initialFocus
                        className="rounded-md border"
                        disabled={(date) => date < new Date().setHours(0, 0, 0, 0)}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className={inputSyle}
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

        <div className="w-full p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px] flex justify-end">
          <Button
            color="black"
            type="submit"
            aria-label="Send Message"
            className="max-w-[80px] lg:max-w-[97px] xl:max-w-[130px] 2xl:min-w-[150px] 3xl:min-w-[180px]"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>

        {submitStatus && (
          <div className="w-full p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px] text-center">
            <p className={submitStatus.type === "success" ? "text-green-500" : "text-red-500"}>{submitStatus.message}</p>
          </div>
        )}
      </form>
    </Form>
  );
}
