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

const formSchema = z.object({
  fName: z.string().min(1, { message: "First Name is required." }),
  sName: z.string().min(1, { message: "Second Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
  model: z.string().min(1, { message: "Please select a model." }),
  location: z.string().min(1, { message: "Please select a location." }),
  date: z.date({ required_error: "Please select a date." }),
  message: z.string().optional(),
});

export default function TestdriveBookingForm({ locationData, modelData }) {
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
      model: "",
      location: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    setSubmitStatus(null);

    const payload = {
      first_name: values.fName,
      second_name: values.sName,
      email: values.email,
      vehicle_id: parseInt(values.model),
      city_id: parseInt(values.location),
      date: format(values.date, "yyyy-MM-dd"),
      phone_number: values.phoneNumber,
      message: values.message || "",
    };

    try {
      const response = await fetch("https://www.yangwang.dev20.intersmarthosting.in/api/book-test-drive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // if (response.ok) {
      //   setSubmitStatus({ type: "success", message: "Test drive booked successfully!" });
      //   form.reset();
      //   setDate(null);
      // } else {
      //   const errorData = await response.json();
      //   setSubmitStatus({ type: "error", message: errorData.message || "Failed to book test drive. Please try again." });
      // }

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API response:", data);
      setSubmitStatus({ type: "success", message: data?.message });
      form.reset(); // Reset form on success
      setDate(null);
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred. Please try again later." });
    } finally {
      setIsLoading(false);
    }
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
        <div className="w-full lg:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="fName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
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
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
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

        <div className="w-full md:w-1/2 xl:w-3/4 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
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

        <div className="w-full md:w-1/2 xl:w-1/4 p-[15px] 2xl:px-[5px_25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="!text-[12px] 2xl:!text-[16px] 3xl:!text-[18px] w-full min-h-[50px] px-6 border border-[#CCCCCC] rounded-none bg-white text-[#000000] font-medium outline-none shadow-none transition-all cursor-pointer flex items-center justify-between relative">
                      <div className="flex items-center gap-2 flex-1 overflow-hidden">
                        <SelectValue placeholder="Select Model" className="truncate text-[#999999] font-semibold" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[16px] font-medium text-[#1D0A44]">
                      {modelData?.map((item, index) => (
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

        <div className="w-full xl:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
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

        <div className="w-full md:w-1/2 xl:w-1/4 p-[15px] 2xl:px-[25px_7px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
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

        <div className="w-full md:w-1/2 xl:w-1/4 p-[15px] 2xl:px-[7px_25px] md:py-[20px] py-[10px]">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "!text-[12px] 2xl:!text-[16px] 3xl:!text-[18px] font-medium text-black w-full h-[50px] min-h-[50px] max-w-full border border-gray-300 rounded-none px-4 flex items-center justify-between hover:bg-gray-50",
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
                        }}
                        initialFocus
                        className="rounded-md border"
                      />
                    </PopoverContent>
                  </Popover>
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
                    className="w-full h-[50px] border-0 border-b border-gray-300 rounded-none px-0 text-black font-normal text-[14px] 2xl:text-[16px] 3xl:text-[18px] placeholder:text-black placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px] focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none focus:border-b-[#5949A7]"
                    placeholder="Message"
                    {...field}
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
            className="max-w-[70px] sm:max-w-[80px] xl:max-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px]"
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

// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
// import { CalendarIcon } from "lucide-react";
// import { format } from "date-fns";
// import { useState } from "react";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import { cn } from "@/lib/utils";
// import { Button } from "../layout/Button";

// const formSchema = z.object({
//   fName: z.string().min(1, { message: "First Name is required." }),
//   sName: z.string().min(1, { message: "Second Name is required." }),
//   email: z.string().email({ message: "Invalid email address." }),
//   phoneNumber: z
//     .string()
//     .min(10, { message: "Phone number must be at least 10 digits." })
//     .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
//   model: z.string().min(1, { message: "Please select a model." }),
//   location: z.string().min(1, { message: "Please select a location." }),
//   date: z.date({ required_error: "Please select a date." }),
//   message: z.string().optional(),
// });

// export default function TestdriveBookingForm({ locationData, modelData }) {
//   const [date, setDate] = useState();

//   // Define form
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       fName: "",
//       sName: "",
//       email: "",
//       phoneNumber: "",
//       model: "",
//       location: "",
//       message: "",
//     },
//   });

//   function onSubmit(values) {
//     // Include the date in the form values
//     const formData = {
//       ...values,
//       date: date,
//     };
//     console.log(formData);
//   }

//   // Log form errors for debugging
//   const errors = form.formState.errors;
//   if (Object.keys(errors).length > 0) {
//     console.log("Form validation errors:", errors);
//   }
//   const errorStyle = "text-red-500";

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={(e) => {
//           console.log("Form submit event triggered");
//           form.handleSubmit(onSubmit)(e);
//         }}
//         className="flex flex-wrap -mx-[15px] 2xl:-mx-[25px]"
//       >
//         <div className="w-full lg:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
//           <FormField
//             control={form.control}
//             name="fName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     className="w-full
//                                                 h-[50px]
//                                                 border-0
//                                                 border-b
//                                                 border-gray-300
//                                                 rounded-none
//                                                 px-0
//                                                 text-black font-normal
//                                                 text-[14px] 2xl:text-[16px] 3xl:text-[18px]
//                                                 placeholder:text-black
//                                                 placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
//                                                 focus:outline-none
//                                                 focus:ring-0
//                                                 focus:shadow-none
//                                                 focus-visible:ring-0
//                                                 focus-visible:shadow-none
//                                                 focus:border-b-[#5949A7]"
//                     type="text"
//                     placeholder="First Name"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage className={errorStyle} />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="w-full lg:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
//           <FormField
//             control={form.control}
//             name="sName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     className="w-full
//                                                 h-[50px]
//                                                 border-0
//                                                 border-b
//                                                 border-gray-300
//                                                 rounded-none
//                                                 px-0
//                                                 text-black font-normal
//                                                 text-[14px] 2xl:text-[16px] 3xl:text-[18px]
//                                                 placeholder:text-black
//                                                 placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
//                                                 focus:outline-none
//                                                 focus:ring-0
//                                                 focus:shadow-none
//                                                 focus-visible:ring-0
//                                                 focus-visible:shadow-none
//                                                 focus:border-b-[#5949A7]"
//                     type="text"
//                     placeholder="Second Name"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage className={errorStyle} />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="w-full md:w-1/2 xl:w-3/4 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     className="w-full
//                                                 h-[50px]
//                                                 border-0
//                                                 border-b
//                                                 border-gray-300
//                                                 rounded-none
//                                                 px-0
//                                                 text-black font-normal
//                                                 text-[14px] 2xl:text-[16px] 3xl:text-[18px]
//                                                 placeholder:text-black
//                                                 placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
//                                                 focus:outline-none
//                                                 focus:ring-0
//                                                 focus:shadow-none
//                                                 focus-visible:ring-0
//                                                 focus-visible:shadow-none
//                                                 focus:border-b-[#5949A7]"
//                     type="text"
//                     placeholder="Email"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage className={errorStyle} />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="w-full md:w-1/2 xl:w-1/4 p-[15px] 2xl:px-[5px_25px] md:py-[20px] py-[10px]">
//           <FormField
//             control={form.control}
//             name="model"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Select value={field.value} onValueChange={field.onChange}>
//                     <SelectTrigger
//                       className="!text-[12px] 2xl:!text-[16px] 3xl:!text-[18px] w-full min-h-[50px] px-6  border border-[#CCCCCC]
//                                             rounded-none bg-white  text-[#000000]
//                                             font-medium outline-none shadow-none transition-all cursor-pointer
//                                             flex items-center justify-between relative"
//                     >
//                       <div className="flex items-center gap-2 flex-1 overflow-hidden ">
//                         <SelectValue placeholder="Select Model" className="truncate text-[#999999] font-semibold" />
//                       </div>
//                     </SelectTrigger>
//                     <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[16px] font-medium text-[#1D0A44]">
//                       {modelData?.map((item, index) => (
//                         <SelectItem
//                           key={index}
//                           value={item?.id?.toString()}
//                           className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
//                         >
//                           {item?.name}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </FormControl>
//                 <FormMessage className={errorStyle} />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="w-full xl:w-1/2 p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px]">
//           <FormField
//             control={form.control}
//             name="phoneNumber"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     className="w-full
//                                                 h-[50px]
//                                                 border-0
//                                                 border-b
//                                                 border-gray-300
//                                                 rounded-none
//                                                 px-0
//                                                 text-black font-normal
//                                                 text-[14px] 2xl:text-[16px] 3xl:text-[18px]
//                                                 placeholder:text-black
//                                                 placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
//                                                 focus:outline-none
//                                                 focus:ring-0
//                                                 focus:shadow-none
//                                                 focus-visible:ring-0
//                                                 focus-visible:shadow-none
//                                                 focus:border-b-[#5949A7]"
//                     type="text"
//                     placeholder="Mobile Number"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage className={errorStyle} />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="w-full md:w-1/2  xl:w-1/4 p-[15px] 2xl:px-[25px_7px] md:py-[20px] py-[10px]">
//           <FormField
//             control={form.control}
//             name="location"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Select value={field.value} onValueChange={field.onChange}>
//                     <SelectTrigger
//                       className="!text-[12px] 2xl:!text-[16px] 3xl:!text-[18px] w-full max-w-full min-h-[50px] px-6  border border-[#CCCCCC]
//                                             rounded-none bg-white text-[#000000]
//                                             font-medium outline-none shadow-none transition-all cursor-pointer
//                                             flex items-center justify-between relative"
//                     >
//                       <div className="flex items-center gap-2 flex-1 overflow-hidden ">
//                         <SelectValue placeholder="Select Location" className="truncate text-[#999999] font-semibold" />
//                       </div>
//                     </SelectTrigger>
//                     <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[18px] font-medium text-[#1D0A44]">
//                       {locationData?.map((item, index) => (
//                         <SelectItem
//                           key={index}
//                           value={item?.id?.toString()}
//                           className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
//                         >
//                           {item?.name}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </FormControl>
//                 <FormMessage className={errorStyle} />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="w-full md:w-1/2 xl:w-1/4 p-[15px] 2xl:px-[7px_25px] md:py-[20px] py-[10px]">
//           <FormField
//             control={form.control}
//             name="date"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <button
//                         type="button"
//                         className={cn(
//                           "!text-[12px] 2xl:!text-[16px] 3xl:!text-[18px] font-medium text-black w-full h-[50px] min-h-[50px] max-w-full border border-gray-300 rounded-none px-4 flex items-center justify-between  hover:bg-gray-50",
//                           !date && "text-muted-foreground"
//                         )}
//                       >
//                         {date ? format(date, "PPP") : "Select Date"}
//                         <CalendarIcon className="h-6 w-6 text-[#5949A7]" />
//                       </button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0 bg-black text-white" align="start">
//                       <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="rounded-md border" />
//                     </PopoverContent>
//                   </Popover>
//                 </FormControl>
//                 <FormMessage className={errorStyle} />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Textarea
//                     className="w-full
//                                                 h-[50px]
//                                                 border-0
//                                                 border-b
//                                                 border-gray-300
//                                                 rounded-none
//                                                 px-0
//                                                 text-black font-normal
//                                                 text-[14px] 2xl:text-[16px] 3xl:text-[18px]
//                                                 placeholder:text-black
//                                                 placeholder:text-[14px] 2xl:placeholder:text-[16px] 3xl:placeholder:text-[18px]
//                                                 focus:outline-none
//                                                 focus:ring-0
//                                                 focus:shadow-none
//                                                 focus-visible:ring-0
//                                                 focus-visible:shadow-none
//                                                 focus:border-b-[#5949A7]"
//                     placeholder="Message"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage className={errorStyle} />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="w-full p-[15px] 2xl:px-[25px] md:py-[20px] py-[10px] flex justify-end">
//           <Button
//             color="black"
//             type="submit"
//             aria-label="View All"
//             className="max-w-[70px] sm:max-w-[80px] xl:max-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px]"
//           >
//             Send Message
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// }
