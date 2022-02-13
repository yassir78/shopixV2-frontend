export const truncateString = (str: string, number: number): string => {
    return str.length > number ? str.slice(0, number) + '...' : str;
}