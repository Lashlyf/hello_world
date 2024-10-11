import Card from "@/components/card";
import Link from "next/link";

export default function Notifications(){
    return <Card>
        <div>Archived Notifications</div>
        <Link href="/complex-dashboard" className="ml-8">Default</Link>
        </Card>;
}