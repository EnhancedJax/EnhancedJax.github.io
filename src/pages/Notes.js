import React, { useEffect, useState } from 'react';
import Type from '../components/typing';
import ThinkingBlock from '../components/thinking';
import List from "../components/list";

function NotesPage() {

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    return (
        <>
            <div className="lg:pl-16 flex-row flex">
                <div className="px-5 pt-10 pb-20 w-full lg:w-[340px] lg:border-r lg:border-r-cborder">
                    <div className="w-full flex-col gap-10 flex">
                        <div className="pl-3 flex-col justify-center gap-2 flex">
                            <div className="text-white text-xl font-light lg:text-base">My University Notes</div>
                            <div className="text-cgray text-lg font-light lg:text-base">Typed with LaTeX.</div>
                        </div>
                        <div className="self-stretch h-[466px] flex-col justify-start items-start gap-3 flex">
                            <input
                                id="outlined-basic"
                                onChange={inputHandler}
                                placeholder="Type to search by course code"
                                type="text"
                                className="self-stretch p-4 bg-cborder rounded-lg border border-cborder flex-col justify-start items-start gap-2.5 flex text-cgray text-base font-light"
                            />
                            <List input={inputText} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// function NotesPage() {
//     const [showThinkingBlock, setShowThinkingBlock] = useState(true);
//     const [tI, sTI] = useState(0);
//     const isPresent = useIsPresent();

//     function goNext() {
//         sTI(n => n + 1);
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             setShowThinkingBlock(false);
//         }, 600);
//     }, []);

//     const [inputText, setInputText] = useState("");

//     let inputHandler = (e) => {
//         //convert input text to lower case
//         var lowerCase = e.target.value.toLowerCase();
//         setInputText(lowerCase);
//     };

//     return (
//         <div className="px-20 h-screen flex flex-row justify-center items-start gap-20 md:flex-col md:gap-10 md:h-auto md:p-12">
//             <div className="flex flex-col justify-center items-left h-full gap-5 w-3/5 md:w-full">
//                 {showThinkingBlock ? <ThinkingBlock /> : (
//                     <>
//                         <h1><Type t="my " f={goNext} /><span class="text-highlight">{tI >= 1 && <Type t="notes." f={goNext} />}</span></h1>
//                         <p>{tI >= 2 && <Type t="Personal notes that I wrote for my classes in The University of Hong Kong. Made for personal use only. Unmodified re-distribution is allowed. Content for reference only" d="5" f={goNext} />}</p>
//                         {tI >= 3 && <input
//                             id="outlined-basic"
//                             onChange={inputHandler}
//                             placeholder="Search by course code"
//                             type="text"
//                             className="w-4/5 rounded-lg bg-white border border-black px-4 py-1 text-black shadow-2xl md:w-full"
//                         />}
//                     </>
//                 )}
//             </div>
//             {showThinkingBlock ? "" : (
//                 <div className="flex flex-col justify-center items-left h-full gap-2 w-2/5 md:w-full">
//                     <List input={inputText} />
//                 </div>
//             )}
//             <PageTransition state={isPresent} />
//         </div>
//     );
// }

export default NotesPage;