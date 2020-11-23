export interface GameComponent {
    run(milisecondsElapsed: number): ComponentResult;
    UpdateInterface(): void;
}

export interface ComponentResult {
    UpdateInterface: boolean;
}