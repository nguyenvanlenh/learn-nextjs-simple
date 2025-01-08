import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./login-form"
import Link from "next/link"

export default function Login() {
    return (
        <Tabs value="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Đăng nhập</TabsTrigger>
                <TabsTrigger value="#">
                    <Link href="/register" className="w-full">
                        Đăng ký
                    </Link>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
        </Tabs>
    )
}
