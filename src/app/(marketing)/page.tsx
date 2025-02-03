import Image from "next/image";
export default function HomePage() {
  return (
    <div  className="bg-[#5DC0A8] w-full">
      <div className="flex justify-between items-center gap-4 h-screen max-w-6xl mx-auto p-4">
        <Image 
          src='https://bytegrad.com/course-assets/youtube/expensestracker/preview.png' 
          alt='hero img'
          width={700}
          height={472}
          className="rounded-lg"
          />
        <div className="max-w-[600px]">
          <h1 className="text-4xl font-semibold text-gray-800">
            Tracker Expense 
          </h1>
          <p  className="text-xl text-gray-800">
            Keep track of your expenses with this simple and easy to use tracker.
          </p>
        </div>
      </div>
    </div>
  );
}
