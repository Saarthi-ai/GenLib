import React, { useState, useEffect } from "react";
import styles from "./clockProgress.module.scss";

interface props {
    duration: number;
}

const ClockProgress = ({ duration }: props) => {
    const [rotation, setRotation] = useState<number>(0);
    const [time, setTime] = useState<any>(duration);

    useEffect(() => {
        const rotationPerSecond = 360 / duration;
        setTime(duration);
        const interval = setInterval(() => {
            setRotation((prevRotation) => {
                const newRotation = prevRotation + rotationPerSecond;
                return newRotation >= 360 ? 360 : newRotation;
            });

            setTime((prevTime: any) => {
                const newTime = Math.max(prevTime - 1, 0);
                if (newTime === 0) clearInterval(interval); // Stop interval when time reaches 0
                return newTime;
            });
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [duration]);

    const getGradient = (rotation: number) => {
        return `conic-gradient(white ${rotation}deg, #6C00C0 ${rotation}deg)`;
    };


    return (<>
        <div
            className={styles.clock}
            style={{
                ['--background' as any]: getGradient(rotation),
            }}
        >
            <div
                className={styles.needle}
                style={{
                    transform: `rotate(${rotation}deg)`,
                }}
            />
        </div>
        <div>
            {Math.floor(time / 3600) !== 0 && <span>{Math.floor(time / 3600)} hr </span>}
            {Math.floor((time % 3600) / 60) !== 0 && <span>{Math.floor((time % 3600) / 60)} mins </span>}
            {(Math.floor(time % 3600 % 60) !== 0 || Math.floor((time % 3600) / 60) === 0) && <span>{Math.floor(time % 3600 % 60)} secs </span>}
            remaining
        </div></>
    );
};

export default ClockProgress;