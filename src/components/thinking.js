import React from 'react';
import ReactLoading from 'react-loading';

function ThinkingBlock() {
    return (
        <div id="#thinkingBlock" style={{ display: 'flex', gap: '10px', opacity: '0.5' }}>
            <span style={{ fontWeight: '200' }}>&gt; Jax is thinking </span>
            <ReactLoading type="bubbles" color="#000" height={20} width={20} />
        </div>
    )
}

export default ThinkingBlock;