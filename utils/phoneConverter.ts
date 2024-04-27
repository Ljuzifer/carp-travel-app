export const phoneConverter = (telephone: string): string => {
    const onlyNumbers = telephone.replace(/\D/g, "");

    const country = onlyNumbers.slice(0, 2);
    const operator = onlyNumbers.slice(2, 5);
    const phone = onlyNumbers.slice(5);

    const convertedPhone = `+${country} (${operator}) ${phone.slice(
        0,
        2
    )} ${phone.slice(2, 4)} ${phone.slice(4)}`;

    return convertedPhone;
};
