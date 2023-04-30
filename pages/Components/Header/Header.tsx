import { SchoolIcon } from "@/pages/Utilities/Icon";
import { useState } from "react";

const Header = () => {
    const [MobileMenuActive , setMobileMenuActive] = useState<Boolean>(false)
    return(
        <nav className="flex items-center rtl justify-between pt-4 container mx-auto relative">
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
                    e.currentTarget.children[0].children[0].classList.toggle( 'rotate-[45deg]') ; 
                    e.currentTarget.children[0].children[1].classList.toggle('-left-[300%]') ; 
                    e.currentTarget.children[0].children[2].classList.toggle('top-3' ) ; 
                    e.currentTarget.children[0].children[2].classList.toggle('-rotate-[45deg]') ; 
                    setMobileMenuActive(!MobileMenuActive) ; 
                }}>
                <div className="flex flex-col relative w-10 h-8">
                    <span className="w-full origin-center absolute top-0 left-0 border-2 border-black bg-black rounded-full transition-all duration-[.5s]"></span>
                    <span className="w-full origin-center absolute top-3 left-0 border-2 border-black bg-black rounded-full transition-all duration-[.5s]"></span>
                    <span className="w-full origin-center absolute top-6 left-0 border-2 border-black bg-black rounded-full transition-all duration-[.5s]"></span>
                </div>
            </div>
            <div className="flex flex-col absolute left-0 w-full top-full bg-gray-100 gap-2 pr-4 py-4 left-full transition-all duration-[.5s]" style={{left : MobileMenuActive ? '0' : ''}}>
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
                <p>
                    ورود معلمین
                </p>
                <p>
                    ورود دانش آموزان
                </p>
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