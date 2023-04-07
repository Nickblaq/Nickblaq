import  HeaderSmall  from '@/components/header-small';
import SkillsIcons from './skills-icon';

export default function Skills() {
  return (
    <>
      <div className="py-10 mx-auto">
            <div className="">
              <HeaderSmall text="What does he do?" />
              <h1 className=" pt-2">
                He creates elegant, accessable, logical cross screen web mobile app solutions. In his hobby time, he
                read,research and cooks.
              </h1>
              <h1 className="mb-3 mt-6 text-2xl font-bold leading-none ">
                Think. <span className="text-pink">Code.</span> Debug.
              </h1>
            </div>

          <div className="flex flex-col justify-center items-center my-10 sm:mt-0">
            <SkillsIcons />
          </div>
      </div>
    </>
  );
}