'use client'
import React, { useEffect, useState } from 'react';
import './slider.css';

interface SliderProps {
    thresholds: Array<number>;
    currentValue: number;
}

export default function Slider(props: SliderProps) {
    const [thresholds, setThresholds] = useState<Array<number>>(props.thresholds);
    const [currentValue, setCurrentValue] = useState<number>(props.currentValue);
    const [arrowLocation, setArrowLocation] = useState<string>('low-low');

    const setArrow = () => {
        if (currentValue >= thresholds[1]) {
            let size = thresholds[2] - thresholds[1];
            let sectionSize = size / 3;
            if (currentValue >= (thresholds[1] + (sectionSize * 2))) {
                setArrowLocation('high-high');
            } else if (currentValue >= (thresholds[1] + (sectionSize))) {
                setArrowLocation('high-mid');
            } else {
                setArrowLocation('high-low');
            }
        } else if (currentValue >= thresholds[0]) {
            let size = thresholds[1] - thresholds[0];
            let sectionSize = size / 3;
            if (currentValue >= (thresholds[0] + (sectionSize * 2))) {
                setArrowLocation('mid-high');
            } else if (currentValue >= (thresholds[0] + (sectionSize))) {
                setArrowLocation('mid-mid');
            } else {
                setArrowLocation('mid-low');
            }
        } else {
            let sectionSize = thresholds[0] / 3;
            console.log(sectionSize);
            if (currentValue >= (sectionSize * 2)) {
                setArrowLocation('low-high');
            } else if (currentValue >= (sectionSize)) {
                setArrowLocation('low-mid');
            } else {
                setArrowLocation('low-low');
            }
        }
    }

    useEffect(() => {
        setArrow();
    },[thresholds, currentValue])

    return (
        <div className="slider-main">
            <div className="slider-left">
                <div className={`slider-arrow slider-arrow-${arrowLocation}`}>{'>'}</div>
            </div>
            <div className="slider-right">
                <div className="slider-danger"></div>
                <div className="slider-warning"></div>
                <div className="slider-success"></div>
            </div>
        </div>
    );
}