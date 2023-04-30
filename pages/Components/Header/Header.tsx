import { SchoolIcon } from "@/pages/Utilities/Icon";
import { Inter, Vazirmatn } from "next/font/google";
import { useState } from "react";
const vazirMatn = Vazirmatn({subsets:['arabic'],weight:['100','200','300','400','500','600','700','800','900']})






const Header = () => {
    const [MobileMenuActive , setMobileMenuActive] = useState<Boolean>(false)
    return(
        <nav className={`flex items-center rtl justify-between pt-4 container mx-auto relative ${vazirMatn.className} z-20`} >
            <div className="flex items-center relative">
                <SchoolIcon size={54}/>
                <h1 className="text-xl font-bold">
                    مدرسه حاجی
                </h1>            
                <span className="h-[15rem] w-8 absolute -top-[50%] -translate-y-[50%] right-full -translate-x-[100%] rounded-full bg-red-300">
                    <span className="w-1/4 h-[95%] flex m-auto rounded-full bg-purple-800">

                    </span>
                </span>
            </div>
            <div className="flex p-2 ml-4 " 
                onClick={(e)=>{
                    
                    e.currentTarget.children[0].children[0].classList.toggle('top-3') ; 
                    e.currentTarget.children[0].children[0].classList.toggle('top-0') ; 
                    e.currentTarget.children[0].children[0].classList.toggle( 'rotate-[45deg]') ; 
                    e.currentTarget.children[0].children[1].classList.toggle('-left-[300%]') ; 
                    e.currentTarget.children[0].children[1].classList.toggle('left-0') ; 
                    e.currentTarget.children[0].children[2].classList.toggle('top-3' ) ; 
                    e.currentTarget.children[0].children[2].classList.toggle('top-6' ) ; 
                    e.currentTarget.children[0].children[2].classList.toggle('-rotate-[45deg]') ; 
                    console.log(e.currentTarget.children[0].children[2].classList) ;
                    setMobileMenuActive(!MobileMenuActive) ; 
                }}>
                <div className="flex flex-col relative w-10 h-8">
                    <span className="w-full origin-center absolute top-0 left-0 border-2 border-black bg-black rounded-full transition-all duration-[.5s]"></span>
                    <span className="w-full origin-center absolute top-3 left-0 border-2 border-black bg-black rounded-full transition-all duration-[.5s]"></span>
                    <span className="w-full origin-center absolute top-6 left-0 border-2 border-black bg-black rounded-full transition-all duration-[.5s]"></span>
                </div>
            </div>
            <div className="flex flex-col absolute left-0 w-full top-full gap-[.4rem] py-4 left-full transition-all duration-[.5s] bg-[#ffffff36] backdropfilter" style={{left : MobileMenuActive ? '0' : ''}}>
                <p className="p-2 pr-4 flex flex-col w-full after:border-b-2 after:border-b-purple-300 after:content-[''] after:block after:relative after:top-3 after:w-full relative z-[5] cursor-pointer before:w-full before:h-full before:block before:content-[''] before:absolute before:top-0 before:right-0 before:bg-[#ffffff2b] before:z-[-1] before:scale-x-0 before:origin-right before:transition-all before:duration-[.4s] hover:before:scale-x-100
                ">
                    صفحه نخست
                </p>
                <p className="p-2 pr-4 flex flex-col w-full after:border-b-2 after:border-b-purple-300 after:content-[''] after:block after:relative after:top-3 after:w-full relative z-[5] cursor-pointer before:w-full before:h-full before:block before:content-[''] before:absolute before:top-0 before:right-0 before:bg-[#ffffff2b] before:z-[-1] before:scale-x-0 before:origin-right before:transition-all before:duration-[.4s] hover:before:scale-x-100
                ">
                    پیش ثبت نام
                </p>
                <p className="p-2 pr-4 flex flex-col w-full after:border-b-2 after:border-b-purple-300 after:content-[''] after:block after:relative after:top-3 after:w-full relative z-[5] cursor-pointer before:w-full before:h-full before:block before:content-[''] before:absolute before:top-0 before:right-0 before:bg-[#ffffff2b] before:z-[-1] before:scale-x-0 before:origin-right before:transition-all before:duration-[.4s] hover:before:scale-x-100
                ">
                    مدرسه ما
                </p>
                <p className="p-2 pr-4 flex flex-col w-full after:border-b-2 after:border-b-purple-300 after:content-[''] after:block after:relative after:top-3 after:w-full relative z-[5] cursor-pointer before:w-full before:h-full before:block before:content-[''] before:absolute before:top-0 before:right-0 before:bg-[#ffffff2b] before:z-[-1] before:scale-x-0 before:origin-right before:transition-all before:duration-[.4s] hover:before:scale-x-100
                ">
                    درباره ما
                </p>
                <p className="p-2 pr-4 flex flex-col w-full after:border-b-2 after:border-b-purple-300 after:content-[''] after:block after:relative after:top-3 after:w-full relative z-[5] cursor-pointer before:w-full before:h-full before:block before:content-[''] before:absolute before:top-0 before:right-0 before:bg-[#ffffff2b] before:z-[-1] before:scale-x-0 before:origin-right before:transition-all before:duration-[.4s] hover:before:scale-x-100
                ">
                    تماس با ما
                </p>
                <div className="flex justify-evenly items-center mt-4">
                    <button className="p-2 border-2 border-purple-500 rounded-xl">
                        <span>
                            ورود معلمین
                        </span>
                    </button>
                    <button className="p-2 border-2 border-purple-500 rounded-xl">
                        <span>
                            ورود دانش آموزان
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-2 hidden">
                <p>
                    صفحه نخست
                </p>
                <p>
                    پیش ثبت نام
                </p>
                <p>
                    مدرسه ما
                </p>
                <p>
                    درباره ما
                </p>
                <p>
                    تماس با ما
                </p>
            </div>
            <div className="flex items-center gap-4 hidden">
                <p>
                    ورود معلمین
                </p>
                <p>
                    ورود دانش آموزان
                </p>
            </div>
        </nav>
    )
}
export default Header ; 