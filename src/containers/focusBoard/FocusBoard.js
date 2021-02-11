import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { FocussedTask } from "./../../components/FocusBoard/FocussedTask";
import { EmptyFocusBox } from "./../../components/FocusBoard/EmptyFocusBox";
import { TaskSummary } from "./../../components/FocusBoard/TaskSummary";

const FocusBoardContainer = styled.div`
    flex: 3 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px black solid;
`;
const TaskSummaryContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 276px;
    height: 90px;
    margin: 20px;
    border-radius: 10px;
    /* box-shadow: 0 2px 10px rgba(166, 173, 201, 0.5);
    -webkit-box-shadow: 0 2px 10px rgba(166, 173, 201, 0.5); */
    background-color: #dedede;
`;

const FocussedTaskContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 276px;
    height: 346px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(166, 173, 201, 0.5);
    -webkit-box-shadow: 0 2px 10px rgba(166, 173, 201, 0.5);
    background-color: #f7f7fa;
`;

export function FocusBoard() {
    const focussedTaskIndex = useSelector((state) => state.tasks.meta.focussedTaskIndex);
    return (
        <FocusBoardContainer>
            <TaskSummaryContainer>
                <TaskSummary/>
            </TaskSummaryContainer>
            <FocussedTaskContainer>
                {focussedTaskIndex !== -1? <FocussedTask />:<EmptyFocusBox />}
            </FocussedTaskContainer>
        </FocusBoardContainer>
    );
}
