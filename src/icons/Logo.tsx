import { memo } from 'react';

interface ILogo {
    width?: number,
    height?: number,
}

const Logo: React.FC<ILogo> = (props) => {
    const {
        width = 100,
        height = 100
    } = props;
    
    return (
        <>
            <svg fill="none" width={width} height={height} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" stopColor="#667eea" /><stop offset="100%" stopColor="#764ba2" /></linearGradient></defs><circle cx="256" cy="256" r="240" fill="url(#a)" stroke="#fff" strokeWidth="8" /><rect width="192" height="240" x="160" y="120" fill="#fff" stroke="#e0e0e0" strokeWidth="4" rx="16" /><rect width="112" height="40" x="200" y="100" fill="#fff" stroke="#e0e0e0" strokeWidth="4" rx="20" /><rect width="152" height="8" x="180" y="160" fill="#667eea" rx="4" /><rect width="120" height="8" x="180" y="180" fill="#667eea" rx="4" /><rect width="140" height="8" x="180" y="200" fill="#667eea" rx="4" /><rect width="100" height="8" x="180" y="220" fill="#667eea" rx="4" /><rect width="130" height="8" x="180" y="240" fill="#667eea" rx="4" /><rect width="110" height="8" x="180" y="260" fill="#667eea" rx="4" /><rect width="145" height="8" x="180" y="280" fill="#667eea" rx="4" /><rect width="95" height="8" x="180" y="300" fill="#667eea" rx="4" /><circle cx="320" cy="140" r="12" fill="#667eea" /><path stroke="#fff" strokeWidth="2" d="M315 140l3 3 7-7" /></svg>
        </>
    );
};

export default memo(Logo);