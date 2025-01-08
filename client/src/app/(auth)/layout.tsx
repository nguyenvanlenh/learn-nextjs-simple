import { ModeToggle } from "@/components/ui/mode-toggle";
export default function AuthLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className="flex justify-between my-3">
                <p className="text-2xl font-semibold">ToDo - NextJS</p>
                <ModeToggle />
            </div>
            <div className="grid place-items-center mt-5">
                {children}
            </div>
        </>
    );
}
