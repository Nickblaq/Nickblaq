import skills from "@/utils/skills";

export default function SkillName({name}) {
     return (
        <>
        <div className="w-full flex flex-wrap text-indigo-800/80 gap-3 break-words cursor-pointer hover:underline">
        <p key={name}>{name}</p>
        </div>
        </>
     )
 }