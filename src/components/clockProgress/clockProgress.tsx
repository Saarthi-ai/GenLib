import React, { useState, useEffect } from "react";
import styles from './ClockProgress.module.scss';
import agentIcon from '../../assets/agentIcon.svg'; // Import the SVG file

interface Props {
    duration: number;
}

const ClockProgress: React.FC<Props> = ({ duration }) => {
    const [rotation, setRotation] = useState<number>(0);
    const [time, setTime] = useState<number>(duration);

    useEffect(() => {
        const rotationPerSecond = 360 / duration;
        const interval = setInterval(() => {
            setRotation((prevRotation) => Math.min(prevRotation + rotationPerSecond, 360));
            setTime((prevTime) => Math.max(prevTime - 1, 0));
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [duration]);

    const getGradient = (rotation: number) => {
        return `conic-gradient(white ${rotation}deg, #6C00C0 ${rotation}deg)`;
    };

    return (
        <div>
            <img src={agentIcon} alt="Agent Icon" />
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
                {Math.floor(time / 3600) > 0 && <span>{Math.floor(time / 3600)} hr </span>}
                {Math.floor((time % 3600) / 60) > 0 && <span>{Math.floor((time % 3600) / 60)} mins </span>}
                <span>{Math.floor(time % 60)} secs remaining</span>
            </div>
        </div>
    );
};

export default ClockProgress;