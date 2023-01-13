import GameBoardUI from "./GameBoardUI";
import { useEffect, useState } from "react";

function GameBoard() {
    const BOARD_WIDTH = 1000;
    const BOARD_HEIGHT = 1000;
    const BIRD_SIZE = 150;
    const GRAVITY = 6;
    const JUMP_POWER = 100;
    const GAP = 400;
    const OBSTACLE_WIDTH = 100;

    const [gameStarted, setGameStarted] = useState(false);
    const [birdPosition, setBirdPosition] = useState(500);
    const [topObstacleHeight, setTopObstacleHeight] = useState(300);
    const [obstaclePosition, setObstaclePosition] = useState(BOARD_WIDTH - OBSTACLE_WIDTH)

    const [score, setScore] = useState(0);

    const bottomObstacleHeight = BOARD_HEIGHT - (topObstacleHeight + GAP);


    // bird movement
    useEffect(() => {
        let timeId;
        if (gameStarted && birdPosition < BOARD_HEIGHT - BIRD_SIZE) {
            timeId = setInterval(() => {
                setBirdPosition((birdPosition) => birdPosition + GRAVITY);
            }, 25)

            return () => {
                clearInterval(timeId)
            }
        }
    });

    // obstacle movement
    useEffect(() => {
        let timeId;
        if (gameStarted && obstaclePosition > -OBSTACLE_WIDTH) {
            timeId = setInterval(() => {
                setObstaclePosition((obstaclePosition) => obstaclePosition - 10)
            }, 25);
            return () => {
                clearInterval(timeId)
            }
        } else {
            setScore((score) => score + 1);
            setObstaclePosition(BOARD_WIDTH - OBSTACLE_WIDTH);
            setTopObstacleHeight(Math.floor(Math.random() * (BOARD_HEIGHT - GAP)));
        }

    }, [gameStarted, obstaclePosition])

    // collision detection
    useEffect(() => {
        const topCollision = birdPosition < topObstacleHeight;
        const bottomCollision = birdPosition >= 1000 - bottomObstacleHeight;
        if (obstaclePosition >= 0 && obstaclePosition <= OBSTACLE_WIDTH && (topCollision || bottomCollision)) {
            setGameStarted(false);
            setScore((score) => score - 2);
        }
    }, [birdPosition, topObstacleHeight, bottomObstacleHeight, obstaclePosition])

    function onJump() {
        if (!gameStarted) {
            setGameStarted(true);
            setScore(0);
        }

        if (gameStarted && birdPosition > BIRD_SIZE)
            setBirdPosition((birdPosition) => birdPosition - JUMP_POWER);
    }

    return <GameBoardUI
        height={BOARD_HEIGHT}
        width={BOARD_WIDTH}
        birdSize={BIRD_SIZE}
        birdPosition={birdPosition}
        onJump={onJump}
        topObstacleHeight={topObstacleHeight}
        bottomObstacleHeight={bottomObstacleHeight}
        obstacleWidth={OBSTACLE_WIDTH}
        obstaclePosition={obstaclePosition}
        gap={GAP}
        score={score}
    />
}

export default GameBoard;