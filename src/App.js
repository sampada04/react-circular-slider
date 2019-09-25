import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import CircularSlider from "./CircularSlider";

const App = () => {
    const styles = StyleSheet.create({
        wrapper: {
            margin: '2rem'
        },

        h2: {
            borderBottom: '1px solid #eeeeee',
            paddingBottom: '0.5rem',
        },

        h3: {
            margin: '2rem 0',
        }
    });

    const onChange = (deg) => {
        console.log(deg);
    };

    return (
        <div className={css(styles.wrapper)}>
            <h2 className={css(styles.h2)}>react-circular-slider</h2>
            <h3 className={css(styles.h3)}>1. default:</h3>
            <pre>
                {`<CircularSlider />`}
            </pre>
            <p>&nbsp;</p>
            <CircularSlider
                onChange={onChange}
            />
            <p>&nbsp;</p>
            <h3 className={css(styles.h3)}>2. custom:</h3>
            <pre>
                {`<CircularSlider
    label="Alphabet"
    customData=["A","B","C",...]
    labelColor="#212121"
    knobColor="#212121"
    progressColorFrom="#ff8500"
    progressColorTo="#a15400"
    progressSize={4}
    trackColor="#eeeeee"
    trackSize={12}
>`}
            </pre>
            <p>&nbsp;</p>
            <CircularSlider
                label="Alphabet"
                labelColor={"#212121"}
                knobColor={"#212121"}
                progressColorFrom={"#ff8500"}
                progressColorTo={"#a15400"}
                progressSize={4}
                trackColor={"#eeeeee"}
                trackSize={12}
                customData={"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
            />
            <p>&nbsp;</p>
            <h3 className={css(styles.h3)}>3. custom:</h3>
            <pre>
                {`<CircularSlider
    label="savings"
    customData=["1€","2€","3€",...]
    labelColor="#009c9a"
    knobColor="#009c9a"
    progressColorFrom="#005a58"
    progressColorTo="#005a58"
    progressSize={24}
    trackColor="#eeeeee"
    trackSize={24}
>`}
            </pre>
            <p>&nbsp;</p>
            <CircularSlider
                label="savings"
                labelColor={"#009c9a"}
                knobColor={"#009c9a"}
                progressColorFrom={"#005a58"}
                progressColorTo={"#005a58"}
                progressSize={24}
                trackColor={"#eeeeee"}
                trackSize={24}
                customData={["1€","2€","3€","4€","5€","6€","7€","8€","9€","10€","20€","30€","40€","50€","60€","70€","80€","90€","100€","200€","300€","400€","500€","600€","700€","800€","900€","1000€","2000€","3000€","4000€","5000€","6000€","7000€","8000€","9000€","10000€"]}
                onChange={onChange}
            />
            <p>&nbsp;</p>
        </div>
    );
};

export default App;
