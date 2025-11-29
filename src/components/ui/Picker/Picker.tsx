import type { FC, ReactNode } from 'react';

type PickOption = {
    id: number;
    name: string;
    icon: ReactNode;
    isDefault?: boolean;
};

export type PickerProps = {
    defaultIcon: ReactNode;
    options: PickOption[];
    onOptionPick: (option: PickOption) => void;
};

export const Picker: FC<PickerProps> = ({ onOptionPick, options }) => {
    return <div>{}</div>;
};
