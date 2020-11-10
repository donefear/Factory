export interface GameComponent {
    run(milisecondsElapsed: number): ComponentResult;
}

export interface ComponentResult {
    UpdateInterface: boolean;
}