import { Card } from "@/components/GrippInvesment/card";
import { cn } from "@/lib/utils";

// Explicitly typing the cardContents array
const cardContents: { id: number; title: string; description: string }[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!",
  },
  {
    id: 2,
    title: "Another Card Title",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!",
  },
];

export function GradientCardDemo() {
  return (
    <div className=" dark:bg-[#1a2333] ">
      <div className="container text-center py-12 mx-auto sm:flex-row gap-6">
        <div className="mb-12">
          <h1 className="text-5xl text-[#f4a950] dark:text-[#f4a950] font-semibold mb-2">
            Putting a GRIPP on Investments
          </h1>
          <p className="text-[20px] mt-4 dark:text-white text-[#333333]">
            Fixed Indexed Annuity concepts summarized.
          </p>
        </div>
        <div className="flex justify-center">
          {cardContents.map((content) => (
            <Card
              key={content.id}
              variant="gradient"  // Static variant value
              id={content.id}  // Pass the id explicitly
              title={content.title}  // Pass the title
              description={content.description}  // Pass the description
              className={cn(
                "max-w-[400px] flex-1 px-8",
                content.id === 1 ? "pr-0" : "",
                content.id === 2 ? "pl-0" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
