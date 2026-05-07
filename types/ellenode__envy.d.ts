declare module '@ellenode/envy' {
    export function env(
        key: string,
        defaultValue?: string
    ): string;
}