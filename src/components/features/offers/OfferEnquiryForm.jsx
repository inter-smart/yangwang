"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/layout/Button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const formSchema = z.object({
  fName: z.string().min(1, { message: "First Name is required." }),
  sName: z.string().min(1, { message: "Second Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
  message: z.string().optional(),
});

export default function OfferEnquiryForm() {
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/enquiry-now`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API response:", data);
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
          console.log("Form submit event triggered");
          form.handleSubmit(onSubmit)(e);
        }}
        className="flex flex-wrap -mx-[15px] lg:-mx-[25px]"
      >
        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
          <Select>
            <SelectTrigger
              className="w-full min-h-[50px] xl:min-h-[60px] 3xl:min-h-[70px] px-4 xl:px-6  border border-[#CCCCCC]
                              rounded-none bg-white text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#B3B3B3] 
                             font-medium outline-none shadow-none transition-all cursor-pointer 
                             flex items-center justify-between relative"
            >
              <div className="flex items-center gap-2 flex-1 overflow-hidden ">
                <span className="font-semibold text-black">Select Offer:</span>
                <SelectValue
                  placeholder="Yangwang U9 Electric Supercar Powertrain Warranty"
                  className="truncate text-[#999999] font-normal"
                />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[16px] font-medium text-[#1D0A44]">
              <SelectItem
                value="warranty"
                className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
              >
                Yangwang U9 Electric Supercar Powertrain Warranty
              </SelectItem>
              <SelectItem
                value="maintenance"
                className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
              >
                Annual Maintenance Package
              </SelectItem>
              <SelectItem
                value="insurance"
                className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
              >
                Extended Insurance Plan
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
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
                              placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]
                    "
                    type="text"
                    placeholder="First Name"
                    {...field}
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
                              placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]
                    "
                    type="text"
                    placeholder="Second Name"
                    {...field}
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
                              placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]
                    "
                    type="text"
                    placeholder="Email"
                    {...field}
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
                              placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]
                    "
                    type="text"
                    placeholder="Mobile Number"
                    {...field}
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
                              placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
                              focus:outline-none
                              focus:ring-0
                              focus:shadow-none
                              focus-visible:ring-0
                              focus-visible:shadow-none
                              focus:border-b-[#5949A7]
                    "
                    placeholder="Message"
                    {...field}
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
            <div
              className={`text-center ${
                feedback.type === "success" ? "text-green-600" : "text-red-500"
              }`}
            >
              {feedback.message}
            </div>
          )}
        </div>

        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px] flex justify-end">
          <Button
            color="black"
            type="submit"
            aria-label="Send Message"
            className="max-w-[80px] sm:max-w-[85px] xl:max-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px]"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
