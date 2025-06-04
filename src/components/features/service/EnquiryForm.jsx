"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/layout/Button";

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

export default function OffersEnquiryForm({ title }) {
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

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
        className="flex flex-wrap -mx-[15px] 2xl:-mx-[25px]"
      >
        <div className="w-full 2xl:mb-[45px] lg:mb-[30px] mb-[20px] mx-2">
          <Select>
            <SelectTrigger
              className="w-full h-[70px] min-h-[70px] px-6  border border-[#CCCCCC]
                                     rounded-none bg-white text-[16px] text-[#B3B3B3] 
                                    font-medium outline-none shadow-none transition-all cursor-pointer 
                                    flex items-center justify-between relative"
            >
              <div className="flex items-center gap-2 flex-1 overflow-hidden ">
                <span className="font-semibold text-black  ">{title}</span>
                <SelectValue
                  placeholder="Yangwang U9 Electric Supercar Powertrain Warranty"
                  className="truncate text-[#999999] font-semibold"
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
        <div className="w-full lg:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="fName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full h-[50px]
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

        <div className="w-full lg:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="sName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full
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

        <div className="w-full p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full
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
        <div className="w-full p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full
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
                    placeholder="Mobile Numer"
                    {...field}
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="w-full
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

        <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px flex justify-end">
          <Button
            color="black"
            type="submit"
            aria-label="View All"
            className="max-w-[70px] sm:max-w-[80px] xl:max-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px]"
          >
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
}
