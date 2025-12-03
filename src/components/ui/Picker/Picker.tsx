import { useState, type FC, type ReactNode } from 'react';

type PickOption = {
  id: number;
  name: string;
  icon: ReactNode;
};

export type PickerProps = {
  defaultIcon: ReactNode;
  options: PickOption[];
  onOptionPick: (option: PickOption) => void;
};

const APPROXIMATE_ITEM_HEIGHT = 32; // px

export const Picker: FC<PickerProps> = ({
  defaultIcon,
  onOptionPick,
  options,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentOption, setCurrentOption] = useState<PickOption | null>(null);

  const handleOptionClick = (option: PickOption) => {
    setCurrentOption(option);
    setIsHovered(false);

    onOptionPick(option);
  };

  const calculateHeight = () =>
    APPROXIMATE_ITEM_HEIGHT *
      (options.filter(
        (option) => !currentOption || option.id !== currentOption.id,
      ).length +
        1) +
    4;

  return (
    <div
      className="bg-brainstormySecondary flex w-8 origin-bottom flex-col
        items-center justify-center overflow-hidden rounded-[37px] p-2
        transition-all duration-[0.2s] ease-in-out hover:cursor-pointer"
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: `${!isHovered ? 32 : calculateHeight()}px`,
      }}
    >
      {isHovered && (
        <>
          {options
            .filter(
              (option) => !currentOption || option.id !== currentOption.id,
            )
            .map((option, index) => (
              <span
                key={index}
                className="mb-2 flex-0 opacity-60 transition-all duration-75
                  ease-out hover:scale-[1.2] hover:opacity-100"
                onClick={() => handleOptionClick(option)}
              >
                {option.icon}
              </span>
            ))}
          <div className="bg-brainstormyPrimary mb-2 h-px w-[120%]" />
        </>
      )}
      <span onMouseEnter={() => setIsHovered(true)} className="flex-0">
        {currentOption?.icon || defaultIcon}
      </span>
    </div>
  );
};
