import {createSignal} from "solid-js";
import {Accordion, AccordionTab} from "@solid-ui/solid-elements/src/components/Accordion/Accordion";
import {CodeHighlighter} from "@/components/CodeHighlighter";
import {v4 as uuidv4} from "uuid";

export const AccordionMultiple = () => {
    const [isToggled, setIsToggled] = createSignal(true)

    const basicAccordionCode = `
        <Accordion activeIndex={0} style={{width: '100%'}} multiple>
            <AccordionTab header="Header I">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p className="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
                    dolores eos qui ratione voluptatem sequi nesciunt.
                    Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                    blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati 
                    cupiditate non provident, similique sunt in culpa qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga. Et harum 
                    quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi 
                    optio cumque nihil impedit quo minus.
                </p>
        </AccordionTab>
    </Accordion>
    `

    const expandedAccordionCode = `
        import { Accordion, AccordionTab } from '@solid-ui/solid-elements';
        export const AccordionMultipleDemo = () => {
            return ( ${basicAccordionCode})
        }
    `
    const [code, setCode] = createSignal(basicAccordionCode)
    const sourceCodeToggled = () => {
        setIsToggled(!isToggled())
        if (isToggled()) {
            setCode(basicAccordionCode)
        } else {
            setCode(expandedAccordionCode)
        }
    }

    return (
        <>
            <h2 id="multiple">Multiple</h2>
            <div class="doc-section-description">
                <p>Only one tab at a time can be active by default, enabling <i>multiple</i> property changes this behavior to allow multiple tabs. In this case <i>activeIndex</i> needs to be an array.</p>
            </div>
            <div class="s-card">
                <Accordion activeIndex={0} multiple style={{width: '100%'}}>
                    <AccordionTab header="Header I">
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Header II">
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                            Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Header III">
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                            sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                            expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
            <CodeHighlighter language="tsx" id={uuidv4()} toggleSourceCode onToggleSourceCode={sourceCodeToggled}>
                {code()}
            </CodeHighlighter>
        </>
    )
}
