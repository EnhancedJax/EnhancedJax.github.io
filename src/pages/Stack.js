import React from 'react';
import SectionIndicator from '../components/sectionindicator';

const StackPage = () => {
    return (
        <>
            <div className="flex justify-center items-center lg:pl-16">
                <div className="px-5 pt-10 pb-20 justify-center items-center inline-flex w-full max-w-[610px]">
                    <div className="w-full flex-col gap-10 flex">
                        <div className="pl-3 flex-col justify-center items-start gap-2 flex">
                            <div className="text-white text-xl font-light">Stack</div>
                            <div className="text-cgray text-lg font-light">Software products that I use</div>
                        </div>
                        <div>
                            <SectionIndicator>Software</SectionIndicator>
                            <div className="flex gap-3 flex-wrap">
                                <StackItem name="Arc" type="BROWSER" icon="arc" />
                                <StackItem name="Notion" type="PRODUCTIVITY" icon="notion" />
                                <StackItem name="Spotify" type="MUSIC" icon="spotify" />
                                <StackItem name="VSCode" type="CODE" icon="vscode" />
                                <StackItem name="Github Copilot" type="AI" icon="copliot" />
                                <StackItem name="iTerm2" type="TERMINAL" icon="iterm2" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const StackItem = ({ name, type, icon }) => {
    return (
        <div className="basis-[140px] grow h-[230px] p-3 bg-cfg rounded-lg flex-col gap-2.5 flex">
            <div className="justify-center items-center gap-2.5 flex w-full h-full">
                <img className="w-[72px]" src={`./img/${icon}.webp`} />
            </div>
            <div className="flex-col justify-center items-start gap-2 flex">
                <div className="p-1.5 rounded-md border border-cborder justify-center items-start inline-flex">
                    <div className="text-cgray text-xs font-light">{type}</div>
                </div>
                <div className="text-white font-light text-base">{name}</div>
            </div>
        </div >
    )
}

export default StackPage;