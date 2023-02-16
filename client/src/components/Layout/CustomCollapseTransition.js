import { Transition } from "react-transition-group";

const CustomCollapseTransition = ({ children, in: inProp }) => {
    const duration = 200;

    const defaultStyle = {
        transition: `width ${duration}ms ease-in-out`,
        height: "100vh",
        borderRight: "1.5px solid gray",
    };

    const transitionStyles = {
        entering: { height: "100vh", width: "100%" },
        entered: { height: "100vh", width: "100%" },
        exiting: { height: "100vh", width: "20%" },
        exited: { height: "100vh", width: "20%"  },
    };

    return (
        <Transition in={inProp} timeout={duration} orientation="horizontal">
            {(state) => <div style={{ ...defaultStyle, ...transitionStyles[state] }}>{children}</div>}
        </Transition>
    );
};

export default CustomCollapseTransition;
