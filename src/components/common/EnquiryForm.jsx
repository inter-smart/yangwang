"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../layout/Button";
const formSchema = z
    .object({

        fName: z.string().min(1, { message: "First Name is required." }),
        sName: z.string().min(1, { message: "Second Name is required." }),
        email: z.string().email({ message: "Invalid email address." }),
        phoneNumber: z
            .string()
            .min(10, { message: "Phone number must be at least 10 digits." })
            .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),

        message: z.string().optional(),

    })


export default function EnquiryForm() {

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
        console.log(values)
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
                                <FormMessage className={errorStyle} />
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
                                <FormMessage className={errorStyle} />
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
                                <FormMessage className={errorStyle} />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full  p-[15px] lg:px-[25px] md:py-[20px] py-[10px">
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
                                <FormMessage className={errorStyle} />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="w-full p-[15px] lg:px-[25px] md:py-[20px] py-[10px">

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

