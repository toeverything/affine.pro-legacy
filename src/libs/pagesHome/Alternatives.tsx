/* eslint-disable prettier/prettier */
import { useEffect, useMemo, useState } from 'react';
import styled from "styled-components";
const _alternatives = ['Notion', 'Miro', 'Monday'];
const Alternatives = () => {

    const [idx, setIdx] = useState(0);
    const [last, current] = useMemo(
        () => [
            _alternatives[idx],
            _alternatives[idx + 1] ? _alternatives[idx + 1] : _alternatives[0],
        ],
        [idx]
    );
    const [active, setActive] = useState(false);
    useEffect(() => {
        const handle = setInterval(() => {
            setActive(true);
            setTimeout(
                () => {
                    setIdx(idx => (_alternatives[idx + 1] ? idx + 1 : 0));
                    setActive(false);

                },
                380
            );
        }, 2000);
        return () => clearInterval(handle);
    }, []);


    return (
        <StyledTitle>
            <StyledScroll isActive={active}><StyledLast>{last}</StyledLast><StyledCurrent>{current}</StyledCurrent></StyledScroll>
            <StyledText>Alternative</StyledText>
        </StyledTitle>

    );
};

export default Alternatives;

const StyledTitle = styled.div({

    maxWidth: "1440px",
    display: "inline-flex",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "right",
    color: "#06449d",
    fontSize: "96px",
    fontWeight: 900,
    marginRight: "9px",
    marginTop: "16px",
    position: "relative",
    width: "100%",
    height: "128px",
    transform: "translateY(-8px)",
    overflowY: "hidden",

});
interface TitleProps {
    isActive: boolean;
}

const StyledScroll = styled.div<TitleProps>`

height:128px;
    position:absolute;
    text-align:right;
    right:550px;
    top:0;
    padding-top: 22px;
    line-height: 96px;
    transition:  0.5s ease-in;
    animation: ${(props: { isActive: boolean; }) => props.isActive ? "primary 400ms linear infinite" : "none"};
    @keyframes primary {
        from {
    top: 0%;
}
to {
    top: -100%;
}
    }
`
const StyledLast = styled.div({
    display: "none"
});
const StyledCurrent = styled.div({

});
const StyledText = styled.div({
    marginLeft: "440px"
});

