import { Transition } from "react-transition-group";

const CustomCollapseTransition = ({ children, in: inProp, duration }) => {

    const defaultStyle = {
        transition: `width ${duration}ms ease-in-out`,
        height: "100vh",
        borderRight: "1.5px solid gray",
    };

    const transitionStyles = {
        entering: { height: "100vh", width: "100%" },
        entered: { height: "100vh", width: "100%" },
        exiting: { height: "100vh", width: "60px" },
        exited: { height: "100vh", width: "60px" },
    };

    return (
        <Transition in={inProp} timeout={duration} orientation="horizontal">
            {(state) => <div style={{ ...defaultStyle, ...transitionStyles[state] }}>{children}</div>}
        </Transition>
    );
};

export default CustomCollapseTransition;
