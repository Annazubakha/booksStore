import Icons from "../../assets/icons/sprite.svg";
interface IconProps {
  id: string;
  size: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  id,
  size,
  className,
}): JSX.Element => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};
