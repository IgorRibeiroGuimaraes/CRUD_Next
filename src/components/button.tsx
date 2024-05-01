interface ButtonProps {
  color?: 'gray' | 'blue';
  className?: string;
  children: any;
  onClick?: () => void
}

const colorClasses = {
  gray: 'bg-gradient-to-r from-gray-400 to-gray-500',
  blue: 'bg-gradient-to-r from-blue-400 to-blue-500',
};

export default function Button(props: ButtonProps) {
  const color = props.color || 'gray'; 
  return (
      <button onClick={props.onClick}
          className={`text-white px-4 py-2 rounded-md ${colorClasses[color]} ${props.className}`}
      >
          {props.children}
      </button>
  );
}
