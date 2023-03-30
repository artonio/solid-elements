import {Transition} from "solid-transition-group";

export interface ICSSTransitionProps {
    children: any;
    onEnter?: (element: Element, done: () => void) => void;
    options?: {
        onEnter?: (element: Element, done: () => void) => void;
        onEntering?: (element: Element, done: () => void) => void;
        onEntered?: (element: Element, done: () => void) => void;
        onExit?: (element: Element) => void;
        onExiting?: (element: Element) => void;
        onExited?: (element: Element) => void;
    }
    onEntering?: (element: Element, done: () => void) => void;
    onEntered?: (element: Element, done: () => void) => void;
    onExit?: (element: Element) => void;
    onExiting?: (element: Element) => void;
    onExited?: (element: Element) => void;
}
export const CSSTransition = (props: ICSSTransitionProps) => {
    const onEnter = (node: any, isAppearing: any) => {
        props.onEnter && props.onEnter(node, isAppearing); // component
        props.options && props.options.onEnter && props.options.onEnter(node, isAppearing); // user option
    };

    const onEntering = (node: any, isAppearing: any) => {
        props.onEntering && props.onEntering(node, isAppearing); // component
        props.options && props.options.onEntering && props.options.onEntering(node, isAppearing); // user option
    };

    const onEntered = (node: any, isAppearing: any) => {
        props.onEntered && props.onEntered(node, isAppearing); // component
        props.options && props.options.onEntered && props.options.onEntered(node, isAppearing); // user option
    };

    const onExit = (node: any) => {
        props.onExit && props.onExit(node); // component
        props.options && props.options.onExit && props.options.onExit(node); // user option
    };

    const onExiting = (node: any) => {
        props.onExiting && props.onExiting(node); // component
        props.options && props.options.onExiting && props.options.onExiting(node); // user option
    };

    const onExited = (node: any) => {
        props.onExited && props.onExited(node); // component
        props.options && props.options.onExited && props.options.onExited(node); // user option
    };
    return (
        <Transition>{props.children}</Transition>
    )
}
