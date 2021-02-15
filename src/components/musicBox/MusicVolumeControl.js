import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Slider from "react-input-slider";
import { updateSoundscapeVolume } from "./../../containers/taskBoard/taskBoardSlice";
import { debounce } from "./../../helpers";

export function MusicVolumeControl() {
    const ssVolume = useSelector((s) => s.tasks.soundscape.volume);
    const dispatch = useDispatch();
    const [volume, setVolume] = useState(ssVolume * 100);

    const debouncedUpdateSoundscapeVolume = debounce((vol) => {
        dispatch(updateSoundscapeVolume(vol/100));
    }, 400);

    function onVolumeChangeHandler(vol) {
        setVolume(vol);
        debouncedUpdateSoundscapeVolume(vol);
    }

    return (
        <>
            <p>{volume}</p>
            <Slider axis="x" xstep={5} xmin={0} xmax={100} x={volume} onChange={({ x }) => onVolumeChangeHandler(x)} />
        </>
    );
}
