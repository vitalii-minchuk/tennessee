import Link from "next/link";

export default function ThankYouPage() {
    return (
      <div className="bg-zinc-950 h-screen">
        <h2>Thank you</h2>
        <p>we are processing your order....</p>
        <Link href={'/'}>back home</Link>
      </div>
    );
  }
  