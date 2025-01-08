"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema"
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { authService } from "@/services/authService";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { log } from "console";

const LoginForm = () => {
    const { toast } = useToast();
    const router = useRouter();
    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    async function onSubmit(values: LoginBodyType) {
        const res = await authService.login(values);

        if (res.ok) {
            toast({
                description: "Đăng nhập thành công thành công",
            })
            router.push("/");
            return;
        }
        console.log(res);
        toast({
            variant: "destructive",
            title: "Đăng nhập thất bại",
            description: "Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu",
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Thông tin đăng nhập</CardTitle>
                <CardDescription>
                    Vui lòng nhập đầy đủ thông tin đăng nhập!
                </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <CardContent className="space-y-2">
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="abc@gmail.com" type='email' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mật khẩu</FormLabel>
                                    <FormControl>
                                        <Input type='password' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Đăng nhập</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    )
}
export default LoginForm;