import Link from 'next/link'
import RegisterForm from './register-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Regiter() {
    return (
        <Tabs value="register" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="#">
                    <Link href="/login" className="w-full">Đăng nhập</Link>
                </TabsTrigger>
                <TabsTrigger value="register">Đăng ký</TabsTrigger>
            </TabsList>
            <TabsContent value="register">
                <RegisterForm />
            </TabsContent>
        </Tabs>

    )
}
