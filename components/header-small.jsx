

export default function HeaderSmall({ number, text }){
    return (
      <>
        <div className="flex items-center gap-2 w-full text-2xl font-semibold pb-8">
        <p>{number}.</p>
        <h4 className="">{text}</h4>
        <hr className="flex-1 md:w-12 ml-1 border-[0.5px] border-indigo-900/50 dark:text-indigo-100/50" />
        </div>
      </>
    );
}