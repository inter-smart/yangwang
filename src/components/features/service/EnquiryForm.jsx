"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/layout/Button";

// Patterns for validation
const nameRegex = /^[\p{L}'\- ]+$/u; // Unicode letters, apostrophes, hyphens, spaces
const unsafePattern = /(<|>|script|alert|onerror|javascript:|['";])/i; // XSS/SQL patterns
const specialCharsOnly = /^[@#!$%^&*()]+$/; // Only special characters
const phoneRegex = /^\+?[1-9]\d{9,14}$/; // E.164: + and 10–15 digits, first digit not zero

const formSchema = z.object({
  // First Name
  fName: z
    .string()
    .trim()
    .min(2, { message: "First Name must be at least 2 characters." })
    .max(255, { message: "First Name is too long." })
    .regex(nameRegex, { message: "Name can only contain letters, spaces, apostrophes, and hyphens." })
    .refine((val) => !/\d/.test(val), { message: "Name cannot contain numbers." })
    .refine((val) => !unsafePattern.test(val), { message: "Invalid or unsafe input in name." }),

  // Second Name
  sName: z
    .string()
    .trim()
    .min(2, { message: "Second Name must be at least 2 characters." })
    .max(255, { message: "Second Name is too long." })
    .regex(nameRegex, { message: "Name can only contain letters, spaces, apostrophes, and hyphens." })
    .refine((val) => !/\d/.test(val), { message: "Name cannot contain numbers." })
    .refine((val) => !unsafePattern.test(val), { message: "Invalid or unsafe input in name." }),

  // Email
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address." })
    .max(255, { message: "Email is too long." })
    .refine((val) => !unsafePattern.test(val), { message: "Invalid or unsafe email." }),

  // Phone Number (universal, E.164)
  phoneNumber: z
    .string()
    .trim()
    .regex(phoneRegex, { message: "Invalid phone number format. Use 10 to 15 digits, may start with '+'." })
    .refine((val) => !/^0+$/.test(val.replace(/\D/g, "")), { message: "Phone number cannot be all zeros." })
    .refine((val) => !/[a-zA-Z@!#<>'";]/.test(val), { message: "Invalid characters in phone number." }),

  // Location
  location: z.string().trim().min(1, { message: "Please choose a Location." }),

  // Date (as JavaScript Date object)
  date: z.date({ message: "Please choose a Date." }),

  // Message
  message: z
    .string()
    .trim()
    .min(2, { message: "Message must be at least 2 characters." })
    .max(5000, { message: "Message is too long." })
    .refine((val) => !specialCharsOnly.test(val), { message: "Cannot be only special characters." })
    .refine((val) => !unsafePattern.test(val), { message: "Invalid or unsafe input in message." })
    .optional(),
  offerId: z.string().min(1, { message: "Please select an offer." }),
});

export default function ServiceEnquiryForm({ offerData, locationData }) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fName: "",
      sName: "",
      email: "",
      phoneNumber: "",
      location: "",
      date: "",
      message: "",
      offerId: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values) {
    setIsLoading(true);
    setSubmitStatus(null);

    const payload = {
      first_name: values.fName,
      second_name: values.sName,
      email: values.email,
      city_id: parseInt(values.location),
      date: format(values.date, "yyyy-MM-dd"),
      phone_number: values.phoneNumber,
      offer_id: parseInt(values.offerId),
      message: values.message || "",
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/service-enquiry`, {
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
      console.log("API response:", data);
      setSubmitStatus({ type: "success", message: data?.message });
      form.reset(); // Reset form on success
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send enquiry. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const errorStyle = "text-red-500";

  const handleBlur = (fieldName, value) => {
    const trimmedValue = value.trim();
    form.setValue(fieldName, trimmedValue, { shouldValidate: true });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          console.log("Form submit event triggered");
          form.handleSubmit(onSubmit)(e);
        }}
        className="flex flex-wrap -mx-[15px] 2xl:-mx-[25px]"
      >
        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="offerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-black">Select Offer</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full min-h-[50px] xl:min-h-[60px] 3xl:min-h-[70px] px-4 xl:px-6 border border-[#CCCCCC] rounded-none bg-white text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#B3B3B3] font-medium outline-none shadow-none transition-all cursor-pointer flex items-center justify-between relative">
                      <div className="flex items-center gap-2 flex-1 overflow-hidden">
                        <SelectValue placeholder={"Select Offer"} className="truncate text-[#999999] font-normal" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[16px] font-medium text-[#1D0A44]">
                      {offerData?.map((item, index) => (
                        <SelectItem
                          key={index}
                          value={item?.id?.toString()}
                          className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                        >
                          {item?.title}
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

        <div className="w-full lg:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="fName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[12px] lg:placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
                    type="text"
                    placeholder="First Name"
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
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[12px] lg:placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
                    type="text"
                    placeholder="Second Name"
                    {...field}
                    onBlur={(e) => handleBlur("sName", e.target.value)}
                  />
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[12px] lg:placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
                    type="text"
                    placeholder="Email"
                    {...field}
                    onBlur={(e) => handleBlur("email", e.target.value)}
                  />
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
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[12px] lg:placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
                    type="tel"
                    inputMode="tel"
                    pattern="[\d\s()+-]*"
                    placeholder="Mobile Number"
                    {...field}
                    onInput={(e) => {
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
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="!text-[12px] 2xl:!text-[16px] 3xl:!text-[18px] w-full max-w-full min-h-[50px] px-6 border border-[#CCCCCC] rounded-none bg-white text-[#000000] font-medium outline-none shadow-none transition-all cursor-pointer flex items-center justify-between relative">
                      <div className="flex items-center gap-2 flex-1 overflow-hidden">
                        <SelectValue placeholder="Select Location" className="truncate text-[#999999] font-semibold" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[18px] font-medium text-[#1D0A44]">
                      {locationData?.map((item, index) => (
                        <SelectItem
                          key={index}
                          value={item?.id?.toString()}
                          className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
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
                        variant="outline"
                        className={cn(
                          "!text-[12px] 2xl:!text-[16px] 3xl:!text-[18px] w-full h-[50px] min-h-[50px] max-w-full border border-gray-300 rounded-none px-4 flex items-center justify-between font-medium text-black hover:bg-gray-50",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? format(date, "PPP") : "Select Date"}
                        <CalendarIcon className="h-6 w-6 text-[#5949A7]" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0 bg-black text-white" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
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
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[12px] lg:placeholder:text-[10px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
                    placeholder="Message"
                    {...field}
                    onBlur={(e) => handleBlur("message", e.target.value)}
                  />
                </FormControl>
                <FormMessage className={errorStyle} />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px] flex justify-end">
          <Button
            color="black"
            type="submit"
            aria-label="Send Message"
            className="max-w-[70px] sm:max-w-[80px] lg:max-w-[97px] xl:max-w-[130px] 2xl:min-w-[150px] 3xl:min-w-[180px]"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>

        {submitStatus && (
          <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px] text-center">
            <p className={submitStatus.type === "success" ? "text-green-500" : "text-red-500"}>{submitStatus.message}</p>
          </div>
        )}
      </form>
    </Form>
  );
}
