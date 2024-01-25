import React from 'react';
import ReactLoading from 'react-loading';

function ThinkingBlock() {
    return (
        <div id="#thinkingBlock" className="flex gap-2 opacity-50 bg-neutral-100 p-1 rounded max-w-max items-center">
            <span className="font-extralight">&gt; Jax is thinking </span>
            <ReactLoading type="bubbles" color="#000" height={20} width={20} />
        </div>
    )
}

export default ThinkingBlock;