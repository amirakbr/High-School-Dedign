import { Biology, Book, Chart, Chemic } from "@/pages/Utilities/Icon";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-col relative mt-14 overflow-hidden rounded-xl z-10">
            <div className="flex flex-col rtl bg-[#80808003] p-2" style={{backdropFilter:`blur(4px)`}}>
                <p className="text-xl">
                    مدرسه حاجی عوامی
                </p>
                <p>
                    دبیرستان بعثت به فضل و احسان خداوند سبحان در آستانه تحولی بزرگ در ارتقاء سطح علمی دانش آموزان و کسب عالی
                    ترین نتایج در مسابقات جهانی کنکور و المپیاد قرار گرفته است. این راه طولانی که به عنایت حضرت حق و توجهات خاصه
                    مولای ما حضرت رضا (علیه آلاف التحیه و الثناء) و امام عصر ارواحنافداه در زمانی کوتاه طی شده است و آنچه که در یک
                    مسیر طبیعی در مدت طولانی باید به نتیجه م یرسید در مدت زمان کمی به بهترین نتایج رسید، قطعاً ت الش بی وقفه و
                    مسئولانه جمعی از بهترین و خلا قترین جوانان با نیت های پاک و الهی، این مسیر را هموار کرده است.
                </p>
                <p className="border border-red-500">
                    درباره حاجی عوامی بیشتر بدانید
                </p>
            </div>
            <div className="w-full absolute top-[50%] -translate-y-[50%] z-[-1] p-4">
            //<Image src='/StudentImageHeroSection.png' alt="student picture hero section"   width={0} height={0} sizes="100vw" className="max-w-[18rem] min-w-[15rem] h-auto m-auto object-contain object-center"/>
                <span className="max-w-[18rem] min-w-[12rem] max-h-[18rem] min-h-[12rem] z-[-1] block absolute top-[50%] -translate-y-[50%] -translate-x-[50%] SpinAnimation left-[55%] rounded-full" style={{animationDuration:'20s'}}>
                    <span className="block absolute bg-red-500 right-[50%] top-0 -translate-y-[50%] rounded-full ReverseSpinAnimation" style={{animationDuration:'20s'}}>
                        <Book size={30}/>
                    </span>
                </span>
                <span className="max-w-[18rem] min-w-[12rem] max-h-[18rem] min-h-[12rem] z-[-1] block absolute top-[50%] -translate-y-[50%] -translate-x-[50%] ReverseSpinAnimation left-[45%] rounded-full" style={{animationDuration:'17s'}}>
                    <span className="block absolute bg-red-500 right-[50%] top-0 -translate-y-[50%] rounded-full SpinAnimation" style={{animationDuration:'17s'}}>
                        <Chemic size={30}/>
                    </span>
                </span>
                <span className="max-w-[18rem] min-w-[12rem] max-h-[18rem] min-h-[12rem] z-[-1] block absolute top-[50%] -translate-y-[50%] -translate-x-[50%] SpinAnimation left-[50%] rounded-full" style={{animationDuration:'15s'}}>
                    <span className="block absolute bg-red-500 right-[50%] top-0 -translate-y-[50%] rounded-full ReverseSpinAnimation" style={{animationDuration:'15s'}}>
                        <Biology size={30}/>
                    </span>
                </span>
                <span className="max-w-[18rem] min-w-[12rem] max-h-[18rem] min-h-[12rem] z-[-1] block absolute top-[50%] -translate-y-[50%] -translate-x-[50%] ReverseSpinAnimation left-[55%] rounded-full" style={{animationDuration:'13s'}}>
                    <span className="block absolute bg-red-500 right-[50%] top-0 -translate-y-[50%] rounded-full SpinAnimation" style={{animationDuration:'7s'}}>
                        <Chart size={53} />
                    </span>
                </span>
                <span className="max-w-[18rem] min-w-[12rem] max-h-[18rem] min-h-[12rem] z-[-1] block absolute top-[50%] -translate-y-[50%] -translate-x-[50%] SpinAnimation left-[45%] rounded-full" style={{animationDuration:'13s'}}>
                    <span className="block absolute bg-red-500 right-[50%] top-0 -translate-y-[50%] rounded-full ReverseSpinAnimation" style={{animationDuration:'10s'}}>
                        <Book size={30}/>
                    </span>
                </span>
            </div>
        </div>
    )
}
export default Hero ; 