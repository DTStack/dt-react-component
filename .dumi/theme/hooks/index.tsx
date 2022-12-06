import { useState } from 'react';

const RESPONSIVE_MOBILE = 768;

export function useMobile() {
    const [isMobile] = useState<boolean>(window.innerWidth < RESPONSIVE_MOBILE);
    return isMobile;
}
