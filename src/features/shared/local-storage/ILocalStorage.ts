export interface ILocalStorage {
	get(): string | undefined;
	set(value: string): void;
}
