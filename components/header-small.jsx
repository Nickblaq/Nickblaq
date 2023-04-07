

export default function HeaderSmall({ text }){
    return (
      <>
        <div className="flex items-center">
          <hr className="w-16 sm:w-24 mr-1 border-violet" />
          <h4 className="font-light bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-sm md:text-8xl">{text}</h4>
        </div>
      </>
    );
}