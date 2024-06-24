import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CTADiscordButton({
    className,
    link,
    text
}: {
    className?: string;
    link: string;
    text?: string;
}) {

    return (
        <>
            <a href={link}>
                <Button
                    className={cn(
                        "bg-white text-black font-[Orbitron] w-full",
                        className
                    )}
                >
                    {text}
                </Button>
            </a >
        </>
    );
}
