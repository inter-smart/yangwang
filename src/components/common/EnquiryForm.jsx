"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "../layout/Button";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";


const formSchema = z
    .object({

        fName: z.string().min(1, { message: "First Name is required." }),
        sName: z.string().min(1, { message: "Second Name is required." }),
        email: z.string().email({ message: "Invalid email address." }),
        phoneNumber: z
            .string()
            .min(10, { message: "Phone number must be at least 10 digits." })
            .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
        location: z.string().min(1, { message: "Please choose a Location" }),
        date: z.string().email({ message: "Please choose a Date" }),
        message: z.string().optional(),

    })


export default function EnquiryForm() {
    const [status, setStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    // Define form
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
        },
    });


    // Handle form submission
    async function onSubmit(values) {
        console.log("Form submission triggered with values:", values);
        try {
            setStatus("submitting");
            setErrorMessage(null);

            console.log("Sending fetch request to /api/send-email");
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            console.log("API response status:", response.status);

            const result = await response.json();
            if (response.ok) {
                console.log("Email sent successfully:", result);
                setStatus("success");
                form.reset();
            } else {
                console.error("API error:", result.message);
                setStatus("error");
                if (response.status === 404) {
                    setErrorMessage("API endpoint not found. Please check server configuration.");
                } else if (response.status === 405) {
                    setErrorMessage("Method not allowed. Please contact support.");
                } else {
                    setErrorMessage(result.message || "Failed to send email.");
                }
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setStatus("error");
            setErrorMessage("Network error or server is unreachable.");
        }
    }

    // Log form errors for debugging
    const errors = form.formState.errors;
    if (Object.keys(errors).length > 0) {
        console.log("Form validation errors:", errors);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={(e) => {
                    console.log("Form submit event triggered");
                    form.handleSubmit(onSubmit)(e);
                }}
                className="flex flex-wrap -mx-[15px] lg:-mx-[25px]"            >


                <div className="w-full lg:w-1/2 p-[15px] lg:px-[25px] md:py-[20px] py-[10px]">
                    <FormField
                        control={form.control}
                        name="fName"
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
                                        placeholder="First Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="w-full lg:w-1/2 p-[15px] lg:px-[25px] md:py-[20px] py-[10px">
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px">
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full lg:w-1/2 p-[15px] lg:px-[25px] md:py-[20px] py-[10px">
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full lg:w-1/4 p-[15px] lg:px-[25px_7px] md:py-[20px] py-[10px">
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger
                                            className="w-full min-h-[50px] px-6  border border-[#CCCCCC]
                                            rounded-none bg-white text-[16px] text-[#000000] 
                                            font-medium outline-none shadow-none transition-all cursor-pointer 
                                            flex items-center justify-between relative"
                                        >
                                            <div className="flex items-center gap-2 flex-1 overflow-hidden ">
                                                <SelectValue
                                                    placeholder="Select Location"
                                                    className="truncate text-[#999999] font-semibold"
                                                />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[16px] font-medium text-[#1D0A44]">
                                            <SelectItem
                                                value="warranty"
                                                className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                                            >
                                                Quatar
                                            </SelectItem>
                                            <SelectItem
                                                value="maintenance"
                                                className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                                            >
                                                India
                                            </SelectItem>
                                            <SelectItem
                                                value="insurance"
                                                className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                                            >
                                                USA
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full lg:w-1/4 p-[15px] lg:px-[7px_25px] md:py-[20px] py-[10px">
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger
                                            className="w-full min-h-[50px] px-6  border border-[#CCCCCC]
                                            rounded-none bg-white text-[16px] text-[#000000] 
                                            font-medium outline-none shadow-none transition-all cursor-pointer 
                                            flex items-center justify-between relative"
                                        >
                                            <div className="flex items-center gap-2 flex-1 overflow-hidden ">
                                                <SelectValue
                                                    placeholder="Select Location"
                                                    className="truncate text-[#999999] font-semibold"
                                                />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[16px] font-medium text-[#1D0A44]">
                                            <SelectItem
                                                value="warranty"
                                                className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                                            >
                                                Quatar
                                            </SelectItem>
                                            <SelectItem
                                                value="maintenance"
                                                className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                                            >
                                                India
                                            </SelectItem>
                                            <SelectItem
                                                value="insurance"
                                                className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                                            >
                                                USA
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea className="w-full
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
                                            " placeholder="Message" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px">
                    {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
                    {status === "error" && <p className="text-red-600">{errorMessage || "Failed to send message. Please try again."}</p>}
                    {Object.keys(errors).length > 0 && <p className="text-red-600">Please fix the form errors before submitting.</p>}
                    <Button
                        type="submit"
                        disabled={status === "submitting"}
                        color="base1"
                        className="max-w-[200px] h-[50px] ml-auto mt-[15px] xl:mt-[20px] 3xl:mt-[30px] bg-[#000000]"
                    >
                        {status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}

