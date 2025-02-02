import Image from "next/image";
export default function HomePage() {
  return (
    <div className="flex justify-between items-center h-screen">
      <Image 
        src='https://bytegrad.com/course-assets/youtube/expensestracker/preview.png' 
        alt='hero img'
        width={700}
        height={472}
        className="rounded-lg"
       />
       <div>
        <h1>
        Tracker Expense 
        </h1>
       </div>
    </div>
  );
}
