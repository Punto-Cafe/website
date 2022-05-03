import {useElementOnScreen} from "./useElementOnScreen";
import animations from "../styles/animations.module.css";
import {FC, useEffect, useState, ReactNode} from "react";

const FadeIn: FC<{children: ReactNode}> = ({children}) => {
    const [containerRef, isVisible] = useElementOnScreen()
    const [sectionCls, setSectionCls] = useState(animations.willFadeUp)
    useEffect(()=>{
            setSectionCls(isVisible?animations.didFadeUp:animations.willFadeUp)
    },[isVisible])

    return (
        <section ref={containerRef} className={sectionCls}>
            {children}
        </section>
    );
};

export default FadeIn;
